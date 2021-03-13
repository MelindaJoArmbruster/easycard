const back = `<html>
<head>
<meta charset="UTF-8">
<link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700' rel='stylesheet' type='text/css'>
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet">
<title>Lob.com Address Verification 4x6 Postcard Template Back</title>
<style>

  *, *:before, *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    width: 6.25in;
    height: 4.25in;
    margin: 0;
    padding: 0;
    background-color: white;
  }

/* do not put text outside of the safe area */
  #safe-area {
    position: absolute;
    width: 5.875in;
    height: 3.875in;
    left: 0.1875in;
    top: 0.1875in;
  }

  #banner {
    height: 1in;
    background-color: #9e98e0;
    font-family: 'Dancing Script';
    font-weight: 700;
    font-size: .32in;
    text-transform: uppercase;
    letter-spacing: .03in;
    color: white;
    text-align: center;
    padding-top: .375in;
  }

  #message {
    position: absolute;
    width: 2.1in;
    height: 2in;
    top: 1.1in;
    left: .25in;
    font-family: 'Dancing Script';
    font-weight: 400;
    font-size: .15in;
  }


  .accent {
    color: #675dce;
  }

</style>
</head>

<body>
  <div id="banner">
    Thank You
  </div>

  <!-- do not put text outside of the safe area -->
  <div id="safe-area">
    <div id="message">
      <span class="accent">{{greeting}},</span>
      <br><br>
      {{message}}
      <br><br>
       {{salutation}}
      <br>
     {{fromName}}
    </div>
  </div>
</body>

</html>
`

module.exports = back
