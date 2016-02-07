"use strict"
app.config(function ($translateProvider) {
    $translateProvider.translations('th', {
        TITLE: {
            NAME: 'กาละแมอันดับ 1 อำเภอศีขรภูมิ',
            DESCRIPTION: ''
        },
        HEAD: {
            SIGNIN: 'เข้าสู่ระบบ',
            CART: 'ตะกร้า',
            WELCOME: 'ยินดีต้อนรับ',
            LOCALE : {
                TH : 'ภาษาไทย',
                US : 'English (US)',
                JP : '日本語',
                CN : '简体中文'
            },
            CURRENCY : {
                THB : 'บาท',
                USD : 'ดอลลาร์สหรัฐอเมริกา',
                GBP : 'ปอนด์สเตอร์ลิง',
                EUR : 'ยูโร',
                JPY : 'เยนญี่ปุ่น',
                CNY : 'หยวน',
            },
            SIGNIN: 'เข้าสู่ระบบ',
            SIGNOUT: 'ออกจากระบบ',
            MODAL_SIGNIN: {
                //login
                HEAD: 'เข้าสู่ระบบ/ลงทะเบียน',
                LABEL_USERNAME: 'รหัสผู้ใช้',
                PLACEHOLDER_USERNAME: 'อีเมล',
                LABEL_PASSWORD: 'รหัสผ่าน',
                PLACEHOLDER_PASSWORD: 'รหัสผ่าน',
                FORGET_PASSWORD : 'ลืมรหัสผ่าน',
                REMEMBER_ME : 'จดจำฉันไว้',
                REMEMBER_ME_REASON : '(ถ้านี่เป็นคอมพิวเตอร์ส่วนตัว)',
                TAB_SIGNUP: 'ลงทะเบียน',
                BUTTON_SIGNIN: 'เข้าสู่ระบบ',
                FACEBOOK_SIGNIN: 'เข้าสู่ระบบด้วยบัญชี Facebook',
                TWITTER_SIGNIN: 'เข้าสู่ระบบด้วยบัญชี Twitter',
                LINKEDIN_SIGNIN: 'เข้าสู่ระบบด้วยบัญชี Linkedin',
                GOOGLE_PLUS_SIGNIN: 'เข้าสู่ระบบด้วยบัญชี Google+',
                INSTAGRAM_SIGNIN: 'เข้าสู่ระบบด้วยบัญชี Instagram',
                GITHUB_SIGNIN: 'เข้าสู่ระบบด้วยบัญชี Github',
                DROPBOX_SIGNIN: 'เข้าสู่ระบบด้วยบัญชี Dropbox',
                FOURSQUARE_SIGNIN: 'เข้าสู่ระบบด้วยบัญชี Foursquare',
                SOUNDCLOUD_SIGNIN: 'เข้าสู่ระบบด้วยบัญชี Soundcloud',
                //sign up
                FIRST_NAME : "ชื่อ",
                LAST_NAME : "นามสกุล",
                EMAIL : "อีเมล",
                USERNAME : "ชื่อผู้ใช้",
                PASSWORD : "รหัสผ่าน",
                STRENGTH : "ความซับซ้อน",
                RECAPTCHA : "ตรวจสอบว่าท่านไม่ใช่หุ่นยนต์",
                BUTTON_SIGNUP : "ลงทะเบียน",
                TERM_SERVICE_LABEL : 'ฉันยอมรับ',
                TERM_SERVICE : 'ข้อตกลง'
            },
            MODAL_CART: {
                EMPTY_CART: 'ตะกร้าว่าง',
                PRODUCT_CART: 'สินค้าในตะกร้า',
                SEQ: 'ลำดับ',
                ITEM_NAME: 'รายการ',
                QTY: 'จำนวน',
                UOM: 'หน่วย',
                PRICE: 'ราคา',
                DISCOUNT: 'ส่วนลด',
                AMOUNT: 'รวมเงิน',
                REMOVE: 'ลบ',
                SUMAMT: 'ยอดเงิน',
                SUMDISCAMT: 'รวมส่วนลด',
                SUMVATAMT: 'ภาษี',
                NETAMT: 'ยอดสุทธิ',
                SHOP_BUTTON: 'ดูสินค้า',
                SAVE_BUTTON: 'บันทึกตะกร้า',
                CLEAR_BUTTON: 'ล้างตะกร้า',
                CHECKOUT_BUTTON: 'ดำเนินการต่อ',
            },
            MODAL_FORGET_PASSWORD : {
                TITLE : 'ลืมรหัสผ่าน ?',
                TEXT: 'ท่านสามารถเปลี่ยนรหัสผ่านโดยกรอกอีเมล',
                EMAIL_PHD : 'อีเมล',
                SEND_EMAIL_BUTTON : 'ส่งอีเมล'
            },
            MODAL_INPUT_PASSWORD : {
                TITLE : 'เปลี่ยนรหัสผ่าน ?',
                TEXT: '',
                PASSWORD : 'รหัสผ่าน',
                CONFIRM_PASSWORD : 'ยืนยันรหัสผ่าน',
                CHANGE_PASSWORD_BUTTON : 'เปลี่ยนรหัสผ่าน'
            },
        },
        BODY: {
           SECTION : {
            PRODUCT : {
                PRICE : 'ราคา',
                QUANTITY : 'จำนวน',
                BUY : 'ซื้อ'
            }
           }
        },
        FOOTER : {
           
        }
    });
    $translateProvider.translations('us', {
        TITLE: {
            NAME: 'Koh Zhun Heng - Center of Motorcycle Parts Tyre and Lubricant',
            DESCRIPTION: ''
        },
        HEAD: {
            SIGNIN: 'Log in',
            CART: 'Cart',
            WELCOME: 'Welcome',
            LOCALE : {
                TH : 'ภาษาไทย',
                US : 'English (US)',
                JP : '日本語',
                CN : '简体中文'
            },
            CURRENCY : {
                THB : 'Thai Baht',
                USD : 'U.S. Dollar',
                GBP : 'Pound Sterling',
                EUR : 'Euro',
                JPY : 'Japanese Yen',
                CNY : 'Chinese Yuan',
            }
        },
        BODY: {
           SECTION : {
            PRODUCT : {
                PRICE : 'Price',
                QUANTITY : 'Qty.',
                BUY : 'Buy'
            }
           }
        },
        FOOTER : {
            
        }
    });
    $translateProvider.translations('jp', {
        TITLE: {
            NAME: 'キャラメル  - Center of Motorcycle Parts Tyre and Lubricant',
            DESCRIPTION: ''
        },
       
        HEAD: {
            SIGNIN: 'ログイン',
            CART: 'カート',
            WELCOME: 'ようこそ',
            LOCALE : {
                TH : 'ภาษาไทย',
                US : 'English (US)',
                JP : '日本語',
                CN : '简体中文'
            },
            CURRENCY : {
                THB : 'タイ・バーツ',
                USD : 'USドル',
                GBP : 'イギリス・ポンド',
                EUR : 'ユーロ',
                JPY : '円',
                CNY : '人民元',
            }
        },
        BODY: {
           SECTION : {
            PRODUCT : {
                PRICE : '価格',
                QUANTITY : '量',
                BUY : '購入'
            }
           }
        },
        FOOTER : {
            
        }
    });
    $translateProvider.translations('cn', {
        TITLE: {
            NAME: '興 順 許 - 實施方案 摩托车配件 橡膠 和 润滑剂',
            DESCRIPTION: ''
        },
        HEAD: {
            SIGNIN: '登錄',
            CART: '大車',
            WELCOME: '歡迎',
            LOCALE : {
                TH : 'ภาษาไทย',
                US : 'English (US)',
                JP : '日本語',
                CN : '简体中文'
            },
            CURRENCY : {
                THB : '泰铢',
                USD : '美元',
                GBP : '欧元',
                EUR : '英镑',
                JPY : '日元',
                CNY : '人民币',
            }
        },
        BODY: {
           SECTION : {
            PRODUCT : {
                PRICE : '價格',
                QUANTITY : '數量',
                BUY : '購買'
            }
           }
        },
        FOOTER : {
          
        }
    });
    $translateProvider.preferredLanguage('th');
});