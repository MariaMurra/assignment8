/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};


function BankAccount() {
    "use strict";
    var balance = 0, owner, self;
    
    self = {
        widthdrawal: function (widthdrawalAmount) {
            widthdrawalAmount = parseInt(window.prompt("Amount you wish to widthdraw \n *please use numbers"), 10);
            if (widthdrawalAmount === isNaN) {
                window.alert("please use a valid quantity");
            } else {
                $("balance").innerHTML = balance -= widthdrawalAmount;
            }
        },
        deposit: function (depositAmount) {
            depositAmount = parseInt(window.prompt("Amount you wish to deposit \n *please use numbers"), 10);
            
            if (depositAmount === isNaN) {
                window.alert("Use a valid number");
            } else {
                $("balance").innerHTML = balance += depositAmount;
            }
            
        },
        getOwnerName: function () {
            owner = window.prompt("What should I call you?");
            var title = window.document.createElement("p"),
                textnode = document.createTextNode(owner);
            title.appendChild(textnode);
            $("interface").appendChild(title);
        }
    };
    return self;
}



var Balance = new BankAccount();

window.addEventListener("load", function () {
    "use strict";
    $("name").addEventListener("click", Balance.getOwnerName);
    $("deposit").addEventListener("click", Balance.deposit);
    $("widthdrawal").addEventListener("click", Balance.widthdrawal);
});