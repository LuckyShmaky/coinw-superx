#!/usr/bin/env python3
"""Pre-renders JS-generated blocks into index.html so the page shows full content even without JS
(e.g. static previews). Re-run after editing the script/data:  python3 build_static.py"""
import re,subprocess,json,html,tempfile,os,sys
D=os.path.dirname(os.path.abspath(__file__)); P=os.path.join(D,'index.html')
s=open(P,encoding='utf-8').read()
tmp=os.path.join(tempfile.mkdtemp(),'dump.html')
dump=s.replace('</script>\n</body>','''
setTimeout(()=>{const g=id=>document.getElementById(id).innerHTML;const o={ticker:g('ticker'),reel:g('reel'),tasks:g('tasks'),rules:g('rulesList'),pf:g('pf'),stages:g('stages'),board:g('board'),cd:g('cd'),
 prize:document.getElementById('prizeNum').textContent,stats:[...document.querySelectorAll('[data-count]')].map(e=>e.textContent)};
 document.body.innerHTML='<pre id="o"></pre>';document.getElementById('o').textContent=JSON.stringify(o)},2800);
</script>
</body>''')
open(tmp,'w',encoding='utf-8').write(dump)
chrome='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
out=subprocess.run([chrome,'--headless=new','--disable-gpu','--no-sandbox','--virtual-time-budget=6000','--dump-dom','file://'+tmp],capture_output=True,text=True,timeout=60).stdout
m=re.search(r'<pre id="o">(.*?)</pre>',out,re.S)
if not m: sys.exit('dump failed')
o=json.loads(html.unescape(m.group(1)))
def put(name,val):
    global s
    s=re.sub(rf'<!--S:{name}-->.*?<!--E:{name}-->',lambda _:'<!--S:%s-->%s<!--E:%s-->'%(name,re.sub(r'<!--[SE]:\w+-->','',val),name),s,flags=re.S)
put('ticker',o['ticker']);put('tasks',re.sub(r'\bclass="task rv in"','class="task rv"',o['tasks']))
put('reel',o['reel']);put('rules',o['rules']);put('pf',o['pf']);put('stages',o['stages']);put('board',o['board']);put('cd',o['cd'])
s=re.sub(r'(<div class="prize-num" id="prizeNum">)[^<]*',lambda m:m.group(1)+'5 000 000$',s)
vals=iter(o['stats'])
def stat(m):
    a=m.group(1);n=int(re.search(r'data-count="(\d+)"',a).group(1));pre=(re.search(r'data-pre="([^"]*)"',a) or [0,''])[1];suf=(re.search(r'data-suf="([^"]*)"',a) or [0,''])[1]
    return a+pre+f'{n:,}'.replace(',',' ')+suf
s=re.sub(r'(<b data-count="[^"]*"[^>]*>)[^<]*',stat,s)
open(P,'w',encoding='utf-8').write(s)
print('ok',{k:len(v) for k,v in o.items() if isinstance(v,str)},o['stats'])
