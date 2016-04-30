"use strict"
app.config(function ($translateProvider) {
    $translateProvider.translations('th', {
        TITLE: {
            NAME: 'กาละแมอันดับ 1 อำเภอศีขรภูมิ',
            DESCRIPTION: 'กาละแมที่พัฒนาสูตรอยู่สม่ำเสมอ เพื่อรสชาติที่อร่อยถูกปากลูกค้า หรือซื้อให้เป็นของฝากญาติ พี่น้อง และเพื่อนๆ แม้ทานเล่นก็ได้'
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
                SUM_WEIGHT_AMT : 'ค่าจัดส่ง'
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
                    PROCESSING : 'ระบบกำลังประมวลผลคำสั่งซื้อของท่าน กรุณารอสักครู่',
                    THANK_MESSAGE: 'ขอบคุณสำหรับคำสั่งซื้อของท่าน ☺'
                }
            }
        },
        BODY: {
            CAROUSEL : {
                ONE : {
                    TITLE : 'กาละแม "เฮียจอก" หอม หวาน มัน อร่อย',
                    TEXT : 'ลูกค้าสามารถนำไปเป็นของฝาก หรือทานเล่น'
                },
                TWO : {
                    TITLE : 'ใช้เครื่องจักรที่มีคุณภาพ',
                    TEXT : 'พัฒนาสูตร กาละแมอยู่เสมอเพื่อให้ลูกค้าชื่นชอบ'
                }
            },
            SECTION : {
                PRODUCT : {
                    HEADER: 'เมนู กาละแม หอม หวาน',
                    PRICE : 'ราคา',
                    QUANTITY : 'จำนวน',
                    BUY : 'ซื้อ',
                    WEIGHT: 'น้ำหนัก',
                    WEIGHT_GRAM: 'กรัม',
                    WEIGHT_KILOGRAM: 'กิโลกรัม',
                    WORTH: 'คุ้มค่า!!'
                },
                HISTORY : {
                    HEAD : "ประวัติการสั่งซื้อ",
                    BUTTON: {
                        SEARCH : "ค้นหา"
                    },
                    FROM: "จาก :",
                    TO: "ถึง :",
                    PAYMENT_STATUS: "สถานะการจ่ายเงิน :",
                    SHIPPING_STATUS: "สถานะการขนส่ง :",
                    PAYMENT : {
                        OWED : "ค้างชำระ",
                        PAID: "ชำระแล้ว"
                    },
                    SHIPPING : {
                        NOT_SHIPPING : "ยังไม่ได้ส่งสินค้า",
                        SHIPPING: "ส่งสินค้าแล้ว"
                    }
                },
                CUSTOMER_ORDER : {
                    BUTTON : {
                        SEARCH : "ค้นหา"
                    },
                    HEAD : "ใบสั่งซื้อลูกค้า :",
                    RO_NO : "เลขที่ใบเสร็จ :",
                    RO_NO_PLACEHOLDER : "เลขที่ใบเสร็จ",
                    CUSTOMER : "ลูกค้า :",
                    CUSTOMER_PLACEHOLDER : "ลูกค้า",
                    FROM : "วันที่เริ่ม :",
                    FROM_PLACEHOLDER : "วันที่เริ่ม",
                    TO : "วันที่สิ้นสุด :",
                    TO_PLACEHOLDER : "วันที่สิ้นสุด",
                    PAYMENT_STATUS : "สถานะการชำระเงิน :",
                    PAYMENT_PLACEHOLDER : "สถานะการชำระเงิน",
                    SHIPPING_STATUS : "สถานะการส่งสินค้า :",
                    SHIPPING_PLACEHOLDER : "สถานะการส่งสินค้า",
                    PAYMENT : {
                        OWED : "ค้างชำระ",
                        PAID: "ชำระแล้ว"
                    },
                    SHIPPING : {
                        NOT_SHIPPING : "ยังไม่ได้ส่งสินค้า",
                        SHIPPING: "ส่งสินค้าแล้ว"
                    }
                },
                VIEW_RO_MODAL : {
                    DATE : 'วันที่',
                    RO_NO : 'เลขที่ใบเสร็จ',
                    RO_LABEL : 'ใบเสร็จ',
                    IMAGE_PAYMENT_DOCUMENT : 'รูปเอกสารการชำระเงิน',
                    UPLOAD_BUTTON : 'อัพโหลดเอกสารการชำระเงิน',
                    APPROVE_BUTTON : 'อนุมัติ',
                    REJECT_BUTTON : 'ปฏิเสธ'
                }
            }
        },
        MARKETING : {
            CONTENT_1 : {
                TITLE : 'เป็นขนมที่รู้จักกันอย่างแพร่หลาย',
                SUB_TITLE: 'เป็นของฝากหรือซื้อเพื่อทานเล่น',
                MESSAGE : 'ทั้งลูกค้ารายใหม่ๆ และลูกค้าที่รู้จักอยู่แล้ว'
            },
            CONTENT_2 : {
                TITLE : 'รูปลักษณ์',
                SUB_TITLE: 'รสชาติ คือ สิ่งสำคัญ',
                MESSAGE : 'คำว่า \'ไม่ลองไม่รู้\' ยังสามารถใช้ได้'
            },
            CONTENT_3 : {
                TITLE : 'สิ่งที่สำคัญไม่แพ้กัน คือ "ใจ"',
                SUB_TITLE:'มุ่งมั่นเพื่อหารสชาติที่อร่อย ถูกปากลูกค้า',
                MESSAGE : 'ร้านขายกาละแมมีมากมาย แต่มีกี่ร้านที่สามารถนำไปเป็นของฝากและมีรสชาติอร่อย ถูกปากลูกค้า และผู้ผลิตมีการพัฒนาสูตรอยู่เสมอ'
            }
        },
        FOOTER : {
           THUMB_UPS :'สะอาด ถูก หลักอนามัย',
           FILE :'ส่วนผสมที่ลงตัว',
           BADGE :'เป็นที่รู้จักของอย่างแพร่หลาย',
           HEART : 'ใส่ใจในการผลิต',
           COPY_RIGHT : 'สงวนลิขสิทธิ์ 2016 Caramel Srikho ประเทศไทย'
        }
    });
    $translateProvider.translations('us', {
        TITLE: {
            NAME: 'Caramel Srikho - Sweet, Fresh and Delicious Dessert',
            DESCRIPTION: 'Caramel recipe has always developed for the best delicious dessert. Customers can buy as a souvenir to relatives and friends or as a snacks.'
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
            MODAL_CART: {
                EMPTY_CART: 'Empty Cart',
                PRODUCT_CART: 'Product in Cart',
                SEQ: '#',
                ITEM_NAME: 'items',
                QTY: 'Qty',
                UOM: 'Uom',
                PRICE: 'Price',
                DISCOUNT: 'Disc.',
                AMOUNT: 'Amount',
                REMOVE: 'Del',
                SUMAMT: 'Sum. Amount',
                SUMDISCAMT: 'Sum. Disc. Amount',
                SUMVATAMT: 'VAT',
                NETAMT: 'Net Amount',
                SHOP_BUTTON: 'Continue Shopping',
                CLEAR_BUTTON: 'Clear Cart',
                CHECKOUT_BUTTON: 'Check Out',
                SELECT_POST_TYPE: 'Select Post Type',
                POST_TYPE: {
                    NORMAL: 'Normal Mail',
                    EMS: 'EMS Mail'
                },
                SUM_WEIGHT_AMT : 'Sum. Shipping Amount'
            },
            MODAL_FORGET_PASSWORD : {
                TITLE : 'Forget Password ?',
                TEXT: 'You can change password by input email.',
                EMAIL_PHD : 'Enter Email',
                SEND_EMAIL_BUTTON : 'Send Email'
            },
            MODAL_INPUT_PASSWORD : {
                TITLE : 'Change Password ?',
                TEXT: '',
                PASSWORD : 'Password',
                CONFIRM_PASSWORD : 'Confirm Password',
                CHANGE_PASSWORD_BUTTON : 'Change Password'
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
            CAROUSEL : {
                ONE : {
                    TITLE : 'Caramel "เฮียจอก" that\'s sweet and delicious.',
                    TEXT : 'Customers can take as souvenirs or snacks.'
                },
                TWO : {
                    TITLE : 'High quality machines in production.',
                    TEXT : 'Always develop caramel tastes for the best dessert to customers.'
                }
            },
            SECTION : {
                PRODUCT : {
                    HEADER: 'The Sweet Caramel Menu',
                    PRICE : 'Price',
                    QUANTITY : 'Qty.',
                    BUY : 'Buy',
                    WEIGHT:'Weight',
                    WEIGHT_GRAM: 'g',
                    WEIGHT_KILOGRAM: 'kg',
                    WORTH: 'Worth!!'
                },
                HISTORY : {
                    HEAD : "Purchase History",
                    BUTTON: {
                        SEARCH : "Search"
                    },
                    FROM: "From",
                    TO: "To",
                    PAYMENT_STATUS: "Payment Status",
                    SHIPPING_STATUS: "Shipment Status",
                    PAYMENT : {
                        OWED : "Owed",
                        PAID: "Paid"
                    },
                    SHIPPING : {
                        NOT_SHIPPING : "Not Shipping",
                        SHIPPING: "Shipping"
                    }
                },
                CUSTOMER_ORDER : {
                    BUTTON : {
                        SEARCH : "Search"
                    },
                    HEAD : "Customer Order",
                    RO_NO : "RO No",
                    RO_NO_PLACEHOLDER : "Receipt",
                    CUSTOMER : "Customer",
                    CUSTOMER_PLACEHOLDER : "Customer",
                    FROM : "From Date",
                    FROM_PLACEHOLDER : "From Date",
                    TO : "End Date",
                    TO_PLACEHOLDER : "End Date",
                    PAYMENT_STATUS : "Payment Status",
                    PAYMENT_PLACEHOLDER : "Payment Status",
                    SHIPPING_STATUS : "Shipment Status",
                    SHIPPING_PLACEHOLDER : "Shipment Status",
                    PAYMENT : {
                        OWED : "Owed",
                        PAID: "Paid"
                    },
                    SHIPPING : {
                        NOT_SHIPPING : "Not Shipping",
                        SHIPPING: "Shipping"
                    }
                },
                VIEW_RO_MODAL : {
                    DATE : 'Date',
                    RO_NO : 'RO No',
                    RO_LABEL : 'Purchase Recquest',
                    IMAGE_PAYMENT_DOCUMENT : 'Payment Document Image',
                    UPLOAD_BUTTON : 'Upload',
                    APPROVE_BUTTON : 'Approve',
                    REJECT_BUTTON : 'Reject'
                }
            }
        },
        MARKETING : {
            CONTENT_1 : {
                TITLE : 'Widely known',
                SUB_TITLE: '--- Customers buy caramel as souvenirs or snacks ---',
                MESSAGE : 'Both new customers And customers already known Flavors'
            },
            CONTENT_2 : {
                TITLE : 'Appearance',
                SUB_TITLE: '--- The taste is important ---',
                MESSAGE : 'Words "If you never try, You will never know" is also applicable'
            },
            CONTENT_3 : {
                TITLE : 'The thing that is also important is the "heart"',
                SUB_TITLE:'--- Commitment to customers for best tastes ---',
                MESSAGE : 'There are plenty of caramel shops, but there are very few shops that can be a souvenir and a delicious taste. Additional, manufacturers have always developed the products.'
            }
        },
        FOOTER : {
           THUMB_UPS :'Clean and Hygienic',
           FILE :'A perfect combination',
           BADGE :'Widely known',
           HEART : 'Focus on Manufacturing',
           COPY_RIGHT : 'Copyright 2016 Caramel Srikho Thailand'
        }
    });
    $translateProvider.translations('jp', {
        TITLE: {
            NAME: 'キャラメル  - 甘い、新鮮、おいしい、デザート',
            DESCRIPTION: 'キャラメルのレシピは、常に最高のおいしいデザートのために開発しました。お客様は、親戚や友人にまたはスナックなどお土産として購入することができます。'
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
            MODAL_CART: {
                EMPTY_CART: '空のカート',
                PRODUCT_CART: 'カート内のアイテム',
                SEQ: '#',
                ITEM_NAME: 'アイテム',
                QTY: '量',
                UOM: '単位',
                PRICE: '価格',
                DISCOUNT: 'ディスカウント',
                AMOUNT: '量',
                REMOVE: 'Del',
                SUMAMT: '合計額',
                SUMDISCAMT: '合計割引額',
                SUMVATAMT: 'バット',
                NETAMT: '正味金額',
                SHOP_BUTTON: 'ショッピングを続ける',
                CLEAR_BUTTON: '明確カート',
                CHECKOUT_BUTTON: 'チェックアウト',
                SELECT_POST_TYPE: 'ポストタイプを選択します',
                POST_TYPE: {
                    NORMAL: '通常のメール',
                    EMS: 'EMSメール'
                },
                SUM_WEIGHT_AMT : '合計出荷量'
            },
            MODAL_FORGET_PASSWORD : {
                TITLE : 'パスワードを忘れましたか？',
                TEXT: 'あなたは、入力された電子メールでパスワードを変更することができます。',
                EMAIL_PHD : '入力メール',
                SEND_EMAIL_BUTTON : 'メールを送る'
            },
            MODAL_INPUT_PASSWORD : {
                TITLE : 'パスワードを変更する？',
                TEXT: '',
                PASSWORD : 'パスワード',
                CONFIRM_PASSWORD : 'パスワードを認証する',
                CHANGE_PASSWORD_BUTTON : 'パスワードを変更する'
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
            CAROUSEL : {
                ONE : {
                    TITLE : 'キャラメル \'เฮียจอก \' のその甘くておいしいです。',
                    TEXT : 'お客様は、お土産や軽食として取ることができます。'
                },
                TWO : {
                    TITLE : '生産における高品質のマシン。',
                    TEXT : '常に顧客に最高のデザートにキャラメルの味を開発しています。'
                }
            },
           SECTION : {
                PRODUCT : {
                    HEADER: 'キャラメルの甘いです',
                    PRICE : '価格',
                    QUANTITY : '量',
                    BUY : '購入',
                    WEIGHT:'重量',
                    WEIGHT_GRAM: 'グラム',
                    WEIGHT_KILOGRAM: 'キログラム',
                    WORTH: '価値!!'
                },
                HISTORY : {
                    HEAD : "購入履歴",
                    BUTTON: {
                        SEARCH : "サーチ"
                    },
                    FROM: "から",
                    TO: "に",
                    PAYMENT_STATUS: "支払い状況",
                    SHIPPING_STATUS: "出荷ステータス",
                    PAYMENT : {
                        OWED : "支払うべき",
                        PAID: "支払われました"
                    },
                    SHIPPING : {
                        NOT_SHIPPING : "ではない配送",
                        SHIPPING: "出荷されました"
                    }
                },
                CUSTOMER_ORDER : {
                    BUTTON : {
                        SEARCH : "サーチ"
                    },
                    HEAD : "顧客注文 :",
                    RO_NO : "受付番号",
                    RO_NO_PLACEHOLDER : "受付番号",
                    CUSTOMER : "顧客",
                    CUSTOMER_PLACEHOLDER : "顧客",
                    FROM : "から",
                    FROM_PLACEHOLDER : "から",
                    TO : "に",
                    TO_PLACEHOLDER : "に",
                    PAYMENT_STATUS : "支払い状況 :",
                    PAYMENT_PLACEHOLDER : "支払い状況",
                    SHIPPING_STATUS : "出荷ステータス :",
                    SHIPPING_PLACEHOLDER : "出荷ステータス",
                    PAYMENT : {
                        OWED : "支払うべき",
                        PAID: "支払われました"
                    },
                    SHIPPING : {
                        NOT_SHIPPING : "ではない配送",
                        SHIPPING: "出荷されました"
                    }
                },
                VIEW_RO_MODAL : {
                    DATE : '日付',
                    RO_NO : '受付番号',
                    RO_LABEL : '領収書',
                    IMAGE_PAYMENT_DOCUMENT : '支払文書画像',
                    UPLOAD_BUTTON : 'アップロード',
                    APPROVE_BUTTON : '承認します',
                    REJECT_BUTTON : '拒否する'
                }
            }
        },
        MARKETING : {
            CONTENT_1 : {
                TITLE : '広く知られて',
                SUB_TITLE: '--- お客様は、お土産や軽食としてキャラメルを購入します ---',
                MESSAGE : 'どちらも新規顧客や顧客が既にフレーバーを知られています。'
            },
            CONTENT_2 : {
                TITLE : '外観',
                SUB_TITLE: '--- 味は重要です ---',
                MESSAGE : '言葉にも適用可能である"あなたがしようとしない場合は、あなたが知っていることは決してないだろう」'
            },
            CONTENT_3 : {
                TITLE : '重要であることは、「心」であります',
                SUB_TITLE:'--- 最高の味のための顧客へのコミットメント ---',
                MESSAGE : 'キャラメルお店がたくさんありますが、お土産や美味しい味することができ、非常に少数の店があります。追加、メーカーは常に製品を開発しています。'
            }
        },
        FOOTER : {
           THUMB_UPS :'清潔で衛生的。',
           FILE :'完璧な組み合わせ。',
           BADGE :'広く知られて。',
           HEART : '製造業に焦点を合わせます。',
           COPY_RIGHT: '著作権2016 Caramel Srikho タイ'
        }
    });
    $translateProvider.translations('cn', {
        TITLE: {
            NAME: '興 順 許 - 實施方案 摩托车配件 橡膠 和 润滑剂',
            DESCRIPTION: '佳美配方一直為最佳美味的甜點開發。客戶可以當作紀念品親友或作為零食購買。'
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
            MODAL_CART: {
                EMPTY_CART: '空購物車',
                PRODUCT_CART: '在車中的物品',
                SEQ: '#',
                ITEM_NAME: '項目',
                QTY: '數量',
                UOM: '單元',
                PRICE: '價錢',
                DISCOUNT: '折扣',
                AMOUNT: '量',
                REMOVE: '刪除',
                SUMAMT: '款額',
                SUMDISCAMT: '總和優惠金額',
                SUMVATAMT: '增值稅',
                NETAMT: '淨額',
                SHOP_BUTTON: '繼續購物',
                CLEAR_BUTTON: '清車',
                CHECKOUT_BUTTON: '查看',
                SELECT_POST_TYPE: '選擇職位類型',
                POST_TYPE: {
                    NORMAL: '普通郵件',
                    EMS: 'EMS郵件'
                },
                SUM_WEIGHT_AMT : '求和運輸量'
            },
            MODAL_FORGET_PASSWORD : {
                TITLE : '忘記密碼？',
                TEXT: '您可以通過輸入電子郵件更改密碼。',
                EMAIL_PHD : '輸入郵件',
                SEND_EMAIL_BUTTON : '發送郵件'
            },
            MODAL_INPUT_PASSWORD : {
                TITLE : '更改密碼 ？',
                TEXT: '',
                PASSWORD : '密碼',
                CONFIRM_PASSWORD : '確認密碼',
                CHANGE_PASSWORD_BUTTON : '更改密碼'
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
            CAROUSEL : {
                ONE : {
                    TITLE : '佳美“ เฮียจอก ”這是香甜可口。',
                    TEXT : '客戶可以作為紀念品或者小吃。'
                },
                TWO : {
                    TITLE : '高品質的機器生產。',
                    TEXT : '不斷開發最佳甜品焦糖顧客的口味。'
                }
            },
            SECTION : {
                PRODUCT : {
                    HEADER: '焦糖甜味',
                    PRICE : '價格',
                    QUANTITY : '數量',
                    BUY : '購買',
                    WEIGHT: '重量',
                    WEIGHT_GRAM: '公克',
                    WEIGHT_KILOGRAM: '公斤',
                    WORTH: '值得!!'
                },
                HISTORY : {
                    HEAD : "購買記錄",
                    BUTTON: {
                        SEARCH : "搜索"
                    },
                    FROM: "從 :",
                    TO: "至 :",
                    PAYMENT_STATUS: "支付狀態",
                    SHIPPING_STATUS: "發貨狀態",
                    PAYMENT : {
                        OWED : "欠",
                        PAID: "付費"
                    },
                    SHIPPING : {
                        NOT_SHIPPING : "不送貨",
                        SHIPPING: "運"
                    }
                },
                CUSTOMER_ORDER : {
                    BUTTON : {
                        SEARCH : "搜索"
                    },
                    HEAD : "客戶訂單 :",
                    RO_NO : "收據號 :",
                    RO_NO_PLACEHOLDER : "收據號",
                    CUSTOMER : "顧客 :",
                    CUSTOMER_PLACEHOLDER : "顧客",
                    FROM : "從日期 :",
                    FROM_PLACEHOLDER : "從日期",
                    TO : "至今 :",
                    TO_PLACEHOLDER : "至今",
                    PAYMENT_STATUS : "支付狀態 :",
                    PAYMENT_PLACEHOLDER : "支付狀態",
                    SHIPPING_STATUS : "運輸狀態 :",
                    SHIPPING_PLACEHOLDER : "運輸狀態",
                    PAYMENT : {
                        OWED : "欠",
                        PAID: "付費"
                    },
                    SHIPPING : {
                        NOT_SHIPPING : "不送貨",
                        SHIPPING: "運"
                    }
                },
                VIEW_RO_MODAL : {
                    DATE : '日期',
                    RO_NO : '收據號',
                    RO_LABEL : '收據',
                    IMAGE_PAYMENT_DOCUMENT : '付款單據圖片',
                    UPLOAD_BUTTON : '上傳',
                    APPROVE_BUTTON : '批准',
                    REJECT_BUTTON : '拒絕'
                }
           }
        },
        MARKETING : {
            CONTENT_1 : {
                TITLE : '眾所周知',
                SUB_TITLE: '--- 客戶購買焦糖作為紀念品和小吃 ---',
                MESSAGE : '這兩種新的客戶和客戶已經知道香精'
            },
            CONTENT_2 : {
                TITLE : '出現',
                SUB_TITLE: '--- 味道是很重要 ---',
                MESSAGE : '詞話“如果你不去嘗試，你永遠不知道”也適用'
            },
            CONTENT_3 : {
                TITLE : '這也是很重要的東西是“心臟”',
                SUB_TITLE:'--- 對客戶的承諾，以取得最佳的口味 ---',
                MESSAGE : '有大量的焦糖商店，但也有極少數的商店，可以是一個紀念品，味道鮮美。另外，廠商一直開發的產品。'
            }
        },
        FOOTER : {
           THUMB_UPS :'清潔衛生',
           FILE :'完美結合',
           BADGE :'眾所周知',
           HEART : '專注於製造業',
           COPY_RIGHT: '版權所有 2016年 Caramel Srikho 泰國'
        }
    });
    $translateProvider.preferredLanguage('th');
});