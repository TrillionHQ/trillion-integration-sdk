# trillion-integration-sdk

With checkJewelryExist method you can check if jewelryId exist in our database and then use it for setJewelryId method.

You need to create an empty div element for widget initialization. For example:
<div id="trillion-widget"></div>

import {TrillionWidgetApp} from "trillion-widget"

const elem = document.getElementById('trillion-widget')
const trillionWidget = new TrillionWidgetApp()
trillionViewer.init(elem)
trillionWidget.setJewelryID('jewelryId')
trillionWidget.setJewelryType('necklace')
trillionWidget.refresh()

For more methods please visit our library package page - https://www.npmjs.com/package/trillion-widget

