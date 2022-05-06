from django.conf import settings
from boto3.session import Session

def upload_file(file):
    try:
        filename = str(file)

        session = Session(
            region_name = settings.AWS_S3_REGION_NAME,
            aws_access_key_id = settings.AWS_ACCESS_KEY_ID,
            aws_secret_access_key = settings.AWS_SECRET_ACCESS_KEY
        )

        s3 = session.resource('s3')
        s3.Bucket(settings.AWS_STORAGE_BUCKET_NAME).put_object(
            Key=filename, 
            Body=file
        )

        return True
    except:
        return False