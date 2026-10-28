#!/usr/bin/env python3
"""Pre-renders JS-built blocks of partner.html (markers <!--S:id-->…<!--E:id-->) so the page shows content without JS.
Run after editing:  python3 build_static_partner.py"""
import re,subprocess,json,html,tempfile,os,sys
D=os.path.dirname(os.path.abspath(__file__));P=os.path.join(D,'partner.html')
s=open(P,encoding='utf-8').read()
ids=re.findall(r'<!--S:(\w+)-->',s)
tmp=os.path.join(tempfile.mkdtemp(),'dump.html')
inject='''
setTimeout(()=>{const o={};%s.forEach(i=>o[i]=document.getElementById(i).innerHTML);o.facts=[...document.querySelectorAll('.hero-facts [data-count],.pod b[data-count]')].map(e=>e.textContent);
 document.body.innerHTML='<pre id="o"></pre>';document.getElementById('o').textContent=JSON.stringify(o)},3000);
</script>'''%json.dumps(ids)
k=s.rindex('</script>');dump=s[:k]+inject+s[k+9:]
open(tmp,'w',encoding='utf-8').write(dump)
chrome='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
out=subprocess.run([chrome,'--headless=new','--disable-gpu','--no-sandbox','--virtual-time-budget=7000','--dump-dom','file://'+tmp],capture_output=True,text=True,timeout=90).stdout
m=re.search(r'<pre id="o">(.*?)</pre>',out,re.S)
if not m: sys.exit('dump failed')
o=json.loads(html.unescape(m.group(1)))
for i in ids:
    s=re.sub(rf'<!--S:{i}-->.*?<!--E:{i}-->',lambda _:'<!--S:%s-->%s<!--E:%s-->'%(i,re.sub(r'<!--[SE]:\w+-->','',o[i]),i),s,flags=re.S)
# final numbers for count-up elements (headless virtual time doesn't run rAF)
def fix(m):
    a=m.group(1);n=int(re.search(r'data-count="(\d+)"',a).group(1));pre=(re.search(r'data-pre="([^"]*)"',a) or [0,''])[1];suf=(re.search(r'data-suf="([^"]*)"',a) or [0,''])[1]
    return a+pre+f'{n:,}'.replace(',',' ')+suf
s=re.sub(r'(<b data-count="[^"]*"[^>]*>)[^<]*',fix,s)
# static pool snapshot (JS animates these live)
s=s.replace('<b id="poolNow">0,00</b>','<b id="poolNow">500,00</b>').replace('<b id="poolVol">0</b>','<b id="poolVol">19 820 000</b>')
s=re.sub(r'(<div class="fill" id="fill")[^>]*>',r'\1 style="width:71%">',s)
for i,v in enumerate(['250,00','150,00','100,00']):
    s=re.sub(r'(<b data-i="%d">)[^<]*'%i,lambda m:m.group(1)+v,s)
s=re.sub(r'(<div class="node)( on)?(" data-i="[01]")',r'\1 on\3',s)
s=re.sub(r'(<div class="bar2"><i data-w="(\d+)")[^>]*>',lambda m:m.group(1)+' style="width:%s%%">'%m.group(2),s)
open(P,'w',encoding='utf-8').write(s)
print('ok',ids)
