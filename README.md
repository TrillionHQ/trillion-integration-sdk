# trillion-integration-sdk

With checkJewelryExist method you can check if jewelryId exist in our database and then use it for setJewelryId method./n/n

You need to create an empty div element for widget initialization. For example:/n/n
<div id="trillion-widget"></div>/n

import {TrillionWidgetApp} from "trillion-widget"/n

const elem = document.getElementById('trillion-widget')/n
const trillionWidget = new TrillionWidgetApp()/n
trillionViewer.init(elem)/n
trillionWidget.setJewelryID('jewelryId')/n
trillionWidget.setJewelryType('necklace')/n
trillionWidget.refresh()/n/n

For more methods please visit our library package page - https://www.npmjs.com/package/trillion-widget

