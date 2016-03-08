"use strict"
app.config(function ($translateProvider) {
    $translateProvider.translations('th', {
        TITLE: {
            NAME: 'กาละแมอันดับ 1 อำเภอศีขรภูมิ',
            DESCRIPTION: ''
        },
        WEIGHT: 'กรัม',
        WEIGHT_UOM: 'กรัม',
        HEAD: {
            MENU : {
                PRODUCT : 'กาละแม หอมหวาน',
                PURCHASE : 'วิธีการสั่งซื้อ',
                DELIVERY : 'การจัดส่ง',
                ABOUT : 'เกี่ยวกับเรา',
                CONTACT : 'ติดต่อเรา',
                CUSTOMER : 'การสั่งซื้อลูกค้า',
                HISTORY : 'ประวัติการสั่งซื้อ',
                SETTING : 'ตั้งค่าทั่วไป',
                ACCOUNT : 'ตั้งค่าบัญชี',
                LOGOUT : 'ออกจากระบบ',
                REPORT : 'รายงาน'
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
                        ACCOUNT_NO : '406-0-74796-3',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : 'ออมทรัพย์',
                        ACCOUNT_BRANCH : 'สาขา ศีขรภูมิ'
                    },
                    KBANK : {
                        NAME : 'ธ. กสิกรไทย',
                        ACCOUNT_NO : '003-1-71056-1',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : 'ออมทรัพย์',
                        ACCOUNT_BRANCH : 'สำนักงานย่อย ศีขรภูมิ'
                    },
                    KTB : {
                        NAME : 'ธ. กรุงไทย',
                        ACCOUNT_NO : '331-0-38978-2',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : 'ออมทรัพย์',
                        ACCOUNT_BRANCH : 'สาขา ศีขรภูมิ'
                    },
                    SCB : {
                        NAME : 'ธ. ไทยพาณิชย์',
                        ACCOUNT_NO : '406-749912-1',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : 'ออมทรัพย์',
                        ACCOUNT_BRANCH : 'โรบินสัน สุรินทร์'
                    },
                    KCC : {
                        NAME : 'ธ. กรุงศรี',
                        ACCOUNT_NO : '721-1-02954-1',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : 'ออมทรัพย์',
                        ACCOUNT_BRANCH : 'โรบินสัน สุรินทร์'
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
                    BUTTON : 'กดเพื่อสิ้นสุด',
                    THANK_MESSAGE: 'ขอบคุณสำหรับคำสั่งซื้อของท่าน ☺'
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
                WEIGHT_GRAM: 'กรัม',
                WEIGHT_KILOGRAM: 'กิโลกรัม'
            }
           }
        },
        MARKETING : {
            CONTENT_1 : {
                TITLE : 'เพื่อ',
                SUB_TITLE:'',
                MESSAGE : ''
            },
            CONTENT_2 : {
                TITLE : 'เพื่อ',
                SUB_TITLE:'',
                MESSAGE : ''
            },
            CONTENT_3 : {
                TITLE : 'เพื่อ',
                SUB_TITLE:'',
                MESSAGE : ''
            }
        },
        FOOTER : {
           
        }
    });
    $translateProvider.translations('us', {
        TITLE: {
            NAME: 'Caramel Srikho - Sweet, Fresh and Delicious Dessert',
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
                CUSTOMER : 'Customer Order',
                HISTORY : 'History Order',
                SETTING: 'General Setting',
                ACCOUNT : 'Account Setting',
                LOGOUT : 'Log out',
                REPORT : 'Report'
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
            },
            SIGNIN: 'Log in',
            SIGNOUT: 'Log out',
            MODAL_SIGNIN: {
                //login
                HEAD: 'Sign in/Sign up',
                LABEL_USERNAME: 'Username',
                PLACEHOLDER_USERNAME: 'Email',
                LABEL_PASSWORD: 'Password',
                PLACEHOLDER_PASSWORD: 'Password',
                FORGET_PASSWORD : 'Forget Password',
                REMEMBER_ME : 'Remember Me',
                REMEMBER_ME_REASON : '(Is this is private computer)',
                TAB_SIGNUP: 'Register',
                BUTTON_SIGNIN: 'Sign in',
                FACEBOOK_SIGNIN: 'Log in with Facebook',
                TWITTER_SIGNIN: 'Log in with Twitter',
                LINKEDIN_SIGNIN: 'Log in with Linkedin',
                GOOGLE_PLUS_SIGNIN: 'Log in with Google+',
                INSTAGRAM_SIGNIN: 'Log in with Instagram',
                GITHUB_SIGNIN: 'Log in with Github',
                DROPBOX_SIGNIN: 'Log in with Dropbox',
                FOURSQUARE_SIGNIN: 'Log in with Foursquare',
                SOUNDCLOUD_SIGNIN: 'Log in with Soundcloud',
                //sign up
                FIRST_NAME : "Firstname",
                LAST_NAME : "Lastname",
                EMAIL : "Email",
                USERNAME : "Username",
                PASSWORD : "Password",
                STRENGTH : "Complexity",
                RECAPTCHA : "I'm not a robot",
                BUTTON_SIGNUP : "Sign up",
                TERM_SERVICE_LABEL : 'I agree',
                TERM_SERVICE : 'Term of services'
            },
            MODAL_SHIPMENT: {
                HEAD : "Transportation",
                BILLING : {
                    STEP : 'Address',
                    BILL_STEP : 'Billing Address',
                    BILL_NAME: 'Name',
                    BILL_EMAIL: 'Email',
                    BILL_ADDRESS: 'Address',
                    BILL_PROVINCE: 'Province',
                    BILL_SELECT_PROVINCE: '--- Select Province ---',
                    BILL_DISTRICT: 'District :',
                    BILL_SELECT_DISTRICT: '--- Select District ---',
                    BILL_SUBDISTRICT: 'Sub-District :',
                    BILL_SELECT_SUBDISTRICT: '--- Select Sub-District ---',
                    BILL_ZIPCODE: 'Zipcode :',
                    BILL_SELECT_ZIPCODE: '--- Select Zipcode ---',
                    TEL_NO: 'Tel No',
                    MOBILE_NO: 'Mobile',

                    SAME_ADDRESS : "Same Address",

                    RO_STEP : 'Receipt Address ',
                    RO_NAME: 'Name ',
                    RO_ADDRESS: 'Address',
                    RO_PROVINCE: 'Province',
                    RO_SELECT_PROVINCE: '--- Select Province ---',
                    RO_DISTRICT: 'District',
                    RO_SELECT_DISTRICT: '--- Select District ---',
                    RO_SUBDISTRICT: 'Sub-District',
                    RO_SELECT_SUBDISTRICT: '--- Select Sub-District ---',
                    RO_ZIPCODE: 'Zipcode',
                    RO_SELECT_ZIPCODE: '--- Select Zipcode ---',

                    BUTTON_NEXT: 'Next'
                },
                PAYMENT: {
                    STEP : 'Payment',
                    PAYMENT_TYPE: 'Payment Type',
                    SELECT_PAYMENT_TYPE: '--- Select Payment Type ---',
                    TRANSFER: 'Transfer',
                    BBL : {
                        NAME : 'ธ. กรุงเทพ',
                        ACCOUNT_NO : '406-0-74796-3',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : 'Saving',
                        ACCOUNT_BRANCH : 'สาขา ศีขรภูมิ'
                    },
                    KBANK : {
                        NAME : 'ธ. กสิกรไทย',
                        ACCOUNT_NO : '003-1-71056-1',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : 'Saving',
                        ACCOUNT_BRANCH : 'สำนักงานย่อย ศีขรภูมิ'
                    },
                    KTB : {
                        NAME : 'ธ. กรุงไทย',
                        ACCOUNT_NO : '331-0-38978-2',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : 'Saving',
                        ACCOUNT_BRANCH : 'สาขา ศีขรภูมิ'
                    },
                    SCB : {
                        NAME : 'ธ. ไทยพาณิชย์',
                        ACCOUNT_NO : '406-749912-1',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : 'Saving',
                        ACCOUNT_BRANCH : 'โรบินสัน สุรินทร์'
                    },
                    KCC : {
                        NAME : 'ธ. กรุงศรี',
                        ACCOUNT_NO : '721-1-02954-1',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : 'Saving',
                        ACCOUNT_BRANCH : 'โรบินสัน สุรินทร์'
                    },
                    TMB : {
                        NAME : 'ธ. ทีเอ็มบี',
                        ACCOUNT_NO : '-',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : 'Saving',
                        ACCOUNT_BRANCH : 'เมืองสุรินทร์'
                    },
                    UOB : {
                        NAME : 'ธ. ยูโอบี',
                        ACCOUNT_NO : '-',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : 'Saving',
                        ACCOUNT_BRANCH : 'เมืองสุรินทร์'
                    },
                    TNC : {
                        NAME : 'ธ. ธนชาต',
                        ACCOUNT_NO : '-',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : 'Saving',
                        ACCOUNT_BRANCH : 'เมืองสุรินทร์'
                    },
                    PAYPAL : 'Paypal',
                    CREDIT: 'Credit Card',
                    BUTTON_NEXT: 'Next'
                },
                FINISH : {
                    STEP : 'Finish',
                    BUTTON : 'กดเพื่อสิ้นสุด',
                    THANK_MESSAGE: 'Thank you for your order ☺'
                }
            }
        },
        BODY: {
           SECTION : {
            PRODUCT : {
                PRICE : 'Price',
                QUANTITY : 'Qty.',
                BUY : 'Buy',
                WEIGHT:'Weight',
                WEIGHT_GRAM: 'g',
                WEIGHT_KILOGRAM: 'kg'
            }
           }
        },
        FOOTER : {
            
        }
    });
    $translateProvider.translations('jp', {
        TITLE: {
            NAME: 'キャラメル  - 甘い、新鮮、おいしい、デザート',
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
                CUSTOMER : '顧客注文',
                HISTORY : '歴史注文',
                SETTING : '一般的な設定',
                ACCOUNT : 'アカウントの設定',
                LOGOUT : 'ログアウト',
                REPORT : '報告する'
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
            },
            SIGNIN: 'ログイン',
            SIGNOUT: 'ログアウト',
            MODAL_SIGNIN: {
                //login
                HEAD: 'ログイン/サインアップ',
                LABEL_USERNAME: 'ユーザー名',
                PLACEHOLDER_USERNAME: 'Eメール',
                LABEL_PASSWORD: 'パスワード',
                PLACEHOLDER_PASSWORD: 'パスワード',
                FORGET_PASSWORD : 'パスワードを忘れます',
                REMEMBER_ME : '私を覚えてますか',
                REMEMBER_ME_REASON : '(ถ้านี่เป็นคอมพิวเตอร์ส่วนตัว)',
                TAB_SIGNUP: 'サインアップ',
                BUTTON_SIGNIN: 'ログイン',
                FACEBOOK_SIGNIN: 'Facebookのアカウントでログイン',
                TWITTER_SIGNIN: 'Twitterのアカウントでログイン',
                LINKEDIN_SIGNIN: 'Linkedinのアカウントでログイン',
                GOOGLE_PLUS_SIGNIN: 'Google+のアカウントでログイン',
                INSTAGRAM_SIGNIN: 'Instagramのアカウントでログイン',
                GITHUB_SIGNIN: 'Githubのアカウントでログイン',
                DROPBOX_SIGNIN: 'Dropboxのアカウントでログイン',
                FOURSQUARE_SIGNIN: 'Foursquareのアカウントでログイン',
                SOUNDCLOUD_SIGNIN: 'Soundcloudのアカウントでログイン',
                //sign up
                FIRST_NAME : "名",
                LAST_NAME : "苗字",
                EMAIL : "Eメール",
                USERNAME : "ユーザー名",
                PASSWORD : "パスワード",
                STRENGTH : "複雑",
                RECAPTCHA : "私はロボットじゃありません",
                BUTTON_SIGNUP : "サインアップ",
                TERM_SERVICE_LABEL : '同意する',
                TERM_SERVICE : '年季'
            },
            MODAL_SHIPMENT: {
                HEAD : "交通",
                BILLING : {
                    STEP : '請求先住所',
                    BILL_STEP : '請求先住所',
                    BILL_NAME: '名前',
                    BILL_EMAIL: 'Eメール',
                    BILL_ADDRESS: '住所',
                    BILL_PROVINCE: '州',
                    BILL_SELECT_PROVINCE: '--- セレクト州 ---',
                    BILL_DISTRICT: '地区 :',
                    BILL_SELECT_DISTRICT: '--- セレクト地区 ---',
                    BILL_SUBDISTRICT: '分区 :',
                    BILL_SELECT_SUBDISTRICT: '--- セレクト分区 ---',
                    BILL_ZIPCODE: '郵便番号 :',
                    BILL_SELECT_ZIPCODE: '--- セレクト郵便番号 ---',
                    TEL_NO: '電話番号',
                    MOBILE_NO: '携帯電話番号',

                    SAME_ADDRESS : "同じアドレス",

                    RO_STEP : '領収書の住所 ',
                    RO_NAME: '名前',
                    RO_ADDRESS: '住所',
                    RO_PROVINCE: '州',
                    RO_SELECT_PROVINCE: '--- セレクト州 ---',
                    RO_DISTRICT: '地区',
                    RO_SELECT_DISTRICT: '--- セレクト地区 ---',
                    RO_SUBDISTRICT: '分区',
                    RO_SELECT_SUBDISTRICT: '--- セレクト分区 ---',
                    RO_ZIPCODE: '郵便番号',
                    RO_SELECT_ZIPCODE: '--- セレクト郵便番号 ---',

                    BUTTON_NEXT: '持続する'
                },
                PAYMENT: {
                    STEP : '支払い',
                    PAYMENT_TYPE: '払いの種類',
                    SELECT_PAYMENT_TYPE: '--- セレクト払いの種類 ---',
                    TRANSFER: '転送',
                    BBL : {
                        NAME : 'ธ. กรุงเทพ',
                        ACCOUNT_NO : '406-0-74796-3',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : '節約',
                        ACCOUNT_BRANCH : 'สาขา ศีขรภูมิ'
                    },
                    KBANK : {
                        NAME : 'ธ. กสิกรไทย',
                        ACCOUNT_NO : '003-1-71056-1',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : '節約',
                        ACCOUNT_BRANCH : 'สำนักงานย่อย ศีขรภูมิ'
                    },
                    KTB : {
                        NAME : 'ธ. กรุงไทย',
                        ACCOUNT_NO : '331-0-38978-2',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : '節約',
                        ACCOUNT_BRANCH : 'สาขา ศีขรภูมิ'
                    },
                    SCB : {
                        NAME : 'ธ. ไทยพาณิชย์',
                        ACCOUNT_NO : '406-749912-1',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : '節約',
                        ACCOUNT_BRANCH : 'โรบินสัน สุรินทร์'
                    },
                    KCC : {
                        NAME : 'ธ. กรุงศรี',
                        ACCOUNT_NO : '721-1-02954-1',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : '節約',
                        ACCOUNT_BRANCH : 'โรบินสัน สุรินทร์'
                    },
                    TMB : {
                        NAME : 'ธ. ทีเอ็มบี',
                        ACCOUNT_NO : '-',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : '節約',
                        ACCOUNT_BRANCH : 'เมืองสุรินทร์'
                    },
                    UOB : {
                        NAME : 'ธ. ยูโอบี',
                        ACCOUNT_NO : '-',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : '節約',
                        ACCOUNT_BRANCH : 'เมืองสุรินทร์'
                    },
                    TNC : {
                        NAME : 'ธ. ธนชาต',
                        ACCOUNT_NO : '-',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : '節約',
                        ACCOUNT_BRANCH : 'เมืองสุรินทร์'
                    },
                    PAYPAL : 'ペイパル',
                    CREDIT: 'クレジットカード',
                    BUTTON_NEXT: '持続する'
                },
                FINISH : {
                    STEP : '仕上げ',
                    BUTTON : 'กดเพื่อสิ้นสุด',
                    THANK_MESSAGE: '注文いただきありがとうございます。☺'
                }
            }
        },
        BODY: {
           SECTION : {
            PRODUCT : {
                PRICE : '価格',
                QUANTITY : '量',
                BUY : '購入',
                WEIGHT:'重量',
                WEIGHT_GRAM: 'グラム',
                WEIGHT_KILOGRAM: 'キログラム'
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
                PRODUCT : '新鮮的焦糖',
                PURCHASE : '購入',
                DELIVERY : '配信',
                ABOUT : '約',
                CONTACT : '接触',
                CUSTOMER : '客戶訂單',
                HISTORY : '歷史訂單',
                SETTING : '一般設置',
                ACCOUNT : '賬戶設置',
                LOGOUT : '登出',
                REPORT : '報告'
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
            },
            SIGNIN: '登錄',
            SIGNOUT: '登出',
            MODAL_SIGNIN: {
                //login
                HEAD: '登錄/註冊',
                LABEL_USERNAME: '用戶名',
                PLACEHOLDER_USERNAME: '電子郵件',
                LABEL_PASSWORD: '密碼',
                PLACEHOLDER_PASSWORD: '密碼',
                FORGET_PASSWORD : '忘記密碼',
                REMEMBER_ME : '記住我',
                REMEMBER_ME_REASON : '(ถ้านี่เป็นคอมพิวเตอร์ส่วนตัว)',
                TAB_SIGNUP: '註冊',
                BUTTON_SIGNIN: '登錄',
                FACEBOOK_SIGNIN: '登陸使用 Facebook',
                TWITTER_SIGNIN: '登陸使用 Twitter',
                LINKEDIN_SIGNIN: '登陸使用 Linkedin',
                GOOGLE_PLUS_SIGNIN: '登陸使用 Google+',
                INSTAGRAM_SIGNIN: '登陸使用 Instagram',
                GITHUB_SIGNIN: '登陸使用 Github',
                DROPBOX_SIGNIN: '登陸使用 Dropbox',
                FOURSQUARE_SIGNIN: '登陸使用 Foursquare',
                SOUNDCLOUD_SIGNIN: '登陸使用 Soundcloud',
                //sign up
                FIRST_NAME : "名字",
                LAST_NAME : "姓",
                EMAIL : "電子郵件",
                USERNAME : "用戶名",
                PASSWORD : "密碼",
                STRENGTH : "複雜",
                RECAPTCHA : "我不是機器人",
                BUTTON_SIGNUP : "註冊",
                TERM_SERVICE_LABEL : '我同意',
                TERM_SERVICE : '服務期限'
            },
            MODAL_SHIPMENT: {
                HEAD : "運輸",
                BILLING : {
                    STEP : '帳單地址',
                    BILL_STEP : '帳單地址',
                    BILL_NAME: '名稱',
                    BILL_EMAIL: '電子郵件',
                    BILL_ADDRESS: '地址',
                    BILL_PROVINCE: '省',
                    BILL_SELECT_PROVINCE: '--- 選擇 省 ---',
                    BILL_DISTRICT: '區',
                    BILL_SELECT_DISTRICT: '--- 選擇 區 ---',
                    BILL_SUBDISTRICT: '分地區',
                    BILL_SELECT_SUBDISTRICT: '--- 選擇 分地區 ---',
                    BILL_ZIPCODE: '郵政編碼',
                    BILL_SELECT_ZIPCODE: '--- 選擇 郵政編碼 ---',
                    TEL_NO: '電話號碼',
                    MOBILE_NO: '手機號',

                    SAME_ADDRESS : "同一地址",

                    RO_STEP : '的收貨地址 ',
                    RO_NAME: '名稱 ',
                    RO_ADDRESS: '電子郵件',
                    RO_PROVINCE: '省',
                    RO_SELECT_PROVINCE: '--- 選擇 省 ---',
                    RO_DISTRICT: '區',
                    RO_SELECT_DISTRICT: '--- 選擇 區 ---',
                    RO_SUBDISTRICT: '分地區',
                    RO_SELECT_SUBDISTRICT: '--- 選擇 分地區 ---',
                    RO_ZIPCODE: '郵政編碼',
                    RO_SELECT_ZIPCODE: '--- 選擇 郵政編碼 ---',

                    BUTTON_NEXT: '下一個'
                },
                PAYMENT: {
                    STEP : '付款',
                    PAYMENT_TYPE: '付款方式',
                    SELECT_PAYMENT_TYPE: '--- 選擇 付款方式 ---',
                    TRANSFER: '轉讓',
                    BBL : {
                        NAME : 'ธ. กรุงเทพ',
                        ACCOUNT_NO : '406-0-74796-3',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : '保存',
                        ACCOUNT_BRANCH : 'สาขา ศีขรภูมิ'
                    },
                    KBANK : {
                        NAME : 'ธ. กสิกรไทย',
                        ACCOUNT_NO : '003-1-71056-1',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : '保存',
                        ACCOUNT_BRANCH : 'สำนักงานย่อย ศีขรภูมิ'
                    },
                    KTB : {
                        NAME : 'ธ. กรุงไทย',
                        ACCOUNT_NO : '331-0-38978-2',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : '保存',
                        ACCOUNT_BRANCH : 'สาขา ศีขรภูมิ'
                    },
                    SCB : {
                        NAME : 'ธ. ไทยพาณิชย์',
                        ACCOUNT_NO : '406-749912-1',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : '保存',
                        ACCOUNT_BRANCH : 'โรบินสัน สุรินทร์'
                    },
                    KCC : {
                        NAME : 'ธ. กรุงศรี',
                        ACCOUNT_NO : '721-1-02954-1',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : '保存',
                        ACCOUNT_BRANCH : 'โรบินสัน สุรินทร์'
                    },
                    TMB : {
                        NAME : 'ธ. ทีเอ็มบี',
                        ACCOUNT_NO : '-',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : '保存',
                        ACCOUNT_BRANCH : 'เมืองสุรินทร์'
                    },
                    UOB : {
                        NAME : 'ธ. ยูโอบี',
                        ACCOUNT_NO : '-',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : '保存',
                        ACCOUNT_BRANCH : 'เมืองสุรินทร์'
                    },
                    TNC : {
                        NAME : 'ธ. ธนชาต',
                        ACCOUNT_NO : '-',
                        ACCOUNT_NAME : 'นาย ปัญญา บุญยกุลศรีรุ่ง',
                        ACCOUNT_TYPE : '保存',
                        ACCOUNT_BRANCH : 'เมืองสุรินทร์'
                    },
                    PAYPAL : '貝寶',
                    CREDIT: '信用卡',
                    BUTTON_NEXT: '下一個'
                },
                FINISH : {
                    STEP : '完',
                    BUTTON : 'กดเพื่อสิ้นสุด',
                    THANK_MESSAGE: '謝謝您的訂單。☺'
                }
            }
        },
        BODY: {
           SECTION : {
            PRODUCT : {
                PRICE : '價格',
                QUANTITY : '數量',
                BUY : '購買',
                WEIGHT: '重量',
                WEIGHT_GRAM: '公克',
                WEIGHT_KILOGRAM: '公斤'
            }
           }
        },
        FOOTER : {
          
        }
    });
    $translateProvider.preferredLanguage('th');
});