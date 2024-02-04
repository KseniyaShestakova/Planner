from django.contrib import admin
from .models import UserIDMap, UserPair, Goal, Activity

# Register your models here.


class UserIDMapAdmin(admin.ModelAdmin):
    list_display = ('id', 'username',)


class UserPairAdmin(admin.ModelAdmin):
    list_display = ('donor', 'recipient',)


class GoalAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'title',)


class ActivityAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'start', 'end', 'goal_index', 'user',)


admin.site.register(UserIDMap, UserIDMapAdmin)
admin.site.register(UserPair, UserPairAdmin)
admin.site.register(Goal, GoalAdmin)
admin.site.register(Activity, ActivityAdmin)