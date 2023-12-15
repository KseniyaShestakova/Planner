from django.contrib import admin
from .models import User, UserPair, Goal, Activity

# Register your models here.


class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'email', 'password', 'first_name', 'second_name',)


class UserPairAdmin(admin.ModelAdmin):
    list_display = ('donor', 'recipient',)


class GoalAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'title',)


class ActivityAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'start', 'end', 'goal_index', 'user',)


admin.site.register(User, UserAdmin)
admin.site.register(UserPair, UserPairAdmin)
admin.site.register(Goal, GoalAdmin)
admin.site.register(Activity, ActivityAdmin)