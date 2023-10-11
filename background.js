// React to all moves (move to trash).
browser.messages.onMoved.addListener(async messages => {
    let activeTab = await browser.mailTabs.getCurrent();
    if (activeTab) {
        browser.mailTabs.setSelectedMessages(activeTab.id, []);
    }
})

// React to permanent deletes.
browser.messages.onDeleted.addListener(async messages => {
    let activeTab = await browser.mailTabs.getCurrent();
    if (activeTab) {
        browser.mailTabs.setSelectedMessages(activeTab.id, []);
    }
})
