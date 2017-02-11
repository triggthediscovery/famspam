from sparkpost import SparkPost

sparky = SparkPost('893258353322afbc058f80038291b6adc25c892a')

response = sparky.transmissions.send(
    recipients=['triggthediscovery@gmail.com'],
    use_sandbox=True,
    html='<html><body><p>Testing SparkPost - the world\'s most awesomest email service!</p></body></html>',
    from_email='testing@sparkpostbox.com',
    subject='Oh hey!')
    
print(response);
