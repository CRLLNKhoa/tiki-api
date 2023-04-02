var spec =
{
    swagger: "2.0",    // Phiên bản Swagger UI
    info: {
        description:
            "Các thông tin mô tả về dự án và API",
        version: "1.0",    // Phiên bản API
        title: "API TIKI (small version)"
    },
    host: "https://backend-tikishop.onrender.com",    // Server và port deploy API
    basePath: "/api/",       // Đường dẫn tới API
    tags: [    // Danh sách các nhóm API: admin, users, images,...
        {
            name: "user",                                   // Tên nhóm API
            description: "",    // Mô tả về nhóm API
        }
    ],
    schemes: ["http"],    // Sử dụng scheme gì? HTTP, HTTPS?
    paths: {
        "/user/sign-up": {    // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            post: {        // Phương thức gửi request: get, post, put, delete
                tags: ["user"],
                summary: "Tạo tài khoản người dùng",
                description: "",
                operationId: "createNewAdminAccount",
                consumes: ["multipart/form-data"],    // Loại dữ liệu gửi đi
                produces: ["application/json"],       // Loại dữ liệu trả về
                parameters: [               // Các tham số
                    {
                        "in": "formData",      // Tham số được gửi lên từ form
                        "name": "username",    // Tên tham số
                        "required": "true",    // Tham số là bắt buộc
                        "schema": {
                            "type": "string"   // Loại dữ liệu của tham số là chuỗi
                        },
                        "description": "username cho tài khoản mới"
                    },
                    {
                        "in": "formData",
                        "name": "password",
                        "required": "true",
                        "schema": {
                            "type": "string"
                        },
                        "description": "password cho tài khoản mới"
                    },
                     {
                        "in": "formData",
                        "name": "phone",
                        "required": "true",
                        "schema": {
                            "type": "string"
                        },
                        "description": "số điện thoại"
                    },
                     {
                        "in": "formData",
                        "name": "full name",
                        "required": "true",
                        "schema": {
                            "type": "string"
                        },
                        "description": "họ và tên"
                    }
                ],
                responses: {
                    200: {
                        description: "status: 201 CREATED"
                    },
                },
                security: [
                    
                ]
            }
        },
        "/user/log-in": {
            post: {
                tags: ["user"],
                summary: "Đăng nhập",
                description: "",
                operationId: "changePasswordAdminAccountByID",
                consumes: ["multipart/form-data"],
                produces: ["application/json"],
                parameters: [
                    {
                        "in": "path",
                        "name": "id",
                        "required": "true",
                        "schema": {
                            "type": "integer",    // Kiểu tham số là số nguyên
                            "minimum": "1"        // Giá trị thấp nhất là 1
                        },
                        "description": "email của tài khoản"
                    },
                    {
                        "in": "formData",
                        "name": "password",
                        "required": "true",
                        "schema": {
                            "type": "string"
                        },
                        "description": "password của tài khoản"
                    }
                ],
                responses: {
                    200: {
                        description: "Đăng nhập thành công!, data=[access_token,refesh_token]"
                    },
                },
                security: [
                    
                ]
            }
        }
        , "/user/log-out": {
            post: {
                tags: ["user"],
                summary: "Đăng xuất",
                description: "",
                operationId: "changePasswordAdminAccountByID",
                consumes: ["multipart/form-data"],
                produces: ["application/json"],
                parameters: [
                
                ],
                responses: {
                    200: {
                        description: "Đăng xuất thành công"
                    },
                },
                security: [
                    
                ]
            }
        }
        , "/user/update-user/:id": {
            put: {
                tags: ["user"],
                summary: "Cập nhật profile",
                description: "",
                operationId: "getAdminAccountByID",
                consumes: ["multipart/form-data"],
                produces: ["application/json"],
                parameters: [
                    {
                        "in": "path",
                        "name": "id",
                        "required": "true",
                        "schema": {
                            "type": "integer",
                            "minimum": "1"
                        },
                        "description": "id người dùng"
                    },{
                        "in": "path",
                        "name": "data",
                        "required": "true",
                        "schema": {
                            "type": "integer",
                            "minimum": "1"
                        },
                        "description": "thông tin cập nhật"
                    }
                ],
                responses: {
                    200: {                                     // Mã trả về 200
                        description: "Cập nhật thành công!",    // Mô tả kết quả trả về
                    },
                },
                security: [
                    
                ]
            }
        }
        , "/user/delete-user/:id": {
            delete: {
                tags: ["user"],
                summary: "Xóa người dùng",
                description: "",
                operationId: "getAdminAccountByID",
                consumes: ["multipart/form-data"],
                produces: ["application/json"],
                parameters: [
                    {
                        "in": "path",
                        "name": "id",
                        "required": "true",
                        "schema": {
                            "type": "integer",
                            "minimum": "1"
                        },
                        "description": "id người dùng"
                    }
                ],
                responses: {
                    200: {                                     // Mã trả về 200
                        description: "Xóa người dùng thành công!",    // Mô tả kết quả trả về
                    },
                },
                security: [
                    
                ]
            }
        }
        ,"/user/get-all": {
            get: {
                tags: ["user"],
                summary: "Lấy thông tin tất cả người dùng!",
                description: "",
                operationId: "getAdminAccountByID",
                consumes: ["multipart/form-data"],
                produces: ["application/json"],
                parameters: [
                   
                ],
                responses: {
                    200: {                                     // Mã trả về 200
                        description: "Lấy tất cả thông tin người dùng thành công!",    // Mô tả kết quả trả về
                    },
                },
                security: [
                    
                ]
            }
        }
        ,"/user/get-detail/:id": {
            get: {
                tags: ["user"],
                summary: "Lấy thông tin cá nhân!",
                description: "",
                operationId: "getAdminAccountByID",
                consumes: ["multipart/form-data"],
                produces: ["application/json"],
                parameters: [
                    {
                        "in": "path",
                        "name": "id",
                        "required": "true",
                        "schema": {
                            "type": "integer",
                            "minimum": "1"
                        },
                        "description": "id người dùng"
                    }
                ],
                responses: {
                    200: {                                     // Mã trả về 200
                        description: "Lấy thông tin các nhân thành công! data",    // Mô tả kết quả trả về
                    },
                },
                security: [
                    
                ]
            }
        }
        ,"/user/refresh-token": {
            get: {
                tags: ["user"],
                summary: "Refesh token khi access_token hết hạn",
                description: "",
                operationId: "getAdminAccountByID",
                consumes: ["multipart/form-data"],
                produces: ["application/json"],
                parameters: [
                   
                ],
                responses: {
                    200: {                                     // Mã trả về 200
                        description: "Refesh token thành công!",    // Mô tả kết quả trả về
                    },
                },
                security: [
                    
                ]
            }
        }, "/product/create": {    // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            post: {        // Phương thức gửi request: get, post, put, delete
                tags: ["product"],
                summary: "Thêm sản phẩm",
                description: "",
                operationId: "createNewAdminAccount",
                consumes: ["multipart/form-data"],    // Loại dữ liệu gửi đi
                produces: ["application/json"],       // Loại dữ liệu trả về
                parameters: [               // Các tham số
                    {
                        "in": "formData",      // Tham số được gửi lên từ form
                        "name": "name",    // Tên tham số
                        "required": "true",    // Tham số là bắt buộc
                        "schema": {
                            "type": "string"   // Loại dữ liệu của tham số là chuỗi
                        },
                        "description": "tên sản phẩm"
                    },
                    {
                        "in": "formData",
                        "name": "countInStock",
                        "required": "true",
                        "schema": {
                            "type": "string"
                        },
                        "description": "Số lượng trong kho"
                    },
                     {
                        "in": "formData",
                        "name": "image",
                        "required": "true",
                        "schema": {
                            "type": "string"
                        },
                        "description": "ảnh sản phẩm"
                    },
                     {
                        "in": "formData",
                        "name": "priceSale",
                        "required": "true",
                        "schema": {
                            "type": "string"
                        },
                        "description": "Giá khuyến mãi"
                    }
                    ,
                     {
                        "in": "formData",
                        "name": "price",
                        "required": "true",
                        "schema": {
                            "type": "string"
                        },
                        "description": "Giá sản phẩm"
                    }
                    ,
                     {
                        "in": "formData",
                        "name": "type",
                        "required": "true",
                        "schema": {
                            "type": "string"
                        },
                        "description": "danh mục"
                    }
                    ,
                     {
                        "in": "formData",
                        "name": "description",
                        "required": "true",
                        "schema": {
                            "type": "string"
                        },
                        "description": "giới thiệu sản phẩm"
                    }
                        ,
                     {
                        "in": "formData",
                        "name": "rating",
                        "required": "true",
                        "schema": {
                            "type": "string"
                        },
                        "description": "đánh giá sản phẩm"
                    }
                        ,
                     {
                        "in": "formData",
                        "name": "selled",
                        "required": "true",
                        "schema": {
                            "type": "string"
                        },
                        "description": "Số lượng đã bán"
                    }
                ],
                responses: {
                    200: {
                        description: "status: 201 CREATED"
                    },
                },
                security: [
                    
                ]
            }
        }
          , "/product/update/:id": {
            put: {
                tags: ["product"],
                summary: "Cập nhật sản phẩm",
                description: "",
                operationId: "getAdminAccountByID",
                consumes: ["multipart/form-data"],
                produces: ["application/json"],
                parameters: [
                    {
                        "in": "path",
                        "name": "id",
                        "required": "true",
                        "schema": {
                            "type": "integer",
                            "minimum": "1"
                        },
                        "description": "id sản phẩm"
                    },{
                        "in": "path",
                        "name": "data",
                        "required": "true",
                        "schema": {
                            "type": "integer",
                            "minimum": "1"
                        },
                        "description": "thông tin cập nhật"
                    }
                ],
                responses: {
                    200: {                                     // Mã trả về 200
                        description: "Cập nhật thành công!",    // Mô tả kết quả trả về
                    },
                },
                security: [
                    
                ]
            }
        }
        , "/product/delete/:id": {
            delete: {
                tags: ["product"],
                summary: "Xóa sản phẩm",
                description: "",
                operationId: "getAdminAccountByID",
                consumes: ["multipart/form-data"],
                produces: ["application/json"],
                parameters: [
                    {
                        "in": "path",
                        "name": "id",
                        "required": "true",
                        "schema": {
                            "type": "integer",
                            "minimum": "1"
                        },
                        "description": "id sản phẩm"
                    }
                ],
                responses: {
                    200: {                                     // Mã trả về 200
                        description: "Xóa sản phẩm thành công!",    // Mô tả kết quả trả về
                    },
                },
                security: [
                    
                ]
            }
        }
        , "/product/detail/:id": {
            get: {
                tags: ["product"],
                summary: "Lấy thông tin sản phẩm",
                description: "",
                operationId: "getAdminAccountByID",
                consumes: ["multipart/form-data"],
                produces: ["application/json"],
                parameters: [
                    {
                        "in": "path",
                        "name": "id",
                        "required": "true",
                        "schema": {
                            "type": "integer",
                            "minimum": "1"
                        },
                        "description": "id sản phẩm"
                    }
                ],
                responses: {
                    200: {                                     // Mã trả về 200
                        description: "Lấy thông tin sản phẩm thành công sản phẩm thành công!",    // Mô tả kết quả trả về
                    },
                },
                security: [
                    
                ]
            }
        }
         , "/product/products": {
            get: {
                tags: ["product"],
                summary: "Lấy thông tin tất cả sản phẩm",
                description: "",
                operationId: "getAdminAccountByID",
                consumes: ["multipart/form-data"],
                produces: ["application/json"],
                parameters: [
                   
                ],
                responses: {
                    200: {                                     // Mã trả về 200
                        description: "Lấy thông tin sản phẩm thành công sản phẩm thành công!",    // Mô tả kết quả trả về
                    },
                },
                security: [
                    
                ]
            }
        }
        , "/product/products&filter=[key]&filter=[keyfilter]": {
            get: {
                tags: ["product"],
                summary: "Lấy thông tin tất cả sản phẩm theo bộ lọc",
                description: "",
                operationId: "getAdminAccountByID",
                consumes: ["multipart/form-data"],
                produces: ["application/json"],
                parameters: [
                   
                ],
                responses: {
                    200: {                                     // Mã trả về 200
                        description: "Lấy thông tin sản phẩm thành công sản phẩm thành công!",    // Mô tả kết quả trả về
                    },
                },
                security: [
                    
                ]
            }
        }
         , "/product/detail/:id": {
            get: {
                tags: ["product"],
                summary: "Lấy thông tin sản phẩm!",
                description: "",
                operationId: "getAdminAccountByID",
                consumes: ["multipart/form-data"],
                produces: ["application/json"],
                parameters: [
                    {
                        "in": "path",
                        "name": "id",
                        "required": "true",
                        "schema": {
                            "type": "integer",
                            "minimum": "1"
                        },
                        "description": "id sản phẩm"
                    }
                ],
                responses: {
                    200: {                                     // Mã trả về 200
                        description: "Lấy thông tin sản phẩm thành công sản phẩm thành công!",    // Mô tả kết quả trả về
                    },
                },
                security: [
                    
                ]
            }
        },"/product/detail/:id": {
            get: {
                tags: ["product"],
                summary: "Lấy thông tin sản phẩm!",
                description: "",
                operationId: "getAdminAccountByID",
                consumes: ["multipart/form-data"],
                produces: ["application/json"],
                parameters: [
                    {
                        "in": "path",
                        "name": "id",
                        "required": "true",
                        "schema": {
                            "type": "integer",
                            "minimum": "1"
                        },
                        "description": "id sản phẩm"
                    }
                ],
                responses: {
                    200: {                                     // Mã trả về 200
                        description: "Lấy thông tin sản phẩm thành công!",    // Mô tả kết quả trả về
                    },
                },
                security: [
                    
                ]
            }
        },"/product/get-all-type": {
            get: {
                tags: ["product"],
                summary: "Lấy danh sách danh mục!",
                description: "",
                operationId: "getAdminAccountByID",
                consumes: ["multipart/form-data"],
                produces: ["application/json"],
                parameters: [
                ],
                responses: {
                    200: {                                     // Mã trả về 200
                        description: "Lấy thông tin thành công!",    // Mô tả kết quả trả về
                    },
                },
                security: [
                    
                ]
            }
        }, "/order/create": {    // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            post: {        // Phương thức gửi request: get, post, put, delete
                tags: ["order"],
                summary: "Thêm đơn hàng",
                description: "",
                operationId: "createNewAdminAccount",
                consumes: ["multipart/form-data"],    // Loại dữ liệu gửi đi
                produces: ["application/json"],       // Loại dữ liệu trả về
                parameters: [               // Các tham số
                ],
                responses: {
                    200: {
                        description: "status: 201 CREATED"
                    },
                },
                security: [
                    
                ]
            }
        }
        , "/order/get-order/:id": {    // Đường dẫn. Kết hợp với host và basePath sẽ thành localhost:3000/api/v1/admin/
            post: {        // Phương thức gửi request: get, post, put, delete
                tags: ["order"],
                summary: "Lấy danh sách đơn hàng cá nhân",
                description: "",
                operationId: "createNewAdminAccount",
                consumes: ["multipart/form-data"],    // Loại dữ liệu gửi đi
                produces: ["application/json"],       // Loại dữ liệu trả về
                parameters: [               // Các tham số
                   
                ],
                responses: {
                    200: {
                        description: "status: 200 lấy thông tin thành công!"
                    },
                },
                security: [
                    
                ]
            }
        }

    },
    securityDefinitions: {    // Thông tin về api key sử dụng để thực hiện request
        api_key: {
            type: "apiKey",      // Thuộc loại api key xác thực
            name: "api_key",     // Tên trường chứa api key xác thực
            in: "header",        // API key được để trong phần header của request
        }
    },
    definitions: {            // Thông tin các đối tượng sẽ trả về
        user: {                 // Tên đối tượng
            type: "object",         // Loại đối tượng là object
            properties: {           // Các thuộc tính của đối tượng
               name: {type: "String"},
        email: {type: "String"},
        password: {type: "String"},
        isAdmin: {type: "Boolean"},
        phone: {type: "Number"},
        avatar: {type: "String"},
        address: {type: "String"},
        sex: {type: "Number"},
        nickname: {type: "String"}
            }
        },
        products: {
            type: "object",
            properties: {
                name: { type: "String", required: true, unique: true },
    image: { type: "String", required: true },
    type: { type: "String", required: true },
    price: { type: "Number", required: true },
    priceSale: { type: "Number" },
    countInStock: { type: "Number", required: true },
    rating: { type: "Number", required: true },
    description: { type: "String", required: true },
    selled: {type: "Number", default: 0}
            }
        },
                order: {
            type: "object",
            properties: {
                orderItems: [
        {
            name: {type: "String", required: true},
            amount: {type: "Number", required: true},
            image: {type: "String", required: true},
            price: {type: "Number", required: true},
            product: {
                type: "mongoose.Schema.Types.ObjectId",
                ref: "Product",
                required: true,
            },
        },
    ],
    shippingAddress: {type: "String", required: true},
    paymentMethod: {type: "String", required: true},
    itemsPrice: {type: "Number", required: true},
    shippingPrice: { type: "Number", required: true},
    totalPrice: {type: "Number", required: true},
    user: {type: "mongoose.Schema.Types.ObjectId", ref: "User",required: true},
    isPaid: {type: "Boolean", default: false},
    paidAt: { type: "String"},
    isDelivered: {type: "Boolean", default: false},
    deliveredAt: {type: "Date"}
            }
        }
    }
};
