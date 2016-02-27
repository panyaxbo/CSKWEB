"use strict"
app.config(function ($translateProvider) {
    $translateProvider.translations('th', {
        TITLE: {
            NAME: 'กาละแมอันดับ 1 อำเภอศีขรภูมิ',
            DESCRIPTION: ''
        },
        WEIGHT_UOM: 'กรัม',
        HEAD: {
            MENU : {
                PRODUCT : 'กาละแม หอมหวาน',
                PURCHASE : 'วิธีการสั่งซื้อ',
                DELIVERY : 'การจัดส่ง',
                ABOUT : 'เกี่ยวกับเรา',
                CONTACT : 'ติดต่อเรา',
            },
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
                SELECT_POST_TYPE: 'เลือกการจัดส่ง',
                POST_TYPE: {
                    NORMAL: 'ไปรษณีย์ธรรมดา',
                    EMS: 'ไปรษณีย์ด่วนพิเศษ'
                },
                SUM_WEIGHT_AMT : 'รวมน้ำหนัก'
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
            MODAL_SHIPMENT: {
                HEAD : "การขนส่ง",
                BILLING : {
                    STEP : 'ที่อยู่จัดส่งสินค้า',
                    BILL_STEP : 'ที่อยู่จัดส่งสินค้า',
                    BILL_NAME: 'ชื่อ',
                    BILL_EMAIL: 'อีเมล',
                    BILL_ADDRESS: 'ที่อยู่',
                    BILL_PROVINCE: 'จังหวัด',
                    BILL_SELECT_PROVINCE: '--- เลือก จังหวัด ---',
                    BILL_DISTRICT: 'เขต/อำเภอ :',
                    BILL_SELECT_DISTRICT: '--- เลือก เขต/อำเภอ ---',
                    BILL_SUBDISTRICT: 'แขวง/ตำบล :',
                    BILL_SELECT_SUBDISTRICT: '--- เลือก แขวง/ตำบล ---',
                    BILL_ZIPCODE: 'รหัสไปรษณีย์ :',
                    BILL_SELECT_ZIPCODE: '--- เลือก ไปรษณีย์ ---',
                    TEL_NO: 'โทรศัพท์',
                    MOBILE_NO: 'มือถือ',

                    SAME_ADDRESS : "ที่อยู่เดียวกับที่จัดส่ง",

                    RO_STEP : 'ที่อยู่ที่แสดงในใบเสร็จ ',
                    RO_NAME: 'ชื่อ ',
                    RO_ADDRESS: 'ที่อยู่',
                    RO_PROVINCE: 'จังหวัด',
                    RO_SELECT_PROVINCE: '--- เลือก จังหวัด ---',
                    RO_DISTRICT: 'เขต/อำเภอ',
                    RO_SELECT_DISTRICT: '--- เลือก เขต/อำเภอ ---',
                    RO_SUBDISTRICT: 'แขวง/ตำบล',
                    RO_SELECT_SUBDISTRICT: '--- เลือก แขวง/ตำบล ---',
                    RO_ZIPCODE: 'รหัสไปรษณีย์',
                    RO_SELECT_ZIPCODE: '--- เลือก ไปรษณีย์ ---',

                    BUTTON_NEXT: 'ขั้นตอนต่อไป'
                },
                PAYMENT: {
                    STEP : 'การจ่ายเงิน',
                    PAYMENT_TYPE: 'ประเภทของการชำระเงิน',
                    SELECT_PAYMENT_TYPE: '--- เลือก ประเภทของการชำระเงิน ---',
                    TRANSFER: 'โอนเงิน',
                    BBL : {
                        NAME : 'ธ. กรุงเทพ',
                        ACCOUNT_NO : '-',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : 'ออมทรัพย์',
                        ACCOUNT_BRANCH : 'ศีขรภูมิ'
                    },
                    KBANK : {
                        NAME : 'ธ. กสิกรไทย',
                        ACCOUNT_NO : '003-1-71056-1',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : 'ออมทรัพย์',
                        ACCOUNT_BRANCH : 'ศีขรภูมิ'
                    },
                    KTB : {
                        NAME : 'ธ. กรุงไทย',
                        ACCOUNT_NO : '331-0-38978-2',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : 'ออมทรัพย์',
                        ACCOUNT_BRANCH : 'ศีขรภูมิ'
                    },
                    SCB : {
                        NAME : 'ธ. ไทยพาณิชย์',
                        ACCOUNT_NO : '-',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : 'ออมทรัพย์',
                        ACCOUNT_BRANCH : 'เมืองสุรินทร์'
                    },
                    KCC : {
                        NAME : 'ธ. กรุงศรี',
                        ACCOUNT_NO : '-',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : 'ออมทรัพย์',
                        ACCOUNT_BRANCH : 'เมืองสุรินทร์'
                    },
                    TMB : {
                        NAME : 'ธ. ทีเอ็มบี',
                        ACCOUNT_NO : '-',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : 'ออมทรัพย์',
                        ACCOUNT_BRANCH : 'เมืองสุรินทร์'
                    },
                    UOB : {
                        NAME : 'ธ. ยูโอบี',
                        ACCOUNT_NO : '-',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : 'ออมทรัพย์',
                        ACCOUNT_BRANCH : 'เมืองสุรินทร์'
                    },
                    TNC : {
                        NAME : 'ธ. ธนชาต',
                        ACCOUNT_NO : '-',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : 'ออมทรัพย์',
                        ACCOUNT_BRANCH : 'เมืองสุรินทร์'
                    },
                    PAYPAL : 'เพย์พอล',
                    CREDIT: 'เครดิตการ์ด',
                    BUTTON_NEXT: 'ขั้นตอนต่อไป'
                },
                FINISH : {
                    STEP : 'สิ้นสุด',
                    BUTTON : 'กดเพื่อสิ้นสุด'
                }
            }
        },
        BODY: {
           SECTION : {
            PRODUCT : {
                PRICE : 'ราคา',
                QUANTITY : 'จำนวน',
                BUY : 'ซื้อ',
                WEIGHT: 'น้ำหนัก',
                WEIGHT_MEASURE: 'กรัม'
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
        WEIGHT_UOM: 'gram',
        HEAD: {
            MENU : {
                PRODUCT : 'Caramel',
                PURCHASE : 'Purchase',
                DELIVERY : 'Delivery',
                ABOUT : 'About Us',
                CONTACT : 'Contact Us',
            },
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
        WEIGHT_UOM: 'グラム',
        HEAD: {
            MENU : {
                PRODUCT : 'キャラメル',
                PURCHASE : '購入',
                DELIVERY : '配信',
                ABOUT : '約',
                CONTACT : '接触',
            },
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
        WEIGHT_UOM: '克',
        HEAD: {
            MENU : {
                PRODUCT : 'キャラメル',
                PURCHASE : '購入',
                DELIVERY : '配信',
                ABOUT : '約',
                CONTACT : '接触',
            },
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