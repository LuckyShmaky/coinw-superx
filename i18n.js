/* Локализация тестового стенда: RU (исходный текст страниц) / EN / 中文.
   Язык: ?lang=ru|en|zh → сохранённый выбор → язык браузера → RU.
   Словарь: ключ — русский текст как он стоит в странице, значение — [английский, китайский].
   {x} — подстановка, её нужно сохранить в переводе. Перевод черновой, нужна вычитка. */
(function () {
  var LANGS = ['ru', 'en', 'zh'], KEY = 'cw_lang';

  function pick() {
    var q = null;
    try { q = new URLSearchParams(location.search).get('lang'); } catch (e) {}
    if (LANGS.indexOf(q) >= 0) { try { localStorage.setItem(KEY, q); } catch (e) {} return q; }
    try { var s = localStorage.getItem(KEY); if (LANGS.indexOf(s) >= 0) return s; } catch (e) {}
    var n = (navigator.language || '').toLowerCase();
    if (n.indexOf('zh') === 0) return 'zh';
    if (n.indexOf('en') === 0) return 'en';
    return 'ru';
  }

  var D = {
    /* ---------- общее: шапка, плашка, футер ---------- */
    'Тестовый стенд · прототип страницы, все данные демонстрационные': ['Test environment · page prototype, all data is for demo only', '测试环境 · 页面原型，所有数据均为演示数据'],
    'Купить крипту': ['Buy Crypto', '买币'],
    'Рынки': ['Markets', '行情'],
    'Спот': ['Spot', '现货'],
    'Фьючерсы': ['Futures', '合约'],
    'Боты': ['Bots', '机器人'],
    'Копи-трейдинг': ['Copy Trading', '跟单'],
    'Earn': ['Earn', '理财'],
    'Центр наград': ['Rewards Hub', '奖励中心'],
    'Войти': ['Log In', '登录'],
    'Регистрация': ['Sign Up', '注册'],
    'Зарегистрироваться': ['Join Now', '立即报名'],
    'Поделиться': ['Share', '分享'],
    'Поддержка': ['Support', '客服'],
    'Правила события': ['Event Rules', '活动规则'],
    'Предупреждение о риске': ['Risk Warning', '风险提示'],
    'Криптовалюты и производные от них инструменты — это инновационные финансовые продукты с большой волатильностью и высокими инвестиционными рисками.': ['Cryptocurrencies and their derivatives are innovative financial products with high volatility and high investment risk.', '加密货币及其衍生品是具有高波动性和高投资风险的创新金融产品。'],
    'CoinW стремится предоставлять пользователям простые в использовании торговые инструменты, однако сама торговля по-прежнему требует определенных навыков. Торговля цифровыми активами и их производными инструментами является высокорискованной деятельностью и может привести к частичной или полной потере средств. Вы должны тщательно оценить свое финансовое положение и вышеупомянутые риски перед тем как использовать услуги CoinW. Вы несете ответственность за возможные убытки. Если необходимо, пожалуйста, проконсультируйтесь с соответствующими специалистами, прежде чем инвестировать свои средства.': ['CoinW strives to provide users with easy-to-use trading tools, but trading itself still requires certain skills. Trading digital assets and their derivatives is a high-risk activity and may result in partial or total loss of funds. You should carefully assess your financial situation and the risks above before using CoinW services. You are responsible for any losses. If necessary, please consult appropriate professionals before investing your funds.', 'CoinW 致力于为用户提供简单易用的交易工具，但交易本身仍需要一定的技能。数字资产及其衍生品交易属于高风险活动，可能导致部分或全部资金损失。在使用 CoinW 服务前，请仔细评估自身财务状况及上述风险，您需对可能产生的损失负责。如有需要，请在投资前咨询相关专业人士。'],
    'Торговля путем следования или копирования сделок других трейдеров сопряжена с высоким уровнем риска, даже если вы следуете или копируете лучших трейдеров. Прошлые результаты членов сообщества CoinW не являются надежным показателем их будущих результатов. Контент на торговой платформе CoinW создается членами ее сообщества и не содержит советов или рекомендаций от имени CoinW.': ['Following or copying the trades of other traders carries a high level of risk, even if you follow or copy top traders. Past results of CoinW community members are not a reliable indicator of their future results. Content on the CoinW trading platform is created by its community members and does not constitute advice or recommendations on behalf of CoinW.', '跟随或复制其他交易者的交易具有较高风险，即使您跟随或复制的是顶尖交易者。CoinW 社区成员的过往业绩并不能可靠预示其未来表现。CoinW 交易平台上的内容由社区成员创建，不构成 CoinW 的任何建议或推荐。'],
    'Сбросить демо-состояние': ['Reset demo state', '重置演示状态'],

    /* ---------- общее: таймер, вход, уведомления ---------- */
    'дней': ['days', '天'],
    'часов': ['hours', '时'],
    'минут': ['min', '分'],
    'секунд': ['sec', '秒'],
    'Вход в CoinW': ['Log in to CoinW', '登录 CoinW'],
    'Это демо-страница: данные не вводятся и никуда не отправляются.': ['This is a demo page: no data is entered or sent anywhere.', '这是演示页面：不会输入或发送任何数据。'],
    'Продолжить как демо-пользователь': ['Continue as demo user', '以演示用户继续'],
    'Вы вошли в демо-аккаунт': ['You are logged in to the demo account', '已登录演示账户'],
    'Вы участвуете ✓': ['You’re in ✓', '已报名 ✓'],
    'Отлично': ['Great', '好的'],
    'Демо: засчитан объём {v} USDT': ['Demo: {v} USDT of volume counted', '演示：已计入 {v} USDT 交易量'],

    /* ---------- index.html: hero и цифры ---------- */
    'NoWember · SuperX · 1–30 ноября': ['NoWember · SuperX · Nov 1–30', 'NoWember · SuperX · 11月1日–30日'],
    'NoWember · SuperX · старт 1 ноября': ['NoWember · SuperX · starts Nov 1', 'NoWember · SuperX · 11月1日开启'],
    'NoWember · SuperX · идёт сейчас': ['NoWember · SuperX · live now', 'NoWember · SuperX · 进行中'],
    'Зарегистрируйтесь для участия в случайном эйрдропе и разделите призовой фонд!': ['Sign up to join the random airdrop and share the prize pool!', '报名参与随机空投，瓜分奖池！'],
    'Призовой фонд': ['Prize pool', '奖池'],
    '5 000 000$': ['$5,000,000', '$5,000,000'],
    'Зарегистрируйтесь и выиграйте': ['Sign up and win', '报名赢奖励'],
    'Поделитесь, чтобы получить $15': ['Share to get $15', '分享得 $15'],
    'Мои награды': ['My rewards', '我的奖励'],
    'ДО НАЧАЛА СОБЫТИЯ': ['EVENT STARTS IN', '距活动开始'],
    'ДО ОКОНЧАНИЯ СОБЫТИЯ': ['EVENT ENDS IN', '距活动结束'],
    'Место в турнире': ['Tournament 1st place', '交易赛冠军'],
    '$100 000': ['$100,000', '$100,000'],
    'Каждая попытка': ['Every draw', '每次抽奖'],
    'побеждает': ['wins', '必中奖'],
    'Эйрдроп за регистрацию': ['Sign-up airdrop', '报名空投'],
    'призовой фонд акции': ['total prize pool', '活动总奖池'],
    'до $': ['up to $', '最高 $'],
    'до $300 000': ['up to $300,000', '最高 $300,000'],
    'максимальный выигрыш на человека в турнире': ['max tournament reward per person', '交易赛每人最高奖励'],
    'призовых мест в каждом из 3 этапов': ['prize places in each of 3 stages', '3 个阶段各设获奖名额'],
    'каждая попытка в розыгрыше приносит приз': ['every draw wins a prize', '每次抽奖都有奖'],
    '🎰 Лотерея': ['🎰 Lucky Draw', '🎰 抽奖'],
    '🏆 Торговый турнир': ['🏆 Trading Tournament', '🏆 交易赛'],

    /* ---------- index.html: лотерея ---------- */
    'Розыгрыш': ['Lucky', '幸运'],
    'призов': ['Draw', '抽奖'],
    'С 01.11.2026, 10:00 до 30.11.2026, 23:59 (UTC+8)': ['Nov 1, 2026, 10:00 – Nov 30, 2026, 23:59 (UTC+8)', '2026年11月1日 10:00 至 2026年11月30日 23:59（UTC+8）'],
    'Выполняйте задания, чтобы получать попытки в розыгрыше. Каждая попытка приносит приз!': ['Complete tasks to earn draws. Every draw wins a prize!', '完成任务获取抽奖次数，每次抽奖都有奖！'],
    'Поздравляем {name} с выигрышем {prize}': ['Congrats to {name} on winning {prize}', '恭喜 {name} 获得 {prize}'],
    'Вы': ['You', '您'],
    'Осталось попыток:': ['Draws left:', '剩余抽奖次数：'],
    'Войти/регистрация': ['Log In / Sign Up', '登录/注册'],
    'Крутить ({n})': ['Spin ({n})', '抽奖（{n}）'],
    'Получить попытки': ['Get more draws', '获取抽奖次数'],
    'Вы уже участвуете в акции': ['You’re already in the event', '您已报名本活动'],
    'Вы в игре! 🎃': ['You’re in! 🎃', '欢迎加入！🎃'],
    'Регистрация прошла успешно. Вы участвуете в случайном эйрдропе и делите призовой фонд {pool}.': ['Registration successful. You’re in the random airdrop and share the {pool} prize pool.', '报名成功！您已参与随机空投，瓜分 {pool} 奖池。'],
    'Бонус за регистрацию: {bonus}.': ['Sign-up bonus: {bonus}.', '报名奖励：{bonus}。'],
    '+1 попытка': ['+1 draw', '+1 次抽奖机会'],
    'Сначала зарегистрируйтесь в акции': ['Join the event first', '请先报名活动'],
    'Ссылка скопирована · +1 попытка за шеринг': ['Link copied · +1 draw for sharing', '链接已复制 · 分享获得 +1 次抽奖机会'],
    'Ссылка скопирована': ['Link copied', '链接已复制'],
    'Пока пусто — крутите розыгрыш!': ['Nothing yet — try the lucky draw!', '暂无奖励，快去抽奖吧！'],
    'Закрыть': ['Close', '关闭'],
    'Попытки закончились — выполняйте задания!': ['Out of draws — complete tasks to get more!', '抽奖次数已用完，快去做任务吧！'],
    'Поздравляем! 🎉': ['Congratulations! 🎉', '恭喜！🎉'],
    'Награда уже зачислена на ваш аккаунт. Срок использования — 7 дней.': ['The reward has been credited to your account. Valid for 7 days.', '奖励已发放至您的账户，有效期 7 天。'],
    'Забрать': ['Claim', '领取'],
    'попытка': ['draw', '次抽奖机会'],
    'попыток': ['draws', '次抽奖机会'],
    'задание выполнено (демо)': ['task completed (demo)', '任务已完成（演示）'],
    'новый уровень достигнут': ['new tier reached', '达成新档位'],
    'Демо: приглашённый пользователь ещё не совершил сделку': ['Demo: the invited user hasn’t traded yet', '演示：受邀用户尚未完成交易'],

    /* ---------- index.html: задания ---------- */
    'Выполняйте задания, и получайте попытки розыгрыша. Каждая попытка побеждает!': ['Complete tasks and earn draws. Every draw is a win!', '完成任务赢取抽奖次数，每次抽奖必中奖！'],
    'Все': ['All', '全部'],
    'Первое использование': ['First-time', '首次体验'],
    'Торговать/депозит': ['Trade/Deposit', '交易/充值'],
    'Пригласить друзей': ['Invite Friends', '邀请好友'],
    'Наторговано': ['Traded', '已交易'],
    'Пригласили': ['Invited', '已邀请'],
    '(МАКС.)': ['(MAX)', '（上限）'],
    'ВЫПОЛНЕНО ✓': ['DONE ✓', '已完成 ✓'],
    'Пользователь(и)': ['user(s)', '人'],
    '🔥Первая сделка на фьючерсах ≥50 USDT': ['🔥First futures trade ≥50 USDT', '🔥首笔合约交易 ≥50 USDT'],
    'Совершите первую сделку на фьючерсах и получите попытку розыгрыша и Ваучер на позицию на $15 — оба бонуса включены!': ['Make your first futures trade to get a lucky draw and a $15 Position Voucher — both bonuses included!', '完成首笔合约交易，即可获得抽奖次数和 $15 仓位券，两份奖励一起拿！'],
    'ТОРГОВАТЬ': ['TRADE', '去交易'],
    'Первая спот сделка 50 USDT': ['First spot trade of 50 USDT', '首笔现货交易 50 USDT'],
    'В течение периода выполнения задания выполните задание (первый объем торгов ≥ 50 USDT; охват торгов: Спот торговля) «Первая спот сделка 50 USDT», чтобы получить Попытки + 1.': ['During the task period, complete “First spot trade of 50 USDT” (first trading volume ≥ 50 USDT; scope: spot trading) to get Draws +1.', '在任务期间完成「首笔现货交易 50 USDT」任务（首笔交易量 ≥ 50 USDT；统计范围：现货交易），即可获得抽奖次数 +1。'],
    'Первый копи-трейдинг ордер': ['First copy trading order', '首笔跟单'],
    'Выполните задание (Объем копи-трейдинга ≥ 50 USDT; Тип копи-трейдинга: Спот копи-трейдинг, Копи-трейдинг стандартных фьючерсов, Копи-трейдинг бессрочных фьючерсов; Копи-трейдинг стандартных фьючерсов включает: Криптовалюта; Копи-трейдинг бессрочных фьючерсов включает: Криптовалюта, TradFi) в рамках «Первый копи-трейдинг ордер», прежде чем оно закончится, чтобы получить Попытки + 1.': ['Complete “First copy trading order” before it ends (copy trading volume ≥ 50 USDT; types: spot copy trading, standard futures copy trading, perpetual futures copy trading; standard futures copy trading covers crypto; perpetual futures copy trading covers crypto and TradFi) to get Draws +1.', '在任务结束前完成「首笔跟单」任务（跟单交易量 ≥ 50 USDT；跟单类型：现货跟单、标准合约跟单、永续合约跟单；标准合约跟单包括：加密货币；永续合约跟单包括：加密货币、TradFi），即可获得抽奖次数 +1。'],
    'ПЕРЕЙТИ К КОПИ-ТРЕЙДИНГУ': ['GO TO COPY TRADING', '去跟单'],
    'Первый сеточный ордер': ['First grid order', '首笔网格订单'],
    'Выполните задание «Первый сеточный ордер», прежде чем оно закончится, чтобы получить Попытки + 1.': ['Complete “First grid order” before it ends to get Draws +1.', '在任务结束前完成「首笔网格订单」任务，即可获得抽奖次数 +1。'],
    'СОЗДАТЬ СЕТКУ': ['CREATE GRID', '创建网格'],
    'Первое повышение до VIP 1+': ['First upgrade to VIP 1+', '首次升级至 VIP 1+'],
    'После регистрации на событие, вы заработаете Попытки + 2, если получите VIP 1 и выше через торговлю на фьючерсах, споте или за счет стоимости активов.': ['After joining the event, get Draws +2 by reaching VIP 1 or higher through futures trading, spot trading or asset value.', '报名活动后，通过合约交易、现货交易或资产价值升级至 VIP 1 及以上，即可获得抽奖次数 +2。'],
    'ПОВЫСИТЬ': ['UPGRADE', '去升级'],
    '👑 Только для VIP: получайте популярные токены напрямую!': ['👑 VIP only: get popular tokens directly!', '👑 VIP 专享：直接领取热门代币！'],
    'Накопите указанный объём фьючерсной торговли криптовалютами и получите попытку розыгрыша и популярные токены.': ['Reach the required crypto futures trading volume to get a lucky draw and popular tokens.', '累计达到指定的加密货币合约交易量，即可获得抽奖次数和热门代币。'],
    'Торговля фьючерсами на TradFi': ['TradFi futures trading', 'TradFi 合约交易'],
    'Достигните указанного объема торгов фьючерсами на TradFi и получите соответствующее количество лотерейных билетов!': ['Reach the TradFi futures trading volume targets to get the matching number of draws!', '达到指定的 TradFi 合约交易量，即可获得相应的抽奖次数！'],
    'Пригласите 5 пользователей': ['Invite 5 users', '邀请 5 位好友'],
    'После регистрации на событие, пригласите 5 пользователя(ей) зарегистрироваться (общий объем торгов на фьючерсах ≥ 50 USDT или общий объем торгов на споте ≥ 50 USDT) и получите Попытки + 8': ['After joining the event, invite 5 users to sign up (total futures volume ≥ 50 USDT or total spot volume ≥ 50 USDT) and get Draws +8', '报名活动后，邀请 5 位好友注册（合约总交易量 ≥ 50 USDT 或现货总交易量 ≥ 50 USDT），即可获得抽奖次数 +8'],
    'ПРИГЛАСИТЬ': ['INVITE', '去邀请'],

    /* ---------- index.html: турнир ---------- */
    'Индивидуальный': ['Individual', '个人'],
    'турнир': ['Tournament', '交易赛'],
    'Три раунда по 10 дней каждый.': ['Three rounds of 10 days each.', '共三轮，每轮 10 天。'],
    'Поднимайтесь во всех трех рейтингах и получайте награды — до $300,000! на человека.': ['Climb all three leaderboards and earn rewards — up to $300,000 per person!', '冲刺三大排行榜赢取奖励——每人最高 $300,000！'],
    'Подробнее »': ['Details »', '详情 »'],
    'Этап {n}': ['Stage {n}', '第 {n} 阶段'],
    'Скоро': ['Upcoming', '即将开始'],
    'Идёт': ['Live', '进行中'],
    'Завершён': ['Ended', '已结束'],
    'Объем торгов на фьючерсах': ['Futures trading volume', '合约交易量'],
    'Доходность на фьючерсах': ['Futures ROI', '合约收益率'],
    'Объем торгов на фьючерсах среди новичков': ['Newcomer futures volume', '新用户合约交易量'],
    'Фьючерсная торговля PK': ['Futures Trading PK', '合约交易 PK'],
    'Новички · Фьючерсная торговля': ['Newcomers · Futures Trading', '新用户 · 合约交易'],
    'Расчет по итогам каждого этапа. Топ-100 получают награды.': ['Settled after each stage. The top 100 get rewards.', '每阶段结束后结算，前 100 名获得奖励。'],
    'Введите UID/никнейм': ['Enter UID/nickname', '输入 UID/昵称'],
    'Данные обновляются каждые 10 минут.': ['Data updates every 10 minutes.', '数据每 10 分钟更新一次。'],
    'Правила статистики': ['Stats rules', '统计规则'],
    'Место': ['Rank', '排名'],
    'Участники': ['Participant', '参与者'],
    'Ожид. награда': ['Est. reward', '预计奖励'],
    'Объем торгов на фьючерсах (USDT)': ['Futures volume (USDT)', '合约交易量（USDT）'],
    'Доходность (%)': ['ROI (%)', '收益率（%）'],
    'Скоро начнётся': ['Starting soon', '即将开始'],
    'Время начала: {t}': ['Start time: {t}', '开始时间：{t}'],
    '1 ноября, 10:00 (UTC+8)': ['Nov 1, 10:00 (UTC+8)', '11月1日 10:00（UTC+8）'],
    '11 ноября, 10:00 (UTC+8)': ['Nov 11, 10:00 (UTC+8)', '11月11日 10:00（UTC+8）'],
    '21 ноября, 10:00 (UTC+8)': ['Nov 21, 10:00 (UTC+8)', '11月21日 10:00（UTC+8）'],
    'д': ['d', '天'],
    'Статистика: объем торгов на фьючерсах = объем торгов на стандартных фьючерсах + объем торгов на бессрочных фьючерсах (учитываются только криптовалютные пары).': ['Stats: futures volume = standard futures volume + perpetual futures volume (crypto pairs only).', '统计口径：合约交易量 = 标准合约交易量 + 永续合约交易量（仅统计加密货币交易对）。'],
    'Ничего не найдено': ['Nothing found', '未找到结果'],
    'Прототип страницы. Данные и розыгрыш — демо.': ['Page prototype. Data and draws are demo.', '页面原型，数据与抽奖均为演示。'],

    /* ---------- index.html: правила ---------- */
    'К участию приглашаются все новые и зарегистрированные ранее пользователи из всех регионов, в которых предоставляются услуги CoinW.': ['All new and existing users from all regions where CoinW provides services are welcome to participate.', '所有 CoinW 提供服务地区的新老用户均可参与。'],
    'Регистрация: для участия в акции необходимо в ней зарегистрироваться. Войдите в аккаунт и нажмите на кнопку регистрации.': ['Registration: you must register for the event to take part. Log in to your account and tap the registration button.', '报名：参与活动需先报名。请登录账户并点击报名按钮。'],
    'Сроки проведения акции: с 05:00 01.11.2026 по 18:59 30.11.2026 (UTC+3).': ['Event period: 05:00 Nov 1, 2026 to 18:59 Nov 30, 2026 (UTC+3).', '活动时间：2026年11月1日 05:00 至 2026年11月30日 18:59（UTC+3）。'],
    'Первый раунд индивидуального турнира: с 05:00 01.11.2026 по 13:00 10.11.2026 (UTC+3). Второй раунд: с 05:00 11.11.2026 по 13:00 20.11.2026 (UTC+3). Третий раунд: с 05:00 21.11.2026 по 13:00 30.11.2026 (UTC+3).': ['Individual tournament round 1: 05:00 Nov 1, 2026 to 13:00 Nov 10, 2026 (UTC+3). Round 2: 05:00 Nov 11, 2026 to 13:00 Nov 20, 2026 (UTC+3). Round 3: 05:00 Nov 21, 2026 to 13:00 Nov 30, 2026 (UTC+3).', '个人交易赛第一轮：2026年11月1日 05:00 至 2026年11月10日 13:00（UTC+3）。第二轮：2026年11月11日 05:00 至 2026年11月20日 13:00（UTC+3）。第三轮：2026年11月21日 05:00 至 2026年11月30日 13:00（UTC+3）。'],
    'Список актуальных заданий отображается на странице акции. Задания для разных пользователей могут отличаться. Задания не зависят друг от друга. Награды за выполнение разных заданий суммируются.': ['The current task list is shown on the event page. Tasks may differ between users. Tasks are independent of each other. Rewards for different tasks are cumulative.', '当前任务列表以活动页面展示为准。不同用户的任务可能有所不同。各任务相互独立，不同任务的奖励可叠加。'],
    'Сбор статистики ведется с момента назначения задания до 18:59 30.11.2026 (UTC+3).': ['Statistics are collected from the moment a task is assigned until 18:59 Nov 30, 2026 (UTC+3).', '数据统计自任务分配起，至 2026年11月30日 18:59（UTC+3）止。'],
    'Объем торгов фьючерсами: объем торгов фьючерсами = объем торгов стандартными фьючерсами + объем торгов бессрочными фьючерсами (учитываются только сделки с парами, указанными в описании задания).': ['Futures trading volume = standard futures volume + perpetual futures volume (only trades in pairs listed in the task description count).', '合约交易量 = 标准合约交易量 + 永续合约交易量（仅统计任务说明中指定交易对的交易）。'],
    'Объем первой сеточной сделки = сумма первой фактической сделки купли или продажи, совершенной с помощью спот сетки, фьючерсной сетки или спот сетки Infinity после активации сетки.': ['First grid trade volume = the amount of the first actual buy or sell trade executed by a spot grid, futures grid or spot Infinity grid after the grid is activated.', '首笔网格交易量 = 网格启动后，通过现货网格、合约网格或现货无限网格成交的首笔实际买入或卖出金额。'],
    'Объем копи-трейдинга = объем спот копи-трейдинга + объем копи-трейдинга фьючерсами.': ['Copy trading volume = spot copy trading volume + futures copy trading volume.', '跟单交易量 = 现货跟单交易量 + 合约跟单交易量。'],
    'Суммарный депозит: депозиты через сеть + депозиты через Р2Р + депозиты через сторонние платформы + депозиты с банковских карт + фиатные депозиты (внутренние переводы и криптоподарки не учитываются).': ['Total deposits = on-chain deposits + P2P deposits + third-party platform deposits + bank card deposits + fiat deposits (internal transfers and crypto gifts are excluded).', '累计充值 = 链上充值 + P2P 充值 + 第三方平台充值 + 银行卡充值 + 法币充值（不含内部转账和加密红包）。'],
    'Пригласите друзей: приглашайте новых пользователей напрямую. Новый пользователь засчитывается, если совершает первую сделку в требуемом объёме.': ['Invite friends: invite new users directly. A new user counts once they make a first trade of the required volume.', '邀请好友：直接邀请新用户。新用户完成达到要求交易量的首笔交易后计为有效邀请。'],
    'Награды лотереи: ваучеры на монету, ваучеры на позицию (1x–10x), ваучеры на бонус (1x–5x), ваучеры на пробные средства (50% зачёта), ваучеры на кешбэк, ваучеры на усилитель APR (для продуктов с гибким и фиксированным сроком), субсидии на фьючерсную сетку, субсидии на копи-трейдинг, пробный VIP доступ и другое.': ['Lucky draw rewards: coin vouchers, position vouchers (1x–10x), bonus vouchers (1x–5x), trial funds vouchers (50% credited), cashback vouchers, APR booster vouchers (for flexible and fixed-term products), futures grid subsidies, copy trading subsidies, VIP trial access and more.', '抽奖奖励包括：代币券、仓位券（1x–10x）、赠金券（1x–5x）、体验金券（按 50% 计入）、返现券、加息券（适用于活期和定期产品）、合约网格补贴、跟单补贴、VIP 体验资格等。'],
    'Выдача наград: награды лотереи и награды за регистрацию начисляются сразу. Награды турнира выдаются в течение 7 рабочих дней с момента завершения акции.': ['Reward distribution: lucky draw and sign-up rewards are credited instantly. Tournament rewards are distributed within 7 business days after the event ends.', '奖励发放：抽奖奖励和报名奖励即时发放；交易赛奖励将在活动结束后 7 个工作日内发放。'],
    'Информация о наградах: награды за регистрацию, награды за выполнение заданий / награды лотереи и награды индивидуального турнира не зависят друг от друга и суммируются. Если в течение одного раунда индивидуального турнира участник занимает призовые места сразу в нескольких рейтингах, ему выдается только одна награда — награда наибольшей стоимости. Менее ценные награды за места в других рейтингах этого раунда не выплачиваются. Награды раундов суммируются. Срок получения и использования наград — 7 дней.': ['Reward details: sign-up rewards, task / lucky draw rewards and individual tournament rewards are independent and cumulative. If a participant places in several leaderboards in the same tournament round, only one reward — the most valuable — is granted; lower-value rewards from other leaderboards in that round are not paid. Rewards from different rounds are cumulative. Rewards must be claimed and used within 7 days.', '奖励说明：报名奖励、任务/抽奖奖励与个人交易赛奖励相互独立，可叠加。若参与者在同一轮个人交易赛中同时进入多个排行榜的获奖名次，仅发放价值最高的一项奖励，其他排行榜中价值较低的奖励不予发放。各轮奖励可叠加。奖励领取及使用有效期为 7 天。'],
    'При составлении рейтинга новичков на основе объёма фьючерсной торговли учитывается только статистика пользователей, зарегистрировавшихся на платформе в период проведения акции.': ['The newcomer futures volume leaderboard only includes users who registered on the platform during the event period.', '新用户合约交易量排行榜仅统计活动期间在平台注册的用户。'],
    'Данные на странице акции могут отображаться с небольшой задержкой. Обновите страницу, чтобы увидеть актуальные данные.': ['Data on the event page may be slightly delayed. Refresh the page to see the latest data.', '活动页面数据可能略有延迟，请刷新页面查看最新数据。'],
    'В рамках SuperX награды за регистрацию, награды за выполнение заданий / награды лотереи и награды индивидуального турнира суммируются. Награды рейтингов индивидуального турнира за один раунд не суммируются. При участии сразу в нескольких акциях платформы, не относящихся к SuperX, любое действие (торговля, депозит, реферальная программа и т. д.) учитывается как основание для выдачи награды только в одной акции, награды в других акциях за это же действие не выдаются.': ['Within SuperX, sign-up rewards, task / lucky draw rewards and individual tournament rewards are cumulative. Individual tournament leaderboard rewards within one round are not cumulative. When taking part in several platform events outside SuperX, any action (trading, deposits, referrals, etc.) qualifies for a reward in only one event; no rewards are given in other events for the same action.', '在 SuperX 活动中，报名奖励、任务/抽奖奖励与个人交易赛奖励可叠加；同一轮个人交易赛的排行榜奖励不可叠加。若同时参与平台其他非 SuperX 活动，同一行为（交易、充值、邀请等）仅可在一个活动中获得奖励，其他活动不再重复发放。'],
    'Учитываются только ордера, позиции по которым удерживались более минуты. Ордера, совершённые с использованием привилегий платформы, таких как пробные средства и ваучеры на бонус, а также сделки, совершенные на субаккаунтах, не учитываются в данных акции.': ['Only orders whose positions were held for more than one minute count. Orders placed using platform privileges such as trial funds and bonus vouchers, as well as trades on sub-accounts, are excluded from event data.', '仅统计持仓时间超过 1 分钟的订单。使用体验金、赠金券等平台权益下的订单以及子账户交易不计入活动数据。'],
    'Окончательное решение о выдаче наград принимается после проведения проверки департаментами контроля рисков и данных CoinW. Информация об акции представлена только для справки.': ['The final decision on rewards is made after review by the CoinW risk control and data teams. Event information is for reference only.', '奖励最终发放以 CoinW 风控及数据部门审核结果为准。活动信息仅供参考。'],
    'CoinW оставляет за собой право дисквалифицировать пользователей, причастных к таким нарушениям, как противозаконная деятельность, мошенничество или умышленное манипулирование объемами торгов. В серьезных случаях торговля будет запрещена. CoinW также оставляет за собой право в любой момент изменить условия данной акции без предварительного уведомления и право окончательного толкования условий акции.': ['CoinW reserves the right to disqualify users involved in violations such as illegal activity, fraud or deliberate manipulation of trading volume. In serious cases, trading will be banned. CoinW also reserves the right to change the terms of this event at any time without prior notice, and the right of final interpretation.', 'CoinW 有权取消涉及违法活动、欺诈或恶意刷量等违规行为用户的参与资格，情节严重者将被禁止交易。CoinW 亦保留随时修改本活动条款而无需事先通知的权利，并拥有本活动的最终解释权。'],

    /* ---------- partner.html: hero ---------- */
    'Турнир для подписчиков Партнёр — CoinW': ['Partner Subscriber Tournament — CoinW', '合作伙伴粉丝交易赛 — CoinW'],
    'ТУРНИР · ТУРНИР · ТУРНИР · ТУРНИР ·': ['TOURNAMENT · TOURNAMENT · TOURNAMENT · TOURNAMENT ·', '交易赛 · 交易赛 · 交易赛 · 交易赛 ·'],
    'П': ['P', '合'],
    'Партнёр': ['Partner', '合作伙伴'],
    'официальный партнёр CoinW': ['official CoinW partner', 'CoinW 官方合作伙伴'],
    'Турнир для подписчиков': ['Subscriber tournament with', '粉丝专属交易赛'],
    'Принимайте участие и выигрывайте реальные': ['Join in and win real', '参与活动，与合作伙伴一起赢取真实'],
    'вместе с партнёром!': ['together with the partner!', '奖励！'],
    'до ': ['up to ', '最高 '],
    'до 2 500 USDT': ['up to 2,500 USDT', '最高 2,500 USDT'],
    'призовой фонд': ['prize pool', '奖池'],
    'дней турнира': ['tournament days', '比赛天数'],
    'делят награды': ['share the rewards', '瓜分奖励'],
    'Участие бесплатное': ['Free to join', '免费参与'],
    'ДО НАЧАЛА ТУРНИРА': ['TOURNAMENT STARTS IN', '距交易赛开始'],
    'ДО ОКОНЧАНИЯ ТУРНИРА': ['TOURNAMENT ENDS IN', '距交易赛结束'],
    'ТУРНИР ЗАВЕРШЁН': ['TOURNAMENT ENDED', '交易赛已结束'],

    /* ---------- partner.html: вкладки и блоки ---------- */
    'О событии': ['About', '活动介绍'],
    'Объём торгов на фьючерсах': ['Futures Volume', '合约交易量'],
    '🌟 Рейтинг новичков': ['🌟 Newcomer Leaderboard', '🌟 新用户排行榜'],
    'Расписание': ['Schedule', '活动日程'],
    'Регистрация открыта до конца турнира — но торговать нужно уже со старта.': ['Registration stays open until the tournament ends — but trading counts from the start.', '报名开放至交易赛结束，但交易从开赛起计算。'],
    'Открыто сейчас': ['Open now', '现已开放'],
    'Начало события': ['Event starts', '活动开始'],
    'Конец события': ['Event ends', '活动结束'],
    'Награды за объём торгов на фьючерсах': ['Futures Volume Rewards', '合约交易量奖励'],
    'Чем больше объём торгов, тем больше призовой фонд — до 2 500,00 USDT': ['The higher the trading volume, the bigger the prize pool — up to 2,500.00 USDT', '交易量越大，奖池越高——最高 2,500.00 USDT'],
    'Смотреть призовой фонд в реальном времени': ['View the live prize pool', '查看实时奖池'],
    'Новички — награды за объём торгов на фьючерсах': ['Newcomers — Futures Volume Rewards', '新用户合约交易量奖励'],
    'Топ-3 пользователей в рейтинге (объём торгов на фьючерсах) получат следующие награды': ['The top 3 users on the leaderboard (futures volume) receive the following rewards', '排行榜（合约交易量）前 3 名用户将获得以下奖励'],
    'Рейтинг объёма торгов на фьючерсах': ['Futures Volume Leaderboard', '合约交易量排行榜'],
    'LIVE · демо-данные': ['LIVE · demo data', 'LIVE · 演示数据'],
    'Статистика включает бессрочные фьючерсы USDⓈ-M и Coin-M. Отображение фактической прибыли зависит от колебаний цен на криптовалюты.': ['Stats include USDⓈ-M and Coin-M perpetual futures. Actual profit shown depends on crypto price movements.', '统计包括 USDⓈ-M 和币本位永续合约。实际盈利显示受加密货币价格波动影响。'],
    'Рейтинг': ['Rank', '排名'],
    'Пользователь': ['User', '用户'],
    'Ожид. награда (USDT)': ['Est. reward (USDT)', '预计奖励（USDT）'],
    'Объём торгов (USDT)': ['Volume (USDT)', '交易量（USDT）'],
    'Прошлые результаты не являются гарантией результатов в будущем. Пожалуйста, не доверяйте тем, кто предлагает управлять вашим аккаунтом или средствами.': ['Past results do not guarantee future results. Do not trust anyone who offers to manage your account or funds.', '过往业绩不代表未来表现。请勿相信任何声称可代管您账户或资金的人。'],
    'Текущий призовой фонд (USDT)': ['Current prize pool (USDT)', '当前奖池（USDT）'],
    'Общий объём торгов (USDT)': ['Total trading volume (USDT)', '总交易量（USDT）'],
    '🌟 Рейтинг новичков на фьючерсах': ['🌟 Newcomer Futures Leaderboard', '🌟 新用户合约排行榜'],
    'В рейтинг попадают пользователи, зарегистрировавшиеся на платформе в период турнира. Топ-3 получают награды.': ['The leaderboard includes users who registered on the platform during the tournament. The top 3 get rewards.', '排行榜仅包括交易赛期间在平台注册的用户，前 3 名可获得奖励。'],
    'Прототип страницы. Рейтинги, объёмы и призовой фонд — демо-данные.': ['Page prototype. Leaderboards, volumes and the prize pool are demo data.', '页面原型，排行榜、交易量和奖池均为演示数据。'],

    /* ---------- partner.html: «моё место», уведомления, окна ---------- */
    'Вы (демо)': ['You (demo)', '您（演示）'],
    'Вы не вошли. Попадите в рейтинг, достигнув объёма в {v}': ['You’re not logged in. Reach {v} in volume to enter the leaderboard', '您尚未登录。交易量达到 {v} 即可上榜'],
    'Торговать (демо) +{v}': ['Trade (demo) +{v}', '交易（演示）+{v}'],
    'Участвовать': ['Join', '参与'],
    'Вы на {r} месте': ['You’re ranked {r}', '您排名第 {r} 位'],
    ' — вы в призовой тройке! 🏆': [' — you’re in the top 3! 🏆', '——已进入前三名！🏆'],
    'Попадите в рейтинг, достигнув объёма в {v}. Осталось {left}': ['Reach {v} in volume to enter the leaderboard. {left} to go', '交易量达到 {v} 即可上榜，还差 {left}'],
    'Новый уровень! Призовой фонд — {v} USDT': ['New tier! The prize pool is now {v} USDT', '达成新档位！奖池升至 {v} USDT'],
    'Вы уже участвуете в турнире': ['You’re already in the tournament', '您已报名本交易赛'],
    'Вы в турнире! 🏆': ['You’re in the tournament! 🏆', '欢迎参赛！🏆'],
    'Регистрация прошла успешно. Торгуйте на фьючерсах от {min}, чтобы попасть в рейтинг, и боритесь за призовой фонд вместе с {partner}.': ['Registration successful. Trade at least {min} in futures to enter the leaderboard and compete for the prize pool with {partner}.', '报名成功！合约交易量达到 {min} 即可上榜，与 {partner} 一起角逐奖池。'],
    'Ссылка на турнир скопирована': ['Tournament link copied', '交易赛链接已复制'],

    /* ---------- partner.html: правила ---------- */
    'Время начала турнира: 00:00 01.11.2026 (UTC+3). Время завершения турнира: 23:59 10.11.2026 (UTC+3).': ['Tournament starts: 00:00 Nov 1, 2026 (UTC+3). Tournament ends: 23:59 Nov 10, 2026 (UTC+3).', '交易赛开始时间：2026年11月1日 00:00（UTC+3）。结束时间：2026年11月10日 23:59（UTC+3）。'],
    'Принять участие в турнире могут только пользователи с чистой суммой начальных активов (чистая стоимость активов) не менее 50 USDT. Вы можете принять участие, если это условие соблюдено.': ['Only users with net initial assets (net asset value) of at least 50 USDT can take part. You can participate if this condition is met.', '仅初始净资产（资产净值）不低于 50 USDT 的用户可参与交易赛。满足该条件即可参与。'],
    'Минимальная сумма торговли для попадания в список составляет 10000 USDT.': ['The minimum trading volume to appear on the leaderboard is 10,000 USDT.', '上榜最低交易量为 10,000 USDT。'],
    'Во время акции новые зарегистрированные пользователи также могут разблокировать дополнительный рейтинг новых пользователей.': ['During the event, newly registered users can also unlock an additional newcomer leaderboard.', '活动期间，新注册用户还可解锁额外的新用户排行榜。'],
    'Акция представляет собой турнир, в котором победители определяются на основе объема сделок. В рамках конкурса учитывается торговля как стандартными, так и бессрочными фьючерсами.': ['The event is a tournament where winners are determined by trading volume. Both standard and perpetual futures trading count.', '本活动为交易赛，按交易量决出获胜者。标准合约和永续合约交易均计入统计。'],
    'Для Стандартных Фьючерсов учитывается торговля только для криптоактивов.': ['For standard futures, only crypto asset trading counts.', '标准合约仅统计加密资产交易。'],
    'Призы будут выданы в соответствии с рейтингом, составленным после завершения турнира, в течение 72 часов с момента завершения турнира.': ['Prizes will be distributed according to the final leaderboard within 72 hours after the tournament ends.', '奖励将根据交易赛结束后的最终排名，在结束后 72 小时内发放。'],
    'Участники, вовлеченные в незаконную деятельность, в том числе использующие несколько аккаунтов, подделывающие показатели объема торгов или заподозренные в вош-трейдинге, будут дисквалифицированы.': ['Participants involved in illegal activity, including using multiple accounts, faking trading volume or suspected wash trading, will be disqualified.', '参与违法活动的用户，包括使用多个账户、伪造交易量或涉嫌对敲交易者，将被取消资格。'],
    'В статистику по данной акции включаются только позиции, открытые более чем на одну минуту.': ['Only positions held open for more than one minute count toward this event.', '本活动仅统计持仓超过 1 分钟的仓位。'],
    'CoinW оставляет за собой право на окончательное толкование данной акции.': ['CoinW reserves the right of final interpretation of this event.', 'CoinW 保留本活动的最终解释权。']
  };

  /* Названия призов собираются из номинала и типа ("0,5 HYPE Ваучер на монету"),
     поэтому переводим тип как фразу внутри строки. Длинные фразы — раньше коротких. */
  var PH = [
    ['APR усилитель для Earn', 'Earn APR Booster', '理财加息券'],
    ['Ваучер на пробные средства', 'Trial Funds Voucher', '体验金券'],
    ['Субсидия на сеточную торговлю', 'Grid Trading Subsidy', '网格交易补贴'],
    ['Субсидия для ботов', 'Trading Bot Subsidy', '交易机器人补贴'],
    ['Ваучер на позицию', 'Position Voucher', '仓位券'],
    ['ВАУЧЕР НА ПОЗИЦИЮ', 'POSITION VOUCHER', '仓位券'],
    ['Ваучер на монету', 'Coin Voucher', '代币券'],
    ['Ваучер на кешбэк', 'Cashback Voucher', '返现券']
  ];

  var lang = pick(), col = lang === 'en' ? 0 : 1;
  var locale = { ru: 'ru-RU', en: 'en-US', zh: 'zh-CN' }[lang];
  var root = document.documentElement;
  root.lang = lang === 'zh' ? 'zh-CN' : lang;
  if (lang !== 'ru') {
    root.classList.add('i18n-wait');
    setTimeout(function () { root.classList.remove('i18n-wait'); }, 2500);
  }
  var css = document.createElement('style');
  css.textContent = (
    'html.i18n-wait body{visibility:hidden}' +
    'html:lang(zh) body{font-family:Inter,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","Noto Sans SC","Noto Sans CJK SC",system-ui,sans-serif}' +
    '.lang-sel{-webkit-appearance:none;appearance:none;background:rgba(255,255,255,.06) url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'10\' height=\'6\'%3E%3Cpath d=\'M1 1l4 4 4-4\' fill=\'none\' stroke=\'%23cfcbe8\' stroke-width=\'1.5\'/%3E%3C/svg%3E") no-repeat right 9px center;' +
    'border:1px solid rgba(255,255,255,.14);border-radius:10px;color:#e8e5ff;font:600 12px/1 Inter,system-ui,sans-serif;padding:8px 26px 8px 10px;cursor:pointer}' +
    '.lang-sel:hover{border-color:#7d5cff}.lang-sel option{color:#111;background:#fff}' +
    /* на телефоне шапка не вмещает переключатель — он висит слева внизу, напротив кнопки поддержки */
    '.lang-float{display:none}' +
    '@media(max-width:480px){.hdr-r .lang-sel{display:none}.lang-float{display:block;position:fixed;left:16px;bottom:22px;z-index:80;background-color:rgba(14,10,34,.92);padding:12px 28px 12px 12px;border-radius:14px}}');
  document.head.appendChild(css);

  function has(s) { return lang !== 'ru' && Object.prototype.hasOwnProperty.call(D, s); }
  function tr(s, v) {
    var r = has(s) ? D[s][col] : s;
    return v ? r.replace(/\{(\w+)\}/g, function (m, k) { return k in v ? v[k] : m; }) : r;
  }
  /* Числа в русском формате внутри строк: "0,5" → "0.5", "3 000" → "3,000" */
  function num(s) {
    if (lang === 'ru') return s;
    return String(s).replace(/(\d),(\d)/g, '$1.$2').replace(/(\d)[   ](?=\d{3}(?!\d))/g, '$1,');
  }
  function trp(s) {
    if (lang === 'ru') return s;
    var r = String(s);
    PH.forEach(function (p) { r = r.split(p[0]).join(p[col + 1]); });
    return num(r);
  }

  /* Переводит статичный текст страницы: текстовые узлы и атрибуты целиком по словарю */
  function apply(el) {
    if (lang !== 'ru') {
      if (has(document.title)) document.title = tr(document.title);
      var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
        acceptNode: function (n) { return /^(SCRIPT|STYLE)$/.test(n.parentNode.nodeName) ? 2 : 1; }
      });
      for (var n = w.nextNode(); n; n = w.nextNode()) {
        var m = n.nodeValue.match(/^(\s*)([\s\S]*?)(\s*)$/);
        if (m[2] && has(m[2])) n.nodeValue = m[1] + tr(m[2]) + m[3];
      }
      var attrs = ['title', 'placeholder', 'aria-label', 'data-pre', 'data-suf'];
      el.querySelectorAll('[title],[placeholder],[aria-label],[data-pre],[data-suf]').forEach(function (e) {
        attrs.forEach(function (a) { var v = e.getAttribute(a); if (v && has(v)) e.setAttribute(a, tr(v)); });
        if (e.getAttribute('data-suf') === '$' && !e.getAttribute('data-pre')) { e.setAttribute('data-pre', '$'); e.setAttribute('data-suf', ''); }
      });
    }
    root.classList.remove('i18n-wait');
  }

  function switcher() {
    var box = document.querySelector('.hdr-r');
    if (box) box.insertBefore(makeSelect('lang-sel'), box.firstChild);
    document.body.appendChild(makeSelect('lang-sel lang-float'));
  }
  function makeSelect(cls) {
    var sel = document.createElement('select');
    sel.className = cls;
    sel.setAttribute('aria-label', 'Language / Язык / 语言');
    [['ru', 'RU'], ['en', 'EN'], ['zh', '中文']].forEach(function (o) {
      var op = document.createElement('option');
      op.value = o[0]; op.textContent = o[1]; op.selected = o[0] === lang;
      sel.appendChild(op);
    });
    sel.onchange = function () {
      try { localStorage.setItem(KEY, sel.value); } catch (e) {}
      var u = new URL(location.href);
      u.searchParams.set('lang', sel.value);
      location.href = u.toString();
    };
    return sel;
  }
  document.addEventListener('DOMContentLoaded', switcher);

  window.I18N = { lang: lang, locale: locale, tr: tr, trp: trp, num: num, apply: apply };
})();
