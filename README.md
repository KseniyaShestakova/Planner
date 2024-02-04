## Planner
This is the code for an interactive planner, providing one with the opportunity to set goals and attach activities to them. The user sets the goals and then fills out the day schedule with activities, setting the description, start time, end time, and corresponding goal for each activity. You can watch the [video](https://github.com/KseniyaShestakova/Planner/blob/main/planner.mp4) to understand how this application can be used.

In the future, we plan to support goal activity statistics, so users can track their progress.

To run the code, one will need two terminals.
#### Terminal 1
Run this to launch a server with the frontend part of the application. Typically the server is launched on `http://localhost:3000/main`. Navigate to this address to start using the application.
```
cd front
npm start
```
Note that for running this code properly you need to install javascript and npm utils.
#### Terminal 2
Run this to launch a server with the frontend part of the application. Typically the server is launched on `http://127.0.0.1:8000/`.
```
cd app
./manage.py runserver
```
Note that for running this code properly you need to install python3 and django and start virtual environment for django.



## [Russian description]Планировщик дня
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

Ссылка на схему проекта в Figma: https://www.figma.com/file/DOisVyVzzLKjOs9ciWZzSK/Untitled?type=whiteboard&node-id=0-1&t=qAn5ibIL04VkQxSC-0
