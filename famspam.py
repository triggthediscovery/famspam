from sparkpost import SparkPost
import sys;

sparky = SparkPost('893258353322afbc058f80038291b6adc25c892a')

sys.argv.pop(0);

g = sys.argv.pop(0);

s = sys.argv.pop(0);

response = sparky.transmissions.send(
    recipients=sys.argv,
    use_sandbox=True,
    html='<html><body>' + g + '</body></html>' + '<a href="http://127.0.0.1:8000/login">tried of posts from ' + s + '? Click here to unsubscribe.',
    from_email='testing@sparkpostbox.com',
    subject='Oh hey!')
    
#print(response);

print(sys.argv);

