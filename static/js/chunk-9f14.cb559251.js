(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-9f14"],{10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},16:function(e,t){},17:function(e,t){},18:function(e,t){},19:function(e,t){},20:function(e,t){},21:function(e,t){},22:function(e,t){},23:function(e,t){},24:function(e,t){},25:function(e,t){},26:function(e,t){},27:function(e,t){},28:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){},BRPr:function(e){e.exports=[{constant:!1,inputs:[],name:"exit",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"getReward",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_devaddr",type:"address"}],name:"newDevaddr",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"reward",type:"uint256"}],name:"notifyRewardAmount",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_rewardDistribution",type:"address"}],name:"setRewardDistribution",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"amount",type:"uint256"}],name:"stake",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"amount",type:"uint256"}],name:"withdraw",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[{name:"_devaddr",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,name:"reward",type:"uint256"}],name:"RewardAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"user",type:"address"},{indexed:!1,name:"amount",type:"uint256"}],name:"Staked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"user",type:"address"},{indexed:!1,name:"amount",type:"uint256"}],name:"Withdrawn",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"user",type:"address"},{indexed:!1,name:"reward",type:"uint256"}],name:"RewardPaid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{constant:!0,inputs:[{name:"account",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"devaddr",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"DURATION",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"account",type:"address"}],name:"earned",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"isOwner",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"lastTimeRewardApplicable",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"lastUpdateTime",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"peach",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"periodFinish",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"rewardDistribution",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"rewardPerToken",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"rewardPerTokenStored",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"rewardRate",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"rewards",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"starttime",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"userRewardPerTokenPaid",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"wbnb",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"}]},IaSl:function(e,t,n){"use strict";var a=n("Og7m");n.n(a).a},Og7m:function(e,t,n){},YKUm:function(e){e.exports={abi:[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"delegator",type:"address"},{indexed:!0,internalType:"address",name:"fromDelegate",type:"address"},{indexed:!0,internalType:"address",name:"toDelegate",type:"address"}],name:"DelegateChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"delegate",type:"address"},{indexed:!1,internalType:"uint256",name:"previousBalance",type:"uint256"},{indexed:!1,internalType:"uint256",name:"newBalance",type:"uint256"}],name:"DelegateVotesChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"DELEGATION_TYPEHASH",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"DOMAIN_TYPEHASH",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint32",name:"",type:"uint32"}],name:"checkpoints",outputs:[{internalType:"uint32",name:"fromBlock",type:"uint32"},{internalType:"uint256",name:"votes",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"minters",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"nonces",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"numCheckpoints",outputs:[{internalType:"uint32",name:"",type:"uint32"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"restPeachSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_minter",type:"address"}],name:"addMinter",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_minter",type:"address"}],name:"removeMinter",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"delegator",type:"address"}],name:"delegates",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"delegatee",type:"address"}],name:"delegate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"delegatee",type:"address"},{internalType:"uint256",name:"nonce",type:"uint256"},{internalType:"uint256",name:"expiry",type:"uint256"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"delegateBySig",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getCurrentVotes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"blockNumber",type:"uint256"}],name:"getPriorVotes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}]}},"yW+o":function(e,t,n){"use strict";n.r(t);var a=n("14Xm"),s=n.n(a),i=n("D3Ub"),o=n.n(i),r=n("QbLZ"),l=n.n(r),c=n("YEIV"),u=n.n(c),d=n("YxRf"),p=n.n(d),y=n("kB5k"),m=n.n(y),b=n("L2JU"),v=n("YKUm");window.ethereum?window.web3=new p.a(ethereum):window.web3?window.web3=new p.a(web3.currentProvider):console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");var f=web3,h="0xD23B064910a11C17B0052AeeC3D7c79B718d7fA2",w=new f.eth.Contract(v.abi,"0xacd6b5f76db153fb45eae6d5be5bdbd45d1b2a8c"),_=n("BRPr"),k=new f.eth.Contract(_,""),g=new f.eth.Contract(_,""),M=new f.eth.Contract(v.abi,"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"),x=new f.eth.Contract(_,h),B=new f.eth.Contract(v.abi,"0x55d398326f99059ff775485246999027b3197955"),C=n("vDqi");console.log("");var T={data:function(){return u()({centerDialogVisible:!1,centerBalanceDialogVisible:!1,input:"",web3:null,netID:"1",web3Interval:null,metaMaskAddress:"",metaMaskBalance:0,tokenBalance:2345,totalTokenBalance:35435,myPeachBalance:0,peachTotalSupply:0,wBNBstaked:0,myWBNBStaked:0,peachStaked:0,myPeachStaked:0,tokenAmountInput:"",totalLockedValue:0,bnbprice:0,wbnbInput:"",busdInput:"",peachInput:"",farmingWBNB:0,availableWBNB:0,wbnbEarned:0,wbnbStaked:0,farmingBUSD:0,availableBUSD:0,busdEarned:0,busdStaked:0,farmingPeach:0,availablePeach:0,peachEarned:0},"peachStaked",0)},computed:l()({},Object(b.b)(["lang","loggin"]),{isUSDTPoolDeployed:function(){return!0},isWBNBPoolDeployed:function(){return!1},isPeachDeployed:function(){return!1},isBscMainnet:function(){return"97"==this.netID},connectWallet:function(){return this.$t("header.connectWallet")},myAccount:function(){return this.$t("header.myAccount")},isAdmin:function(){return"0x44F67c0bA01ea7411Fdbc8F5a8Ab8C96de78911C"==this.metaMaskAddress}}),methods:{countDownS_cb:function(e){console.log(e)},countDownE_cb:function(e){console.log(e)},test:function(){console.log(this.isPeachDeployed)},loadWeb3:function(){var e=this;return o()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("loadweb3"),!window.ethereum){t.next=13;break}return window.web3=new p.a(ethereum),t.prev=3,t.next=6,ethereum.enable();case 6:t.next=10;break;case 8:t.prev=8,t.t0=t.catch(3);case 10:e.web3=window.web3,t.next=14;break;case 13:window.web3?(window.web3=new p.a(web3.currentProvider),e.web3=window.web3):e.web3=null;case 14:e.checkAccounts(),e.checkNetwork(),e.loadPrice(),e.web3&&(e.centerDialogVisible=!1);case 18:case"end":return t.stop()}},t,e,[[3,8]])}))()},peachAddMinter:function(){w.methods.addMinter(h).send({from:this.metaMaskAddress}).then(function(e){console.log(e)})},addMinter:function(e){w.methods.addMinter(e).send({from:this.metaMaskAddress}).then(function(e){console.log(e)})},deployPeachPool:function(){var e=this;this.tokenAmountInput<=0?this.$message({showClose:!0,message:"部署分配代币必须大于0",type:"error"}):k.methods.setRewardDistribution(this.metaMaskAddress).send({from:this.metaMaskAddress}).then(function(t){console.log(t);var n=new m.a(e.tokenAmountInput*Math.pow(10,18));k.methods.notifyRewardAmount(n).send({from:e.metaMaskAddress}).then(function(e){console.log(e)})})},deployBusdPool:function(){var e=this;this.tokenAmountInput<=0?this.$message({showClose:!0,message:"部署分配代币必须大于0",type:"error"}):x.methods.setRewardDistribution(this.metaMaskAddress).send({from:this.metaMaskAddress}).then(function(t){console.log(t);var n=new m.a(e.tokenAmountInput*Math.pow(10,18));x.methods.notifyRewardAmount(n).send({from:e.metaMaskAddress}).then(function(e){console.log(e)})})},deploywBNBPool:function(){var e=this;this.tokenAmountInput<=0?this.$message({showClose:!0,message:"部署分配代币必须大于0",type:"error"}):g.methods.setRewardDistribution(this.metaMaskAddress).send({from:this.metaMaskAddress}).then(function(t){console.log(t);var n=new m.a(e.tokenAmountInput*Math.pow(10,18));g.methods.notifyRewardAmount(n).send({from:e.metaMaskAddress}).then(function(e){console.log(e)})})},loadPrice:function(){var e=this;C.get("https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=USD").then(function(t){console.log(t.data.binancecoin.usd),e.bnbprice=t.data.binancecoin.usd})},checkAccounts:function(){var e=this;null!==this.web3&&this.web3.eth.getAccounts(function(t,n){e.metaMaskAddress=n[0],console.log(n[0]),e.getBalance(n[0]),e.getPeachTokenBalance(n[0]),e.web3Interval=setInterval(function(){return e.web3TimerTick()},3e3)})},checkNetwork:function(){var e=this;window.web3.eth.net.getId(function(t,n){console.log(n),e.netID=n})},getBalance:function(e){var t=this;return o()(s.a.mark(function n(){var a;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=6;break}return n.next=3,t.web3.eth.getBalance(e);case 3:a=n.sent,t.metaMaskBalance=a/Math.pow(10,18),console.log(t.metaMaskBalance);case 6:case"end":return n.stop()}},n,t)}))()},getPeachTokenBalance:function(e){var t=this;return o()(s.a.mark(function n(){var a,i;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.methods.totalSupply().call();case 2:return a=n.sent,t.peachTotalSupply=a/Math.pow(10,18),n.next=6,w.methods.balanceOf(e).call();case 6:i=n.sent,t.myPeachBalance=i/Math.pow(10,18);case 8:case"end":return n.stop()}},n,t)}))()},earned:function(e,t){var n=this;return o()(s.a.mark(function a(){var i,o,r,l,c,u,d,p,y,m,b,v;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if("wbnb"!=e){a.next=20;break}return a.next=3,g.methods.earned(t).call();case 3:return i=a.sent,n.wbnbEarned=i/Math.pow(10,18),a.next=7,g.methods.balanceOf(t).call();case 7:return o=a.sent,n.wbnbStaked=o/Math.pow(10,18),a.next=11,M.methods.balanceOf(t).call();case 11:return r=a.sent,n.availableWBNB=r/Math.pow(10,18),a.next=15,M.methods.balanceOf("").call();case 15:l=a.sent,n.farmingWBNB=l/Math.pow(10,18),n.totalLockedValue=n.bnbprice*n.farmingWBNB+n.farmingBUSD,a.next=55;break;case 20:if("busd"!=e){a.next=39;break}return a.next=23,x.methods.earned(t).call();case 23:return c=a.sent,n.busdEarned=c/Math.pow(10,18),a.next=27,x.methods.balanceOf(t).call();case 27:return u=a.sent,n.busdStaked=u/Math.pow(10,18),a.next=31,B.methods.balanceOf(t).call();case 31:return d=a.sent,n.availableBUSD=d/Math.pow(10,18),a.next=35,B.methods.balanceOf(h).call();case 35:p=a.sent,n.farmingBUSD=p/Math.pow(10,18),a.next=55;break;case 39:return a.next=41,k.methods.earned(t).call();case 41:return y=a.sent,n.peachEarned=y/Math.pow(10,18),a.next=45,k.methods.balanceOf(t).call();case 45:return m=a.sent,n.peachStaked=m/Math.pow(10,18),a.next=49,w.methods.balanceOf(t).call();case 49:return b=a.sent,n.availablePeach=b/Math.pow(10,18),a.next=53,w.methods.balanceOf("").call();case 53:v=a.sent,n.farmingPeach=v/Math.pow(10,18);case 55:case"end":return a.stop()}},a,n)}))()},stake:function(e,t){var n=this;return o()(s.a.mark(function a(){return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if("wbnb"!=e){a.next=5;break}return a.next=3,g.methods.stake(t).send({from:n.metaMaskAddress});case 3:a.next=12;break;case 5:if("busd"!=e){a.next=10;break}return a.next=8,x.methods.stake(t).send({from:n.metaMaskAddress});case 8:a.next=12;break;case 10:return a.next=12,k.methods.stake(t).send({from:n.metaMaskAddress});case 12:case"end":return a.stop()}},a,n)}))()},withdraw:function(e,t){var n=this;return o()(s.a.mark(function a(){return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if("wbnb"!=e){a.next=3;break}return a.next=3,g.methods.withdraw(t).send({from:n.metaMaskAddress});case 3:case"end":return a.stop()}},a,n)}))()},exit:function(e){var t=this;return o()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if("wbnb"!=e){n.next=5;break}return n.next=3,g.methods.exit().send({from:t.metaMaskAddress});case 3:n.next=12;break;case 5:if("busd"!=e){n.next=10;break}return n.next=8,x.methods.exit().send({from:t.metaMaskAddress});case 8:n.next=12;break;case 10:return n.next=12,k.methods.exit().send({from:t.metaMaskAddress});case 12:case"end":return n.stop()}},n,t)}))()},getReward:function(e){var t=this;return o()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if("wbnb"!=e){n.next=5;break}return n.next=3,g.methods.getReward().send({from:t.metaMaskAddress});case 3:n.next=12;break;case 5:if("busd"!=e){n.next=10;break}return n.next=8,x.methods.getReward().send({from:t.metaMaskAddress});case 8:n.next=12;break;case 10:return n.next=12,k.methods.getReward().send({from:t.metaMaskAddress});case 12:case"end":return n.stop()}},n,t)}))()},approveAndStake:function(e){var t=this;return o()(s.a.mark(function n(){var a;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if("wbnb"!=e){n.next=8;break}if(!(t.wbnbInput<=0)){n.next=4;break}return t.$message({showClose:!0,message:t.$t("error.errorStakeValue"),type:"error"}),n.abrupt("return");case 4:a=new m.a(t.wbnbInput*Math.pow(10,18)),M.methods.approve("",a).send({from:t.metaMaskAddress}).then(function(e){t.stake("wbnb",a)}),n.next=21;break;case 8:if("busd"!=e){n.next=16;break}if(!(t.busdInput<=0)){n.next=12;break}return t.$message({showClose:!0,message:t.$t("error.errorStakeValue"),type:"error"}),n.abrupt("return");case 12:a=new m.a(t.busdInput*Math.pow(10,18)),B.methods.approve(h,a).send({from:t.metaMaskAddress}).then(function(e){t.stake("busd",a)}),n.next=21;break;case 16:if(!(t.peachInput<=0)){n.next=19;break}return t.$message({showClose:!0,message:t.$t("error.errorStakeValue"),type:"error"}),n.abrupt("return");case 19:a=new m.a(t.peachInput*Math.pow(10,18)),w.methods.approve("",a).send({from:t.metaMaskAddress}).then(function(e){t.stake("peach",a)});case 21:case"end":return n.stop()}},n,t)}))()},web3TimerTick:function(){var e=this;return o()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.getPeachTokenBalance(e.metaMaskAddress),e.isWBNBPoolDeployed&&e.earned("wbnb",e.metaMaskAddress),e.isUSDTPoolDeployed&&e.earned("busd",e.metaMaskAddress),e.isPeachDeployed&&e.earned("peach",e.metaMaskAddress);case 4:case"end":return t.stop()}},t,e)}))()},login:function(){this.loggin?this.centerBalanceDialogVisible=!0:this.centerDialogVisible=!0},toggleLang:function(e){this.$store.dispatch("SetLanguage",e),this.$i18n.locale=e},formatUSDValue:function(e){var t=e.toFixed(2)+"";return t.substring(0,t.indexOf(".")).replace(/\B(?=(?:\d{3})+$)/g,",")+t.substring(t.length,t.indexOf("."))},formatBalance:function(e){var t=e.toFixed(2)+"";return t.substring(0,t.indexOf(".")).replace(/\B(?=(?:\d{3})+$)/g,",")+t.substring(t.length,t.indexOf("."))},formatBalance2:function(e){var t=e.toFixed(4)+"";return t.substring(0,t.indexOf(".")).replace(/\B(?=(?:\d{3})+$)/g,",")+t.substring(t.length,t.indexOf("."))},subAddress:function(e){return e.slice(0,6)+"..."+e.slice(-4)}}},A=(n("IaSl"),n("KHd+")),D=Object(A.a)(T,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",["56"!=e.netID&&e.metaMaskAddress?n("div",{staticClass:"top-notification"},[n("a",{attrs:{href:"https://docs.binance.org/smart-chain/wallet/metamask.html",target:"_blank"}},[e._v(e._s(e.$t("error.errorNetwork")))])]):e._e(),e._v(" "),n("el-header",[n("div",{staticClass:"header"},[n("div",{staticClass:"left"},[n("a",{staticClass:"logo"},[n("div",{staticClass:"peach-logo"},[e._v("🍑 ")]),e._v(" "),n("span",{staticClass:"peach-swap"},[e._v("PeachSwap")])])]),e._v(" "),n("div",{staticClass:"center"}),e._v(" "),n("div",{staticClass:"right"},[n("el-dropdown",[n("el-button",{attrs:{type:"plain"}},["en-US"==e.lang.locale?n("span",[e._v("English")]):e._e(),e._v(" "),"zh-CN"==e.lang.locale?n("span",[e._v("简体中文")]):e._e(),e._v(" "),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{nativeOn:{click:function(t){e.toggleLang("en-US")}}},[e._v("English")]),e._v(" "),n("el-dropdown-item",{nativeOn:{click:function(t){e.toggleLang("zh-CN")}}},[e._v("简体中文")])],1)],1),e._v(" "),e.metaMaskAddress?e._e():n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.login()}}},[e._v(e._s(e.$t("header.unlockWallet")))]),e._v(" "),e.metaMaskAddress?n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.login()}}},[e._v(e._s(e.subAddress(e.metaMaskAddress)))]):e._e()],1)])]),e._v(" "),n("el-main",{staticClass:"main-content"},[n("br"),e._v(" "),n("div",{staticClass:"top-warning"},[n("div",{staticStyle:{"text-align":"center","margin-bottom":"30px","font-size":"25px"}},[e._v("⚠️"+e._s(e.$t("warning.warning")))]),e._v(" "),n("div",[e._v("1. "),n("a",{attrs:{href:"https://docs.binance.org/smart-chain/wallet/metamask.html",target:"_blank"}},[n("span",{staticStyle:{color:"#E88B55"}},[e._v("MetaMask ")])]),e._v(e._s(e.$t("warning.warn1")))]),e._v(" "),n("div",[e._v("2. "+e._s(e.$t("warning.warn2")))]),e._v(" "),n("div",[e._v("3. "+e._s(e.$t("warning.warn3")))])]),e._v(" "),n("div",{staticClass:"top-cards"},[n("div",{staticClass:"card"},[n("div",{staticClass:"top"},[e._v(e._s(e.$t("content.totalLocked"))+"(USD)")]),e._v(" "),n("div",{staticClass:"bottom"},[e._v("💰 $"+e._s(e.formatUSDValue(e.totalLockedValue)))])]),e._v(" "),n("div",{staticClass:"card"},[n("div",{staticClass:"top"},[e._v(e._s(e.$t("content.yourBalance")))]),e._v(" "),n("div",{staticClass:"bottom"},[e._v("🍑 "+e._s(e.formatBalance(e.myPeachBalance)))])]),e._v(" "),n("div",{staticClass:"card"},[n("div",{staticClass:"top"},[e._v(e._s(e.$t("content.totalBalance")))]),e._v(" "),n("div",{staticClass:"bottom"},[e._v("🍑 "+e._s(e.formatBalance(e.peachTotalSupply)))])])]),e._v(" "),e.isAdmin?n("div",{staticClass:"controller"},[n("el-button",{attrs:{type:"danger",plain:""},on:{click:function(t){e.test()}}},[e._v("Test")]),e._v(" "),n("el-button",{attrs:{type:"danger",plain:""},on:{click:function(t){e.peachAddMinter()}}},[e._v("AddMinter")]),e._v(" "),n("el-button",{attrs:{type:"danger",plain:""},on:{click:function(t){e.deploywBNBPool()}}},[e._v("部署WBNB池")]),e._v(" "),n("el-button",{attrs:{type:"danger",plain:""},on:{click:function(t){e.deployBusdPool()}}},[e._v("部署USDT池")]),e._v(" "),n("el-button",{attrs:{type:"danger",plain:""},on:{click:function(t){e.deployPeachPool()}}},[e._v("部署Peach池")])],1):e._e(),e._v(" "),e.isAdmin?n("div",{staticClass:"controller"},[e._v("\n      Token分配数量: "),n("el-input",{attrs:{placeholder:"amount"},model:{value:e.tokenAmountInput,callback:function(t){e.tokenAmountInput=t},expression:"tokenAmountInput"}})],1):e._e(),e._v(" "),n("div",{staticClass:"farming-pool"},[e._v(e._s(e.$t("pool.farmingPool")))]),e._v(" "),n("div",{staticClass:"pool"},[n("el-collapse",{attrs:{accordion:""}},[n("el-collapse-item",[n("template",{slot:"title"},[n("div",{staticClass:"pool-header"},[n("div",{staticClass:"coin"},[n("svg-icon",{attrs:{"icon-class":"tether"}}),e._v(" "),n("span",[e._v("USDT-BEP20")])],1),e._v(" "),n("div",{staticClass:"status"},[n("div",{staticClass:"top"},[e._v(e._s(e.$t("pool.farming")))]),e._v(" "),n("div",{staticClass:"bottom"},[e._v(e._s(e.formatBalance(e.farmingBUSD)))])])])]),e._v(" "),n("div",{staticClass:"pool-content"},[n("div",{},[n("div",{staticClass:"my-balance"},[e._v(e._s(e.$t("pool.availableBalance"))+": "+e._s(e.formatBalance(e.availableBUSD))+" USDT")]),e._v(" "),n("el-input",{attrs:{placeholder:"amount"},model:{value:e.busdInput,callback:function(t){e.busdInput=t},expression:"busdInput"}})],1),e._v(" "),n("div",{staticClass:"hf-button"},[n("div",{staticClass:"harvest"},[n("div",{staticClass:"earned"},[n("div",{staticClass:"balance"},[e._v(e._s(e.formatBalance2(e.busdEarned)))]),e._v(" "),n("div",{staticClass:"info"},[e._v(e._s(e.$t("pool.peachEarned")))])]),e._v(" "),e.isUSDTPoolDeployed?e._e():n("el-button",{attrs:{type:"success",disabled:""}},[e._v(e._s(e.$t("pool.harvest")))]),e._v(" "),e.isUSDTPoolDeployed?n("el-button",{attrs:{type:"success"},on:{click:function(t){e.getReward("busd")}}},[e._v(e._s(e.$t("pool.harvest")))]):e._e()],1),e._v(" "),n("div",{staticClass:"farm"},[n("div",{staticClass:"earned"},[n("div",{staticClass:"balance"},[e._v(e._s(e.formatBalance2(e.busdStaked)))]),e._v(" "),n("div",{staticClass:"info"},[e._v(e._s(e.$t("pool.busdStaked")))])]),e._v(" "),e.isUSDTPoolDeployed?e._e():n("el-button",{attrs:{type:"danger",disabled:""},on:{click:function(t){e.approveAndStake("busd")}}},[e._v(e._s(e.$t("pool.farm")))]),e._v(" "),e.isUSDTPoolDeployed?n("el-button",{attrs:{type:"danger"},on:{click:function(t){e.approveAndStake("busd")}}},[e._v(e._s(e.$t("pool.farm")))]):e._e()],1)]),e._v(" "),n("div",{staticClass:"exit"},[e.isUSDTPoolDeployed?n("el-button",{attrs:{type:"danger",plain:""},on:{click:function(t){e.exit("busd")}}},[e._v(e._s(e.$t("pool.harvestAndExit")))]):e._e(),e._v(" "),e.isUSDTPoolDeployed?e._e():n("el-button",{attrs:{type:"danger",plain:"",disabled:""}},[e._v(e._s(e.$t("pool.harvestAndExit")))])],1)])],2)],1),e._v(" "),n("br"),n("br"),e._v(" "),n("el-collapse",{attrs:{accordion:""}},[n("el-collapse-item",[n("template",{slot:"title"},[n("div",{staticClass:"pool-header"},[n("div",{staticClass:"coin"},[n("svg-icon",{attrs:{"icon-class":"bnb"}}),e._v(" "),n("span",[e._v("WBNB")])],1),e._v(" "),n("div",{staticClass:"status"},[n("div",{staticClass:"top"},[e._v(e._s(e.$t("pool.farming")))]),e._v(" "),n("div",{staticClass:"bottom"},[e._v(e._s(e.formatBalance(e.farmingWBNB)))])])])]),e._v(" "),n("div",{staticClass:"pool-content"},[n("div",{},[n("div",{staticClass:"my-balance"},[e._v(e._s(e.$t("pool.availableBalance"))+": "+e._s(e.formatBalance(e.availableWBNB))+" WBNB")]),e._v(" "),n("el-input",{attrs:{placeholder:"amount"},model:{value:e.wbnbInput,callback:function(t){e.wbnbInput=t},expression:"wbnbInput"}})],1),e._v(" "),n("div",{staticClass:"hf-button"},[n("div",{staticClass:"harvest"},[n("div",{staticClass:"earned"},[n("div",{staticClass:"balance"},[e._v(e._s(e.formatBalance2(e.wbnbEarned)))]),e._v(" "),n("div",{staticClass:"info"},[e._v(e._s(e.$t("pool.peachEarned")))])]),e._v(" "),e.isWBNBPoolDeployed?e._e():n("el-button",{attrs:{type:"success",disabled:""}},[e._v(e._s(e.$t("pool.farm")))]),e._v(" "),e.isWBNBPoolDeployed?n("el-button",{attrs:{type:"success"},on:{click:function(t){e.getReward("wbnb")}}},[e._v(e._s(e.$t("pool.harvest")))]):e._e()],1),e._v(" "),n("div",{staticClass:"farm"},[n("div",{staticClass:"earned"},[n("div",{staticClass:"balance"},[e._v(e._s(e.formatBalance2(e.wbnbStaked)))]),e._v(" "),n("div",{staticClass:"info"},[e._v(e._s(e.$t("pool.wBNBStaked")))])]),e._v(" "),e.isWBNBPoolDeployed?e._e():n("el-button",{attrs:{type:"danger",disabled:""}},[e._v(e._s(e.$t("pool.farm")))]),e._v(" "),e.isWBNBPoolDeployed?n("el-button",{attrs:{type:"danger"},on:{click:function(t){e.approveAndStake("wbnb")}}},[e._v(e._s(e.$t("pool.farm")))]):e._e()],1)]),e._v(" "),n("div",{staticClass:"exit"},[e.isWBNBPoolDeployed?e._e():n("el-button",{attrs:{type:"danger",plain:"",disabled:""}},[e._v(e._s(e.$t("pool.harvestAndExit")))]),e._v(" "),e.isWBNBPoolDeployed?n("el-button",{attrs:{type:"danger",plain:""},on:{click:function(t){e.exit("wbnb")}}},[e._v(e._s(e.$t("pool.harvestAndExit")))]):e._e()],1)])],2)],1),e._v(" "),n("br"),n("br"),e._v(" "),n("el-collapse",{attrs:{accordion:""}},[n("el-collapse-item",[n("template",{slot:"title"},[n("div",{staticClass:"pool-header"},[n("div",{staticClass:"coin"},[n("div",{staticClass:"peach"},[e._v("🍑")]),e._v(" "),n("span",[e._v("PEACH")])]),e._v(" "),n("div",{staticClass:"status"},[n("div",{staticClass:"top"},[e._v(e._s(e.$t("pool.farming")))]),e._v(" "),n("div",{staticClass:"bottom"},[e._v(e._s(e.formatBalance(e.farmingPeach)))])])])]),e._v(" "),n("div",{staticClass:"pool-content"},[n("div",{},[n("div",{staticClass:"my-balance"},[e._v(e._s(e.$t("pool.availableBalance"))+": "+e._s(e.formatBalance(e.availablePeach))+" PEACH")]),e._v(" "),n("el-input",{attrs:{placeholder:"amount"},model:{value:e.peachInput,callback:function(t){e.peachInput=t},expression:"peachInput"}})],1),e._v(" "),n("div",{staticClass:"hf-button"},[n("div",{staticClass:"harvest"},[n("div",{staticClass:"earned"},[n("div",{staticClass:"balance"},[e._v(e._s(e.formatBalance2(e.peachEarned)))]),e._v(" "),n("div",{staticClass:"info"},[e._v(e._s(e.$t("pool.peachEarned")))])]),e._v(" "),e.isPeachDeployed?e._e():n("el-button",{attrs:{type:"success",disabled:""}},[e._v(e._s(e.$t("pool.harvest")))]),e._v(" "),e.isPeachDeployed?n("el-button",{attrs:{type:"success"},on:{click:function(t){e.getReward("peach")}}},[e._v(e._s(e.$t("pool.harvest")))]):e._e()],1),e._v(" "),n("div",{staticClass:"farm"},[n("div",{staticClass:"earned"},[n("div",{staticClass:"balance"},[e._v(e._s(e.formatBalance2(e.peachStaked)))]),e._v(" "),n("div",{staticClass:"info"},[e._v(e._s(e.$t("pool.peachStaked")))])]),e._v(" "),e.isPeachDeployed?e._e():n("el-button",{attrs:{type:"danger",disabled:""}},[e._v(e._s(e.$t("pool.farm")))]),e._v(" "),e.isPeachDeployed?n("el-button",{attrs:{type:"danger"},on:{click:function(t){e.approveAndStake("peach")}}},[e._v(e._s(e.$t("pool.farm")))]):e._e()],1)]),e._v(" "),n("div",{staticClass:"exit"},[e.isPeachDeployed?e._e():n("el-button",{attrs:{type:"danger",plain:"",disabled:""}},[e._v(e._s(e.$t("pool.harvestAndExit")))]),e._v(" "),e.isPeachDeployed?n("el-button",{attrs:{type:"danger",plain:""},on:{click:function(t){e.exit("peach")}}},[e._v(e._s(e.$t("pool.harvestAndExit")))]):e._e()],1)])],2)],1)],1),e._v(" "),n("el-dialog",{attrs:{title:e.connectWallet,"show-close":!1,visible:e.centerDialogVisible,width:"450px",center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[n("div",{staticClass:"wallet-provider"},[n("div",[n("svg-icon",{attrs:{"icon-class":"metamask-fox"}})],1),e._v(" "),e.metaMaskBalance>0?n("div",{staticClass:"metamask"},[e._v(e._s(e.formatBalance(e.metaMaskBalance))+" "),n("span",[e._v("BNB")])]):n("div",{staticClass:"metamask"},[e._v("MetaMask")]),e._v(" "),n("div",[n("el-button",{on:{click:function(t){e.loadWeb3()}}},[e._v(e._s(e.$t("header.connect")))])],1)]),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.centerDialogVisible=!1}}},[e._v(e._s(e.$t("header.cancel")))])],1)]),e._v(" "),n("el-dialog",{attrs:{title:e.myAccount,"show-close":!1,visible:e.centerBalanceDialogVisible,width:"450px",center:""},on:{"update:visible":function(t){e.centerBalanceDialogVisible=t}}},[n("div",{staticClass:"wallet-provider2"},[n("div",[n("svg-icon",{attrs:{"icon-class":"metamask-fox"}})],1),e._v(" "),n("div",{staticClass:"metamask"},[e._v(e._s(e.formatBalance(e.metaMaskBalance))+" "),n("span",[e._v("BNB")])]),e._v(" "),n("div",[n("el-button",{on:{click:function(t){e.centerBalanceDialogVisible=!1}}},[e._v("Connect")])],1)]),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.centerBalanceDialogVisible=!1}}},[e._v(e._s(e.$t("header.cancel")))])],1)])],1)],1)},[],!1,null,"79cc1d1c",null);D.options.__file="home.vue";t.default=D.exports}}]);