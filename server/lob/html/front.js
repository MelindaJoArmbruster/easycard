const front = `<html>
  <head>
    <style>
      @font-face {
        font-family: "Loved by the King";
        font-style: normal;
        font-weight: 400;
        src: url("https://s3-us-west-2.amazonaws.com/public.lob.com/fonts/lovedByTheKing/LovedbytheKing.ttf")
          format("truetype");
      }

      *,
      *:before,
      *:after {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }

      body {
        width: 6.25in;
        height: 4.25in;
        margin: 0;
        padding: 0;
        font-family: "Loved by the King";
        background: #009974;
      }

      #safe-area {
        position: absolute;
        width: 5.875in;
        height: 3.875in;
        left: 0.1875in;
        top: 0.1875in;
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 4px;
      }

      .text {
        text-transform: uppercase;
        margin: 10px;
        width: 200px;
        font-size: 40px;
        font-weight: 700;
        color: white;
      }
    </style>
  </head>
  <body>
    <div id="safe-area">
      <!-- All text should appear within the safe area. -->
      <div class="text">Thank You {{title}}. {{name}}!</div>
    </div>
  </body>
</html>`

module.exports = front
