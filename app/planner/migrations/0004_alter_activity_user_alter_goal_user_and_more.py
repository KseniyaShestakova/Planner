# Generated by Django 4.2.7 on 2023-12-18 10:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('planner', '0003_useridmap'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activity',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='activity_user_fk', to='planner.useridmap'),
        ),
        migrations.AlterField(
            model_name='goal',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='goal_user_fk', to='planner.useridmap'),
        ),
        migrations.AlterField(
            model_name='userpair',
            name='donor',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='up_donor_fk', to='planner.useridmap'),
        ),
        migrations.AlterField(
            model_name='userpair',
            name='recipient',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='up_recipient_fk', to='planner.useridmap'),
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]
