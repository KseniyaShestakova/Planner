## Планировщик дня
Цель этого проекта - предоставить интерактивный планировщик для ваших целей и задач. Можно рассматривать, как нечто похожее на гугл-календарь: пользователь вносит планируемые активности по часам. Предполагаемый процесс использования приложения таков:
1. Клиент регистрируется в приложении. Во время этого он указывает список своих глобальных целей (спорт, учеба, чтение книг, эко-активизм и т.п.). Этот список можно редактировать позже.
   Для дальнейшего использования приложения потребуется авторизация.
2. На первой странице (после авторизации) можно увидеть распорядок дня. Его можно заполнить задачами (активностями), указывая время начала и предполагаемую продолжительность. Каждую задачу можно связать с целью из глобального списка задач. Но это опционально.
3. Главная черта этого приложения - сохранение статистики о занятиях. Все распорядки дня сохраняются в базе данных, поэтому клиент сможет отслеживать прогресс в достижении своих целей.
   Планируется поддержать следующие виды статистики:
    * Статистика недели/месяца: суммарное количество времени за неделю/месяц, потраченное на достижение каждой из целей
    * Статистика цели за неделю, месяц или год: показывает распределение времени, потраченного на достижение конкретной цели по дням, неделям или месяцам
    * Вывод распорядка дня за указанный день (только за последний год) 
4. Статистикой своих целей и активностей можно делиться с другими пользователями. Для того, чтобы просмотреть статистику другого пользователя, надо, чтобы этот пользователь предоставил Вам доступ к своей статистике. На странице, соответствующей статистике, будет кнопка `Share with others` (предоставить доступ к своей статистике), и кнопка `Compare with others` (сравнить с другими пользователями, предоставившими вам доступ). К обеим кнопкам будет поле для ввода имени пользователя. Если оно будет некорректным, выведется ошибка.
    
Статистика будет выводиться в виде графиков и текстовых отчетов по запросу клиента (будет кнопка вида "показать статистику ...")