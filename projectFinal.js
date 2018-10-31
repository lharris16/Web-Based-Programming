var ctx = "", age = [], pop = [], state = [], popUSA = [], countryCodes = [],
  myChart = "", USAChart = ""; names = [], years = [],
  key = "&key=c5faf296801811486338117398385b2ed406885a",
  aURL = "https://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&FIPS=";

function query()
{
  age = [];
  pop = [];
  var name = document.getElementById("place").value;
  var time = document.getElementById("time").value;
  var code = getURL();
  var url = "https://api.census.gov/data/2010/sf1?get=P0010001,NAME&for=state:*" + key;
  $.getJSON(url).done(function(data) {
    $("#USACensus").val(JSON.stringify(data));
    splitStates();
    if(name == "United States")
    {
      document.getElementById("USA").innerHTML = name + "\' Population in 2010";
      ctx = document.getElementById("USAChart");
      USAChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: state,
              datasets: [{
                    label: 'State Populations of the ' + name,
                    data: popUSA,
                    backgroundColor: '#827187',
              }]
          },
          options: {
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: "Population"
                }
              }]
            }
          }
      });
    }
  });
  url = aURL + code +"&time=" + time + "&SEX=0" + key;
  $.getJSON(url).done(function(data) {
    $("#WorldPop").val(JSON.stringify(data));
    splitInfo();
    document.getElementById("header").innerHTML = name + " in " + time + " (Based on Age)";
    ctx = document.getElementById("myChart");
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: age,
            datasets: [{
                  label: 'Population of ' + name,
                  data: pop,
                  backgroundColor: '#827187',
            }]
        },
        options: {
          scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: "Population"
              }
            }]
          }
        }
    });
  });
}

function splitInfo()
{
  var str = document.getElementById("WorldPop").value;
  var holder = "";
  str = str.split("[");
  for(var i = 3; i < 104; i++)
  {
    holder = str[i];
    holder = holder.split("\"");
    age.push(holder[5]);
    pop.push(holder[7]);
  }
}

function splitStates()
{
  var str = document.getElementById("USACensus").value;
  var holder = "";
  str = str.split("[");
  for(var i = 3; i < 54; i++)
  {
    holder = str[i];
    holder = holder.split("\"");
    popUSA.push(holder[1]);
    state.push(holder[3]);
  }
}


function getURL()
{
  var postition = 0;
  var selected = document.getElementById("place").value;
  for(var i = 0; i < names.length; i++)
  {
    if(selected == names[i])
    {
      position = i;
    }
  }
  return countryCodes[position];
}

function createOptions()
{
  var option = "";
  var str = "";
  for(var i = 0; i < names.length; i++)
  {
    option = "<option>" + names[i] + "</option>";
    str += option;
  }
  document.getElementById("place").innerHTML = str;

  option = "";
  str = "";
  for(var i = 0; i < years.length; i++)
  {
    option = "<option>" + years[i] + "</option>";
    str += option;
  }
    document.getElementById("time").innerHTML = str;
}

/*Created this because the codes of this API doesn't
match others so they didn't work correctly*/
function buttonOptions()
{
  countryCodes = [
      "US","AF","AL","AS","AO","AQ","AR","AM","AU","BH","BD","BB","BY","BE",
      "BM","BT","BO","BA","BR","BN","BG","BF","CM","CA","CV","CF","TD","CN",
      "CO","CG","CI","HR","CU","CY","DJ","DO","EC","EG","GQ","ER","ET","FO",
      "FJ","FI","FR","GA","GM","GH","GI","GR","GL","GT","GY","HK","HU","IS",
      "IN","ID","IR","IT","JM","JO","KZ","KE","KR","KG","LA","LS","LY","LI",
      "LT","LU","MO","MK","MG","MY","MV","ML","MT","MH","MR","MU","MX","FM",
      "MD","MC","MN","MA","MZ","NR","NP","NL","AN","NC","NZ","NI","NG","NU",
      "MP","NO","PK","PA","PE","PL","QA","RO","RW","SH","KN","PM","VC","WS",
      "SM","ST","SA","SN","SC","SL","SG","SI","SB","SO","ZA","ES","SZ","SE",
      "CH","SY","TW","TZ","TH","TK","TO","TT","TN","TV","UG","AE","GB","UY",
      "UZ",];

  names = [
      "United States","Afghanistan","Albania","Australia","Angola",
      "American Samoa","Argentina","Armenia","Austria","Belize","Bermuda",
      "Barbados","Burundi","Belgium","Burma","Bhutan","Belarus","Bahrain",
      "Brazil","Benin","Bangladesh","Bahamas","Cameroon","Canada","Cabo Verde",
      "Congo (Brazzaville)","Trinidad and Tobago","Comoros","Colombia",
      "Congo (Kinshasa)","Chile","Croatia","Cuba","Cyprus","Djibouti",
      "Dominica","Ecuador","Egypt","Guam","Eritrea","Ethiopia","Faroe Islands",
      "Fiji","Finland","France","Gambia","Germany","Ghana","Gibraltar","Greece",
      "Greenland","Guatemala","Guyana","Hong Kong","Hungary","Israel","India",
      "Indonesia","Iran","Italy","Jamaica","Jordan","Kazakhstan","Kenya",
      "Kiribati","Kyrgyzstan","Laos","Liechtenstein","Libya","Liberia",
      "Lesotho","Luxembourg","Morocco","Macedonia","Mongolia","Malaysia",
      "Maldives","Mali","Malta","Montserrat","Mauritania","Oman","Mexico",
      "Federated States of Micronesia","Moldova","Macau","Monaco","Madagascar",
      "Mozambique","Nauru","Nepal","Netherlands","Andorra","New Caledonia",
      "New Zealand","Nigeria","Niger","Nicaragua","Mauritius","Norway",
      "Pakistan","Paraguay","Peru","Poland","Qatar","Romania","Rwanda",
      "Saint Helena, Ascension, and Trista","North Korea","Panama",
      "Saint Vincent and the Grenadines","Samoa","San Marino","Saint Lucia",
      "Saudi Arabia","Singapore","Saint Kitts and Nevis","Sierra Leone",
      "Senegal","Slovenia","Saint Pierre and Miquelon","Somalia","Zambia",
      "El Salvador","Switzerland","Seychelles","China","Syria","Taiwan",
      "Tanzania","Thailand","Turks and Caicos Islands","Togo","Timor-Leste",
      "Tonga","Tuvalu","Uganda","United Arab Emirates","Gabon",
      "Uruguay","Uzbekistan"];

      for(var i = 2000; i < 2051; i++)
      {
        years.push(i);
      }

      createOptions();
}
