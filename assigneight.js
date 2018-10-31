var zipcode = "";
var theURL = "";

function createZipcode()
{
  zipcode = document.getElementById("zipcode").value;
  if(!(zipcode.length == 5 && !(/[^0-9]/g.test(zipcode))))
  {
    alert("Please enter a valid 5-digit zipcode.");
  }
  else
  {
    theURL = "https://graphical.weather.gov/xml/sample_products/browser_interface/ndfdBrowserClientByDay.php?zipCodeList=" + zipcode + "&format=24+hourly&numDays=7";
    document.getElementById("header").innerHTML = "Weather Forecast for " + zipcode;
    document.getElementById("Zip").innerHTML = zipcode;
    document.getElementById("watches").innerHTML = "";
    makeAsynchRequest(theURL, aSimpleCallback);
  }
  return false;
}

function makeAsynchRequest(url, callbackFunction)
{
    if (window.XMLHttpRequest)
    {
      xmlhttp=new XMLHttpRequest();
    }
    else
    {
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=callbackFunction;
    xmlhttp.open("GET","proxy.php?mode=native&url="+
                 encodeURIComponent(url), true);
    xmlhttp.send();
}

function aSimpleCallback()
{
  if (this.readyState==4 && this.status==200)
  {
    parser = new DOMParser();
    xmlDoc=parser.parseFromString(this.responseText,"text/xml");
    getDate();
    getIcons();
    getConditions();
    getTemperatures();
    getWarnings();
    document.getElementById("zipcode").value = "";
  }
}

function getDate()
{
  var day = "";
  for(var n = 0; n < 7; n++)
  {
    name = "date";
    day = xmlDoc.getElementsByTagName("start-valid-time")[n].firstChild;
    if(!(day === null))
    {
      day = xmlDoc.getElementsByTagName("start-valid-time")[n].firstChild.nodeValue;
      day = day.split("T", 1);
      name = name + (n + 1);
      document.getElementById(name).innerHTML = day;
     }
     else
     {
       day = "No Data";
       document.getElementById(name).innerHTML = day;
     }
  }
}

function getIcons()
{
  var name = "";
  var images = "";
  var link = "";
  for(var i = 0; i < 7; i++)
  {
    link = xmlDoc.getElementsByTagName("icon-link")[i].firstChild;
    if(!(link === null))
    {
      name = "image";
      images = "<img src=\"" +
      xmlDoc.getElementsByTagName("icon-link")[i].firstChild.nodeValue
      + "\" alt=\"" +
      xmlDoc.getElementsByTagName("weather-conditions")[i].getAttribute("weather-summary")
      + "\" />";
      name = name + (i + 1);
      document.getElementById(name).innerHTML = images;
    }
  }
}

function getConditions()
{
  var weather =  "";
  for(var m = 0; m < 7; m++)
  {
    name = "conditions";
    weather = xmlDoc.getElementsByTagName("weather-conditions")[m].getAttribute("weather-summary");
    name = name + (m + 1);
    if(!(weather === null))
    {
      weather = xmlDoc.getElementsByTagName("weather-conditions")[m].getAttribute("weather-summary");
      document.getElementById(name).innerHTML = weather;
     }
     else
     {
       weather = "No Data";
       document.getElementById(name).innerHTML = weather;
     }
   }
}

function getTemperatures()
{
  var temp = "";
  for(var j = 0; j < 2; j++)
  {
    for(var k = 0; k < 7; k++)
    {
      if(j == 0)
      {
        name = "high";
      }
      else
      {
        name = "low";
      }
      name = name + (k + 1);
      temp = xmlDoc.getElementsByTagName("temperature")[j].getElementsByTagName("value")[k].firstChild;
      if(!(temp === null))
      {
        temp = xmlDoc.getElementsByTagName("temperature")[j].getElementsByTagName("value")[k].firstChild.nodeValue
         + "\xB0" + "F";
        document.getElementById(name).innerHTML = temp;
      }
      else
      {
        temp = "No Data";
        document.getElementById(name).innerHTML = temp;
      }
    }
  }
}

var warning = "";
function getWarnings()
{
  warning = xmlDoc.getElementsByTagName("hazards")[0].getElementsByTagName("hazard-conditions")[0].firstChild;
  if(!(warning === null))
  {
    warning = "<table><tr><th>" +
    xmlDoc.getElementsByTagName("hazards")[0].getElementsByTagName("name")[0].firstChild.nodeValue
    + ":</th></tr><tr><td>" +
    xmlDoc.getElementsByTagName("hazards")[0].getElementsByTagName("hazard")[0].getAttribute("phenomena")
    + "</td></tr></table>";
    document.getElementById("watches").innerHTML = warning;
  }
}
