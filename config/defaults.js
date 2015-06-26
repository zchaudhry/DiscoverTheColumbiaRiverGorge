define({
  //Default configuration settings for the applciation. This is where you"ll define things like a bing maps key,
  //default web map, default app color theme and more. These values can be overwritten by template configuration settings
  //and url parameters.
  "appid": "",
  "webmap": "5beb24cf05324a3a8ff148be93145c94",
  "oauthappid": null,
  //Enter the url to the proxy if needed by the applcation. See the "Using the proxy page" help topic for details
  //developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
  "proxyurl": "",
  //Example of a template specific property. If your template had several color schemes
  //you could define the default here and setup configuration settings to allow users to choose a different
  //color theme.
  "title": "Discover the Columbia River Gorge",
  "summary": "Discover Recreation in the Columbia River Gorge is an interactive map that lets you explore recreation sites and trails in the awe inspiring Columbia River Gorge National Scenic Area.  Discover and find campgrounds, picnic areas, trailheads, trails and more with this exciting new app.  The app will help you plan your next trip by providing information about recreation sites and trails in the Columbia River Gorge.",
  "defaultPanel": "about",
  "enableDialogModal": true,
  "dialogModalContent": "",
  "dialogModalTitle": "",
  "enableSummaryInfo": true,
  "enableLegendPanel": true,
  "enableAboutPanel": true,
  "enableLayersPanel": true,
  "enableHomeButton": true,
  "enableLocateButton": true,
  "enableBasemapToggle": true,
  "enableShareDialog": true,
  "enableBookmarks": true,
  "enableOverviewMap": true,
  "openOverviewMap": false,
  "enableModifiedDate": true,
  "enableViewsCount": true,
  "enableMoreInfo": true,
  "enablePrintButton": false,
  "defaultBasemap": "topo",
  "nextBasemap": "hybrid",
  //Go to http://www.arcgis.com/sharing/rest/content/items/df8bcc10430f48878b01c96e907a1fc3/data?f=pjson and input below the appropriate operational layer that you want to configure as swipe layer
  "swipeLayer": {
    "fields": [],
    "id": ""
  },
  "swipeType": "vertical",
  "swipeInvertPlacement": true,
  "hideNotesLayerPopups": true,
  "enableInstagram": true,
  "instagramVisible": false,
  "instagramTime": "",
  "enableFlickr": true,
  "flickrVisible": false,
  "flickrSearch": "",
  "flickrTime": "",
  "enableTwitter": true,
  "twitterVisible": false,
  "twitterSearch": "",
  "enableWebcams": true,
  "webcamsVisible": false,
  "enableYouTube": true,
  "youtubeVisible": false,
  "youtubeSearch": "",
  "youtubeTime": "all_time", // today, this_week, this_month, all_time
  "bitlyLogin": "esri",
  "bitlyKey": "R_65fd9891cd882e2a96b99d4bda1be00e",
  "twitterUrl": location.protocol + "//utility.arcgis.com/tproxy/proxy/1.1/search/tweets.json",
  "twitterSigninUrl": location.protocol + "//utility.arcgis.com/tproxy/signin",
  "flickr_key": "404ebea7d5bc27aa5251d1207620e99b",
  "webcams_key": "65939add1ebe8bc9cc4180763f5df2ca",
  "instagram_key": "288c36a1a42c49de9a2480a05d054619",
  "youtube_key": "AI39si5AmNrzX3VKNKo4Kcet9BVemrvyjl4B13ezBbNLsvKOlw9Vh3eL_57dZ2vC6M9PwV9i3bHm6emtZLr_BhQ8qtnTbvwzCw",
  /*
    "bannedUsersService": location.protocol + "//services.arcgis.com/QJfoC7c7Z2icolha/ArcGIS/rest/services/fai/FeatureServer/2",
    "bannedWordsService": location.protocol + "//tmservices1.esri.com/ArcGIS/rest/services/SharedTools/Filter/MapServer/1",
    "flagMailServer": location.protocol + "//tmappsevents.esri.com/Website/pim_fai/fai.php",
    */
  //Enter the url to your organizations bing maps key if you want to use bing basemaps
  "bingmapskey": "",
  //Defaults to arcgis.com. Set this value to your portal or organization host name.
  "sharinghost": location.protocol + "//" + "www.arcgis.com",
  //When true the template will query arcgis.com for default settings for helper services, units etc. If you 
  "units": null,
  "helperServices": {
    "geometry": {
      "url": null
    },
    "printTask": {
      "url": null
    },
    "elevationSync": {
      "url": null
    },
    "geocode": [{
      "url": null
           }]
  }
});
