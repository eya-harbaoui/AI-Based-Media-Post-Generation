# Generated by Django 5.1.6 on 2025-02-20 15:48

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("posts", "0001_initial"),
    ]

    operations = [
        migrations.RenameField(
            model_name="post",
            old_name="facebook_content",
            new_name="generated_content",
        ),
        migrations.RemoveField(
            model_name="post",
            name="linkedin_content",
        ),
        migrations.RemoveField(
            model_name="post",
            name="twitter_content",
        ),
        migrations.AddField(
            model_name="post",
            name="platform",
            field=models.CharField(
                choices=[
                    ("linkedin", "LinkedIn"),
                    ("facebook", "Facebook"),
                    ("twitter", "Twitter"),
                ],
                default="linkedin",
                max_length=20,
            ),
        ),
    ]
