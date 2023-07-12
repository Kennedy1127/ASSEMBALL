<template>
    <main class="login">
        <div class="login_pic">
            <div class="login_pic_title">
                Welcome Back !
            </div>
            <div class="login_pic_text">
                Are you ready <br>
                to unleash the power of baseball?
            </div>

            <button class="login_btn">
                <div class="login_btn_text">登入</div>
                <img src="~@/assets/images/icons/arrow-right.png" alt="">
            </button>

        </div>
        <div class="login_text">
            <div class="login_text_slo">
                Hello , Friend !
            </div>
            <div class="login_title">
                會員註冊/Sign Up
            </div>
            <div class="login_typing_name">
                <span><input type="text" name="" id="" placeholder="姓/Last Name"></span>

                <input type="text" name="" id="" placeholder="名/First Name">
            </div>

            <input type="text" name="" id="" placeholder="使用者名稱/User Name">

            <input type="email" name="" id="" placeholder="電子郵件/Email">

            <input type="password" name="" id="" placeholder="密碼/Password">

            <input type="password" name="" id="" placeholder="密碼/Confirm Password">

            <div class="login_typing_verify">
                <input type="text" name="" id="" placeholder="驗證碼輸入">
                <div class="verify_code">
                    HI2k4q0PS
                </div>
                <div class="verify_pic">
                    <img src="" alt="">
                </div>
            </div>

            <button class="signin_btn">
                註冊
            </button>
            <span>密碼輸入錯誤</span>

        </div>





    </main>
</template>
  
<script></script>
  
<style scoped lang="scss">
* {
    font-size: 16px;

}



.login {
    display: flex;
    width: 60%;
    margin: auto;


    &_pic {
        display: flex;
        flex-direction: column;
        width: 50%;
        justify-content: center;
        align-items: center;
        background-image: url(~@/assets/images/login/logInbg.jpg);
        background-size: cover;
        padding: 80px 10px;


        &_title {
            font-size: 2.5rem;
            color: var(--pale-white);
            text-align: center;
        }

        &_text {
            font-size: 1.25rem;
            color: var(--pale-white);
            text-align: center;
            letter-spacing: 24%;
        }

        .login_btn {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
            width: 100px;
            border-radius: 35px;
            padding: 8px 4px;
            margin-top: 150px;
            color: var(--primary-blue);
            font-size: 1.25rem;
            font-family: 'Noto Sans TC';
            // font-weight: medium;
        }
    }

    &_text {
        width: 50%;
        padding: 80px 30px;

        &_slo {
            text-align: center;
            font-weight: 700;
            font-size: 2.5rem;
            color: var(--primary-blue);
            font-family: 'Montserrat';
            letter-spacing: 0.6px;
        }

        &_title {
            font-family: Noto Sans TC;
            font-size: 24px;
            letter-spacing: 0.24px;
        }

        span {
            border-bottom: solid 1px;
            color: var(--secondary-gray-1);
        }

        ::placeholder {
            color: var(--secondary-gray-3);
            font-family: 'Noto Sans TC';
            font-size: 1rem;
            font-weight: 400;
            letter-spacing: 0.16px;
        }

        input {
            // border-bottom: solid black 1px;
            border: 0;
            outline: none;
        }


    }

}

// footer {
//     background-color: var(--primary-blue);
//     width: 100%;
//     height: 400px; // 測試高度

//     &>div {
//         // 測試用
//         border: 5px solid #fa0;
//         height: 100%;
//     }
// }
</style>
  