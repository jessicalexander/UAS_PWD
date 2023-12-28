$(document).ready(function(){
    const gameid= $(".gameid")
    const code = $(".code")
    const submit= $(".submit")

    submit.click((e) => {
        if(gameid.val()===""){
            alert("Please insert a correct #game id")
        }
        else if(code.val()===""){
            alert("Please insert a coupon code!")
        }
        else if(code.val()!="WELCOMEGIFT"){
            alert("Please insert a code that works! \nMake sure the code is not expired")
        }
        else(alert("Code succesfully redeemed!\nRestart your game and check your in-game mail"))
    });
});
const button = document.querySelector('button')
const mobile_menu = document.querySelector('.mobile-nav')
const before = document.querySelector('.before')
const after = document.querySelector('.after')
const socmed = document.querySelector('.socmed')

button.addEventListener('click', function(){
    mobile_menu.classList.toggle('is-active');
    before.classList.toggle('is-active');
    after.classList.toggle('is-active');
    socmed.classList.toggle('is-active');
})

// language
const language = document.querySelector('#language')
const bahasa = document.querySelector('#bahasa')
const mand = document.querySelector('#mand')
const english = document.querySelector('#eng')

const game_id = document.querySelector('#game_id')
const game_label = document.querySelector('#game_label')
const kupon = document.querySelector('#kupon')
const kupon_label = document.querySelector('#kupon_label')
const desc = document.querySelector('#desc')
const claim = document.querySelector('#claim')

language.addEventListener('change', function(){
    if (bahasa.selected){
        game_id.textContent = "Id Game";
        game_label.textContent = "Masukan #game_id disini";
        kupon.textContent = "Kode Kupon";
        kupon_label.textContent = "Masukan Kode Kupon disini";
        desc.innerHTML = "*kode kupon hanya bisa ditukar sekali<br\>*Jika hadiah belum diterima, mohon ulangi game dan cek kembali kotak pesan anda"
        claim.textContent = "klaim hadiah"
    }
    else if (mand.selected){
        game_id.textContent = "身份游戏";
        game_label.textContent = "在此输入您的#身份_游戏";
        kupon.textContent = "优惠券代码";
        kupon_label.textContent = "在此输入优惠券代码";
        desc.innerHTML = "*优惠券代码只能兑换一次<br\>*如果尚未收到奖品,请重新启动游戏并再次查看您的消息框"
        claim.textContent = "领取奖品"
    }
    else if (english.selected){
        game_id.textContent = "Game Id";
        game_label.textContent = "Enter your #game_id here";
        kupon.textContent = "Coupon Code";
        kupon_label.textContent = "Enter a coupon Code here";
        desc.innerHTML = "*Coupon codes can only be redeemed once per account<br\>*If you have not received the gift, please restart your game and check your mailbox"
        claim.textContent = "Claim Reward"
    }
})
window.addEventListener('load',()=>{
    this.document.querySelector('.loader').classList.add("loader--hidden");
})