import os
from django.core.management.base import BaseCommand, CommandError


class Command(BaseCommand):
    help = "Closes the specified poll for voting"

    # def add_arguments(self, parser):
    #     parser.add_argument("poll_ids", nargs="+", type=int)

    def handle(self, *args, **options):
        base_dir = os.path.dirname(
            os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
        )
        for root, _, files in os.walk(base_dir):
            for file in files:
                if file.endswith(".sqlite3"):
                    filepath = os.path.join(root, file)
                    os.remove(filepath)
                    print(f"[Deleted] {filepath}")
            if root.endswith("migrations"):
                for file in files:
                    if file != "__init__.py":
                        filepath = os.path.join(root, file)
                        os.remove(filepath)
                        print(f"[Deleted] {filepath}")
        print("Done resetdb")
