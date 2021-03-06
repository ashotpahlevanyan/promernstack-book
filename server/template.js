export default function template(body, initialState) {
  return `<!DOCTYPE HTML>
<html>
<head>
	<meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Pro MERN Stack</title>
  <link rel="stylesheet" type="text/css" href="/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="/node_modules/@fortawesome/fontawesome/styles.css">
	<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.13.0/polyfill.js"></script>-->

  <style>
    .panel-title a {display: block; width: 100%; cursor: pointer; text-decoration: none;}
    .header {border-bottom: 1px solid silver; margin-bottom: 20px;}
    .footer {
      border-top: 1px solid silver; padding-top: 5px; margin-top: 20px;
      font-family: Helvetica; font-size: 10px; color: grey;
    }
    .table td {
      vertical-align: middle;
    }
    .table td:last-child {
      text-align: center;
    }
    .buttonsContainer .btn + .btn {
      margin-left: 10px;
    }
	</style>
</head>
<body>
	<div id="contents">${body}</div>
	<script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};</script>
	<script type='text/javascript' src="/vendor.js"></script>
	<script type='text/javascript' src="/app.js"></script>
</body>
</html>
`;
}
