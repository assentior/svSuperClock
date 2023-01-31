const headerLine = document.querySelector('#mt2-header-line-wrapper');
const headerText = document.querySelector('.header-text');

document.querySelector('#module-financial').addEventListener('click', function(){colorModuleLine("red", "red", "green", "green", "1", "Financial -- Transactions");}
);
document.querySelector('#module-cash').addEventListener('click', function(){colorModuleLine("red", "red", "green", "green", "2", "Cash Book");}
);
document.querySelector('#module-bank').addEventListener('click', function(){colorModuleLine("red", "red", "green", "green", "3", "Bank Book");}
);
document.querySelector('#module-sales').addEventListener('click', function(){colorModuleLine("green", "green", "green", "green", "4", "Sales Book -- Transactions");}
);
document.querySelector('#module-purchasing').addEventListener('click', function(){colorModuleLine("red", "red", "red", "red", "5", "Purchasing Book -- Transactions");}
);
document.querySelector('#module-vat').addEventListener('click', function(){colorModuleLine("white", "white", "white", "white", "0", "VAT");}
);
document.querySelector('#module-inventory').addEventListener('click', function(){colorModuleLine("green", "green", "red", "red", "7", "Inventory -- Transactions");}
);
document.querySelector('#module-assets').addEventListener('click', function(){colorModuleLine("red", "red", "green", "green", "8", "Assets");}
);
document.querySelector('#module-budgets').addEventListener('click', function(){colorModuleLine("white", "white", "white", "white", "0", "Budgets");}
);
document.querySelector('#module-projects').addEventListener('click', function(){colorModuleLine("green", "green", "green", "red", "100", "Projects -- Transactions");}
);
document.querySelector('#module-clock').addEventListener('click', function(){colorModuleLine("green", "green", "green", "green", "101", "Super Clock");}
);


function colorModuleLine (a, b, c, d, e, f) {
    let ornament;
    if (e == "0") {
        ornament = `<div id="mt2-header-line-ornament-0" class="mt2-header-line mt2-header-line-0"></div>`;
    } else {
        ornament = `
        <img src="/img/line_ornament_${e}.svg" alt="line_2">`;
    }

    headerLine.innerHTML = `
        <div id="mt2-header-line-1-${a}" class="mt2-header-line mt2-header-line-1"></div>
        <div id="mt2-header-line-2-${b}" class="mt2-header-line mt2-header-line-2"></div>
        <div id="mt2-header-line-3-blue" class="mt2-header-line"></div>
        <div id="mt2-header-line-4-${c}" class="mt2-header-line mt2-header-line-4"></div>
        <div id="mt2-header-line-5-${d}" class="mt2-header-line mt2-header-line-5"></div>
        <div id="mt2-header-line-ornament-wrapper">${ornament}</div>
    `;
    headerText.textContent = `${f}`;
}