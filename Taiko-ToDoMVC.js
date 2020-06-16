//SOURCE - https://github.com/getgauge-contrib/compareBrowserAutomationTools/blob/master/compareCostOfSelectorMaintenance/taiko/tests/activities.js

const { openBrowser,closeBrowser, goto, checkBox, click, near,into,$,textBox,hover,button, write, text, press } = require('taiko');
const assert = require('assert');
(async () => {
    try {
          //Open Browser and navigate to the page
          await openBrowser({headless:false});
          await goto('http://todomvc.com/examples/react/#/'); 

          //Open Browser and navigate to the page
          await write('Add Task');
          await press('Enter')
          assert.ok(await text('1 item left').exists());
          await click($("#toggle-all"));
          await click("Clear completed");
          
          //Open Browser and navigate to the page
          await write('Complete Task',into(textBox({placeholder:"What needs to be done?"})));
          await press('Enter')
          assert.ok(await text('1 item left').exists());
          await click('Active')
          assert.ok(await text('Complete Task').exists());
          await click(checkBox(near('Complete Task')))
          assert.ok(await text('0 items left').exists());
          await click('Active')
          assert.ok(!(await text('Complete Task').exists()));
          
          //Open Browser and navigate to the page
          await write('Completed Task',into(textBox({placeholder:"What needs to be done?"})));
          await press('Enter')
          assert.ok(await text('1 item left').exists());
          await click('Active')
          assert.ok(await text('Completed Task').exists());
          await click(checkBox(near('Completed Task')))
          assert.ok(await text('0 items left').exists());
          await click('Active')
          assert.ok(!(await text('Completed Task').exists()));
          
          //Open Browser and navigate to the page
          await write('Complete Task',into(textBox({placeholder:"What needs to be done?"})));
          await press('Enter')
          assert.ok(await text('1 item left').exists());
          await click('Active')
          assert.ok(await text('Complete Task').exists());
          await click(checkBox(near('Complete Task')))
          assert.ok(await text('0 items left').exists());
          await click('Active')
          assert.ok(!(await text('Complete Task').exists()));
          
          //Open Browser and navigate to the page
          await write('Clear Task',into(textBox({placeholder:"What needs to be done?"})));
          await press('Enter')
          assert.ok(await text('1 item left').exists());
          await click(checkBox(near('Clear Task')))
          assert.ok(await text('0 items left').exists());
          await click('Clear completed')
          assert.ok(!(await text('Clear Task').exists()));
          
          //Open Browser and navigate to the page
          await write('Remove Task',into(textBox({placeholder:"What needs to be done?"})));
          await press('Enter')
          assert.ok(await text('1 item left').exists());
          await hover("Remove Task");
          await click(button({class:"destroy"}));
          assert.ok(!(await text('Remove Task').exists()));
	} catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();