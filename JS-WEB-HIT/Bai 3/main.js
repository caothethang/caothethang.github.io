let form = {
    id: 1,
    title: 'task 1',
    description: 'task 1',
    type: 'task',
    priority: 'highest',
    allowFor: ['back_end', 'front_end', 'function_test', 'performance_test'],
    createdBy: 'Joo',
    assignee: 'joo',
    estimate: '20/03/2020',
    state: 'todo'
};
function showViewInfo() {
    document.formControl.style.display = 'flex';
    document.getElementById('opacityDiv').style.display = 'block';
    document.formControl.title.value = form.title;
    document.formControl.priority.value = form.priority;
    document.formControl.state.value = form.state;
    document.formControl.type.value = form.type;
    document.formControl.assignee.value = form.assignee;
    document.formControl.createdBy.value = form.createdBy;
    document.formControl.estimate.value = form.estimate;
    document.formControl.description.value = form.description;
    setCheckBox();
};
function showInfo() {
    var pre = document.getElementById('content');
    pre.innerText = JSON.stringify(form, null, 4);
}

function saveViewInfo() {
    let pre = document.getElementById('content');
    form.title = document.formControl.title.value;
    form.priority = document.formControl.priority.value;
    form.state = document.formControl.state.value;
    form.type = document.formControl.type.value;
    form.assignee = document.formControl.assignee.value;
    form.createdBy = document.formControl.createdBy.value;
    form.estimate = document.formControl.estimate.value;
    form.description = document.formControl.description.value;
    form.allowFor = getCheckBox();
    pre.innerHTML = JSON.stringify(form,null, 4);
    document.formControl.style.display = "none";
    document.getElementById('opacityDiv').style.display = "none";

}
function setCheckBox() {
    let checkboxValue = document.getElementsByName('allowFor');
    for (i = 0; i < checkboxValue.length; i++) {
        checkboxValue[i].checked = false;
    }
    for (i = 0; i < form.allowFor.length; i++) {
        let allowItem = form.allowFor[i];
        document.getElementById(allowItem).checked = true;
    }
}
function getCheckBox() {
    let allow = document.getElementsByName('allowFor');
    let arr = [];
    for (i = 0; i < allow.length; i++) {
        if (allow[i].checked) {
            arr.push(allow[i].value);
        }
    }
    return arr;
}

function CloseForm(){
    document.getElementById('opacityDiv').style.display = "none";
}

