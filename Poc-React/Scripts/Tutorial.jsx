var SearchExample = React.createClass({

    getInitialState: function(){
        return { searchString: '' };
    },

    handleChange: function(e){
        //Ao comentar esse codigo nada vai acontecer ao alterar o valor do input
   
        this.setState({searchString:e.target.value});
    },

    render: function() {

        var libraries = this.props.items,
            searchString = this.state.searchString.trim().toLowerCase();


        if(searchString.length > 0){
                      
            libraries = libraries.filter(function(l){
                return l.name.toLowerCase().match( searchString );
            });

        }

        return <div>
                    <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Digite aqui" />
                    <ul> 

                        { libraries.map(function(l){
                            return <li>{l.name} <a href={l.url}>  {l.url} </a></li>
                            }) }
                    </ul>
                </div>;

    }
});

                                                                                                                                                             
var libraries = [
{name:'HitBTC', url: 'https://hitbtc.com/exchange/BCN-to-BTC'},
{name:'Poloniex ', url: 'https://poloniex.com/exchange/#btc_bcn'},
{name:'Cryptopia', url: 'https://www.cryptopia.co.nz/Exchange?market=BCN_LTC'},
{name:'Bittrex', url: 'https://bittrex.com/Market/Index?MarketName=BTC-NAV'},
{name:'LiteBit.eu', url: 'https://www.litebit.eu/en/buy/nav-coin'},
{name:'alcurEX', url: 'https://alcurex.com/#NAV-BTC'},
{name:'Novaexchange', url: 'https://novaexchange.com/market/BTC_NAV/'},
{name:'DABTC', url: 'https://www.dabtc.com/home/Trade/index/coin/LEO.html'},
{name:'Livecoin', url: 'https://www.livecoin.net/'},
{name:'LEOxChange', url: 'https://leoxchange.com/'},
{name:'C-CEX', url: 'https://c-cex.com/index.html?p=leo-btc'},
{name:'Crypto Dao', url: 'https://cryptodao.com/site/index/LEO/BTC'},
{name:'Bitfinex', url: 'https://www.bitfinex.com/trading/BTCUSD'},
{name:'OKCoin.cn', url: 'https://www.okcoin.cn'},
{name:'BTCC', url: 'https://www.btcchina.com/exc/trade/cnybtc'},
{name:'Huobi', url: 'https://www.huobi.com'},
{name:'bitFlyer', url: 'https://bitflyer.jp/'},
{name:'Bitstamp', url: 'https://www.bitstamp.net'},
{name:'Bithumb', url: 'https://www.bithumb.com/'},
{name:'GDAX', url: ' https://www.gdax.com/'},
{name:'Gemini', url: ' https://gemini.com/'},
{name:'Kraken', url: ' https://www.kraken.com'},
{name:'LakeBTC ', url: ' https://lakebtc.com/'},
{name:'Korbit ', url: ' https://www.korbit.co.kr/'},
{name:'Coinone ', url: ' https://coinone.co.kr/exchange/trade/btc/'},
{name:'CHBTC ', url: ' https://www.chbtc.com/btc'},
{name:'YoBit ', url: ' https://yobit.net/en/trade/ETH/BTC'},
{name:'ACX ', url: ' https://acx.io/#/market'},
{name:'CoinsBank ', url: ' https://coinsbank.com/'},
{name:'BtcTrade - http://www.btctrade.com/BTC'},
{name:'51szzc ', url: ' https://www.51szzc.com/'},
{name:'Binance ', url: ' https://www.binance.com/trade.html?symbol=NEOBTC'},
{name:'C2CX ', url: ' https://www.c2cx.com/in/trade_btc'},
{name:'Gatecoin ', url: ' https://www.gatecoin.com/'},
{name:'CEX.IO ', url: ' https://cex.io/#BTC-USD'},
{name:'itBit ', url: ' https://www.itbit.com'},
{name:'BTC38 - http://www.btc38.com/trade.html?mk_type=cny&amp;btc38_trade_coin_name=btc'},
{name:'BTER ', url: ' https://bter.com/trade/btc_cny'},
{name:'OkCoin Intl. ', url: ' https://www.okcoin.com'},
{name:'ViaBTC ', url: ' https://www.viabtc.com/quot/realtime?currency=cny&amp;dest=btc'},
{name:'BCC Exchange ', url: ' https://bitconnect.co/user/trade?Market=BCC'},
{name:'Allcoin ', url: ' https://allcoin.com/markets/QTUM-BTC/0/'},
{name:'Yunbi ', url: ' https://yunbi.com/markets/btccny'},
{name:'BitBays ', url: ' https://bitbays.com/'},
{name:'BitBay ', url: ' https://bitbay.net'},
{name:'QuadrigaCX ', url: ' https://www.quadrigacx.com/market/btc/cad'},
{name:'BTC Markets ', url: ' https://btcmarkets.net/'},
{name:'Luno ', url: ' https://www.luno.com/trade/XBTMYR'},
{name:'BX Thailand ', url: ' https://bx.in.th/THB/BTC/'},
{name:'Lhang ', url: ' https://www.lhang.com/#/trading/btc/trade'},
{name:'Bitcoin Indonesia ', url: ' https://www.bitcoin.co.id'},
{name:'Coinfloor ', url: ' https://www.coinfloor.co.uk/'},
{name:'BL3P ', url: ' https://bl3p.eu/trade'},
{name:'Biduobao ', url: ' https://www.biduobao.com/market-btc.html'},
{name:'USD X ', url: ' https://www.usd-x.com/market/BTC/USD'},
{name:'BTC Alpha ', url: ' https://btc-alpha.com/exchange/BTC_USD/'},
{name:'Yuanbao ', url: ' https://www.yuanbao.com/trade/btc2cny'},
{name:'Paribu ', url: ' https://www.paribu.com/'},
{name:'Exmo ', url: ' https://exmo.com/'},
{name:'Bitonic ', url: ' https://bitonic.nl'},
{name:'Liqui ', url: ' https://liqui.io/#/exchange/SNM_BTC'},
{name:'Mercado Bitcoin ', url: ' https://www.mercadobitcoin.com.br/'},
{name:'xBTCe ', url: ' https://www.xbtce.com/btcusd'},
{name:'The Rock Trading ', url: ' https://therocktrading.com/en/offers/BTCEUR'},
{name:'BTCTurk ', url: ' https://www.btcturk.com'},
{name:'BitMarket ', url: ' https://www.bitmarket.net/market.php?market=PLNBTC'},
{name:'Bitso ', url: ' https://bitso.com/trade/market/btc/mxn'},
{name:'CoinExchange ', url: ' https://www.coinexchange.io/market/BQX/BTC'},
{name:'Tidex ', url: ' https://tidex.com/#/exchange/WAVES_BTC'},
{name:'BTC-X ', url: ' https://www.btc-x.is/market/BTC/USD'},
{name:'Gatehub ', url: ' https://www.gatehub.net/'},
{name:'DCExchange ', url: ' https://dcexe.com/'},
{name:'Nevbit ', url: ' https://nevbit.com/btcpln'},
{name:'Koinim ', url: ' https://koinim.com/'},
{name:'Coinsquare ', url: ' https://coinsquare.io/'},
{name:'Altcoin Trader ', url: ' https://www.altcointrader.co.za/btc'},
{name:'Bit520 ', url: ' https://www.bit520.com/'},
{name:'Bits Blockchain ', url: ' https://bitsblockchain.com/'},
{name:'Fargobase ', url: ' https://fargobase.com/'},
{name:'TCC Exchange - http://thechampcoin.com/'},
{name:'Bitstamp (Ripple Gateway) ', url: ' https://www.bitstamp.net/'},
{name:'BitcoinToYou ', url: ' https://www.bitcointoyou.com/'},
{name:'CoinMate ', url: ' https://coinmate.io'},
{name:'Waves Decentralized Exchange - http://www.wavesplatform.com/'},
{name:'Bittylicious ', url: ' https://bittylicious.com'},
{name:'Lykke Exchange ', url: ' https://lykke.com/exchange.php'},
{name:'Bitex.la ', url: ' https://bitex.la'},
{name:'Mr. Ripple ', url: ' https://mr-ripple.com/'},
{name:'Exrates ', url: ' https://lk.exrates.me/dashboard?name=BTC/ETH'},
{name:'Tidebit ', url: ' https://www.tidebit.com/'},
{name:'Coinrate ', url: ' https://coinrate.net/exchange/btc-frgc'},
{name:'OpenLedger DEX ', url: ' https://openledger.io'},
{name:'CryptoDerivatives ', url: ' https://cryptoderivatives.market/token/DGD'},
{name:'Omni DEX - http://omniexplorer.info/lookupmarket.aspx?spa=3&amp;spb=31'},
{name:'Jubi - http://www.jubi.com/coin/eth/'},
{name:'EtherDelta ', url: ' https://etherdelta.github.io/#MTH-ETH'},
{name:'19800 ', url: ' https://www.19800.com/trade.html?marketid=cny_eth'},
{name:'ETHEXIndia ', url: ' https://ethexindia.com/live-market/'},
{name:'Mercatox ', url: ' https://mercatox.com/exchange/MTH/ETH'},
{name:'LocalTrade ', url: ' https://localtrade.pro'},
{name:'Quoine ', url: ' https://quoinex.com/'},
{name:'Bitbank ', url: ' https://bitbank.cc/trade/eth_btc'},
{name:'ABwang ', url: ' https://www.abwang.com/'},
{name:'b8wang ', url: ' https://www.b8wang.com/exchange/ethcny'},
{name:'Yobtc ', url: ' https://www.yobtc.com/trade/index.shtml?coinId=36'},
{name:'Kuna ', url: ' https://kuna.io/markets/ethuah'},
{name:'Tripe Dice Exchange ', url: ' https://mydicewallet.com/'},
{name:'RippleFox ', url: ' https://ripplefox.com/cny'},
{name:'Cryptomate ', url: ' https://cryptomate.co.uk'},
{name:'COSS ', url: ' https://exchange.coss.io/pair/eth-btc'},
{name:'Bitsane ', url: ' https://bitsane.com/exchange/eth-eur'},
{name:'SZZC ', url: ' https://szzc.com/#!/trade/ethcny'},
{name:'OK-BIT ', url: ' https://ok-bit.com/'},
{name:'Bleutrade ', url: ' https://bleutrade.com/exchange/ETH/BTC'},
{name:'BNT Smart Token Contract ', url: ' https://www.bancor.network/bnt'},
{name:'Independent Reserve ', url: ' https://www.independentreserve.com/Market'},
{name:'Stocks.Exchange ', url: ' https://stocks.exchange/trade/ETH/BTC'},
{name:'BTC9 ', url: ' https://www.btc9.com/'},
{name:'SouthXchange ', url: ' https://www.southxchange.com/Market/Book/BCH/USD'},
{name:'BitGrail ', url: ' https://bitgrail.com/market/BTC-BCC'},
{name:'Trade Satoshi ', url: ' https://tradesatoshi.com/Exchange?market=BCH_BTC'},
{name:'CoinGather ', url: ' https://www.coingather.com/exchange/BCH/DOGE'},
{name:'Cryptox ', url: ' https://cryptox.pl/'},
{name:'Stellar Decentralized Exchange -'},
{name:'Ripple China - http://ripplechina.net/'},
{name:'BTCXIndia ', url: ' https://btcxindia.com/live-market/'},
{name:'Tokyo JPY ', url: ' https://www.tokyojpy.com/'},
{name:'Rippex ', url: ' https://rippex.net/'},
{name:'BTC Trade UA ', url: ' https://btc-trade.com.ua/stock/LTC_UAH'},
{name:'Coingi ', url: ' https://coingi.com/'},
{name:'BitKonan ', url: ' https://bitkonan.com'},
{name:'NIX-E', url: 'https://www.nix-e.com'},
{name:'Negocie Coins', url: 'http://www.negociecoins.com.br/default.aspx#BRL'},
{name:'Tux Exchange', url:'https://tuxexchange.com/trade?coin=LTC&amp;market=BTC'},
{name:'Bitlish', url:'https://bitlish.com/trade/ltcusd'},
{name:'Bitmaszyna', url:'https://bitmaszyna.pl/'},
{name:'CoinsMarkets', url:'https://coinsmarkets.com/trade-BTC-LTC.htm'},
{name:'247exchange', url:'https://www.247exchange.com/rates'},
{name:'Heat Wallet', url:'https://heatwallet.com/#/trader/5592059897546023466/4249904286321844153'},
{name:'VirtacoinWorld', url:'https://xvplocalmaket.virtacoinworld.com'},
{name:'Bisq', url:'https://market.bitsquare.io/?market=dash_btc'},
{name:'DC-Ex', url:'https://www.dc-ex.com/exchange/index/BTC_DASH'},
{name:'BitShares Asset Exchange', url:'https://bitshares.openledger.info/market/BITCNY_BTS'},
{name:'EmpoEx', url:'http://www.empoex.com/trade/DGB-BTC'},
{name:'AidosMarket', url: 'https://aidosmarket.com/'},
{name:'IOTA Exchange', url: 'http://iotaexchange.com/#trades'},
{name:'Nxt Asset Exchange', url: 'https://www.mynxt.info/assets/'},
{name:'B.top', url: 'https://b.top/trade/cny_coin.html?id=13&amp;type=1'},
{name:'Counterparty DEX', url: 'https://counterwallet.io'},
{name:'Decentrex', url: 'https://decentrex.com/#SNT-ETH'},
{name:'ExcambrioRex', url: 'http://www.excambiorex.com/'},
{name:'ISX', url: ' https://beta.isx.is'},
{name:'BTC100', url: 'https://www.btc100.com/'},
{name:'CoinVC', url: 'http://www.coinvc.com/market/trade/tnt'},
{name:'Touzibi', url: 'http://www.touzibi.com/'},
{name:'Bitcoin Growth Fund Exchange', url: 'https://bitcoingrowthfund.com/trade/mcap'},
{name:'Virtualworldland', url: 'https://virtualworldland.com/dashboard.php'},
{name:'P2PB2B', url: 'https://p2pb2b.cn/'},
{name:'Burst Asset Exchange -'},
{name:'Nocks', url: 'https://nocks.co/'},
{name:'GuldenTrader', url: 'https://guldentrader.com/'},
{name:'Ore.Bz', url: 'https://ore.bz/markets/gbcusd'},
{name:'BeiBT', url: 'http://www.beibt.com/Orders/index/cid/33.html'},
{name:'Swis Exchange', url: 'https://www.swisexchange.com'},
{name:'FreiExchange', url: 'https://freiexchange.com/'},
{name: 'OasisDEX', url: 'https://oasisdex.com/' },

];

ReactDOM.render(
    <SearchExample items={ libraries } />,
    document.getElementById('container')
);