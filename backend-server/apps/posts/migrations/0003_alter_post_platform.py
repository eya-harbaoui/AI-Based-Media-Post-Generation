# Generated by Django 5.1.6 on 2025-02-20 18:23

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("posts", "0002_rename_facebook_content_post_generated_content_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="post",
            name="platform",
            field=models.CharField(
                choices=[
                    ("linkedin", "LinkedIn"),
                    ("facebook", "Facebook"),
                    ("twitter(X)", "Twitter(X)"),
                ],
                max_length=20,
            ),
        ),
    ]
