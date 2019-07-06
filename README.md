# Module-1-Assignment-Lab-CSV-to-JSON-Converter

<h2>How to run</h2>
- To install all modules based on the package.json file, in the project folder, run Git bash here then type: <br>
    <code>npm install .</code><br>
- After downloading, type: <br>
    <code>node csv-to-json-converter.js 'your-path-to-a-csv-file'</code>

<h2>Description</h2>
This program simply converts a csv file into a json file, using the 'csvtojson' module.

If user do not provide a csv file, it will takes the customer-data.csv from the project directory for input
The output file is named output.json and will be saved at user's desktop.
 
If there is already a output.json file at desktop, the newest will replaced without warning.

<h2>Assignment's questions</h2>
<h3>1. Walk us through the design of your project. Why did you design your project the way you did? What difficulties did you overcome?<br/></h3>
First, i include modules which is needed, especially 'csvtojson' module. I chose to use a pre-released module in order not to re-invent the wheel.

<h3>2. How did you test your project to verify that it works?<br/></h3>
I simply run the 'csv-to-json-converter.js' then open the output file to check.

<h3>3. Let us know if anything doesn't work as intended so your reviewer will know ahead of time<br/></h3>
It seems to work fine based on my check.
