(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{dIeQ:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"q1tI\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _content_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"L6HK\");\nvar _content_data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(\"L6HK\", 1);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"soUV\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(\"7vrA\");\n/* harmony import */ var _components_DataTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(\"LtUQ\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components_Layout__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"], {\n    fluid: true\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_components_DataTable__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"], {\n    title: \"Armors\",\n    bordered: true,\n    cols: [{\n      label: 'Name',\n      field: 'name',\n      sortable: true\n    }, {\n      label: 'Defense',\n      field: 'defense',\n      sortable: true,\n      center: true\n    }, {\n      label: 'Soak',\n      field: 'soak',\n      sortable: true,\n      center: true\n    }, {\n      label: 'Encumbrance',\n      field: 'encumbrance',\n      sortable: true,\n      center: true\n    }, {\n      label: 'Hard Points',\n      field: 'hardPoints',\n      sortable: true,\n      center: true\n    }, {\n      label: 'Price',\n      field: 'price',\n      sortable: true,\n      center: true\n    }, {\n      label: 'Rarity',\n      field: 'rarity',\n      sortable: true,\n      center: true\n    }, {\n      label: 'Special',\n      field: 'special'\n    }],\n    data: _content_data_json__WEBPACK_IMPORTED_MODULE_1__[/* armors */ \"a\"],\n    sort: {\n      field: 'name',\n      dir: 'ASC'\n    },\n    rowStyle: function rowStyle(row) {\n      return row.restricted ? {\n        background: 'red',\n        color: 'white'\n      } : {};\n    }\n  })));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvQXJtb3JMaXN0LnRzeD83NDg3Il0sIm5hbWVzIjpbImxhYmVsIiwiZmllbGQiLCJzb3J0YWJsZSIsImNlbnRlciIsIkRhdGEiLCJkaXIiLCJyb3ciLCJyZXN0cmljdGVkIiwiYmFja2dyb3VuZCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLDJFQUFNO0FBQ3BCLFNBQ0Msb0RBQUMsa0VBQUQsUUFDQyxvREFBQywrREFBRDtBQUFXLFNBQUs7QUFBaEIsS0FDQyxvREFBQyxxRUFBRDtBQUNDLFNBQUssRUFBQyxRQURQO0FBRUMsWUFBUSxNQUZUO0FBR0MsUUFBSSxFQUFFLENBQ0w7QUFDQ0EsV0FBSyxFQUFFLE1BRFI7QUFFQ0MsV0FBSyxFQUFFLE1BRlI7QUFHQ0MsY0FBUSxFQUFFO0FBSFgsS0FESyxFQU1MO0FBQ0NGLFdBQUssRUFBRSxTQURSO0FBRUNDLFdBQUssRUFBRSxTQUZSO0FBR0NDLGNBQVEsRUFBRSxJQUhYO0FBSUNDLFlBQU0sRUFBRTtBQUpULEtBTkssRUFZTDtBQUNDSCxXQUFLLEVBQUUsTUFEUjtBQUVDQyxXQUFLLEVBQUUsTUFGUjtBQUdDQyxjQUFRLEVBQUUsSUFIWDtBQUlDQyxZQUFNLEVBQUU7QUFKVCxLQVpLLEVBa0JMO0FBQ0NILFdBQUssRUFBRSxhQURSO0FBRUNDLFdBQUssRUFBRSxhQUZSO0FBR0NDLGNBQVEsRUFBRSxJQUhYO0FBSUNDLFlBQU0sRUFBRTtBQUpULEtBbEJLLEVBd0JMO0FBQ0NILFdBQUssRUFBRSxhQURSO0FBRUNDLFdBQUssRUFBRSxZQUZSO0FBR0NDLGNBQVEsRUFBRSxJQUhYO0FBSUNDLFlBQU0sRUFBRTtBQUpULEtBeEJLLEVBOEJMO0FBQ0NILFdBQUssRUFBRSxPQURSO0FBRUNDLFdBQUssRUFBRSxPQUZSO0FBR0NDLGNBQVEsRUFBRSxJQUhYO0FBSUNDLFlBQU0sRUFBRTtBQUpULEtBOUJLLEVBb0NMO0FBQ0NILFdBQUssRUFBRSxRQURSO0FBRUNDLFdBQUssRUFBRSxRQUZSO0FBR0NDLGNBQVEsRUFBRSxJQUhYO0FBSUNDLFlBQU0sRUFBRTtBQUpULEtBcENLLEVBMENMO0FBQ0NILFdBQUssRUFBRSxTQURSO0FBRUNDLFdBQUssRUFBRTtBQUZSLEtBMUNLLENBSFA7QUFrREMsUUFBSSxFQUFFRyxpRUFsRFA7QUFtREMsUUFBSSxFQUFFO0FBQUVILFdBQUssRUFBRSxNQUFUO0FBQWlCSSxTQUFHLEVBQUU7QUFBdEIsS0FuRFA7QUFvREMsWUFBUSxFQUFFLGtCQUFDQyxHQUFELEVBQWdCO0FBQ3pCLGFBQU9BLEdBQUcsQ0FBQ0MsVUFBSixHQUNKO0FBQ0FDLGtCQUFVLEVBQUUsS0FEWjtBQUVBQyxhQUFLLEVBQUU7QUFGUCxPQURJLEdBS0osRUFMSDtBQU1BO0FBM0RGLElBREQsQ0FERCxDQUREO0FBbUVBLENBcEVEIiwiZmlsZSI6ImRJZVEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgRGF0YSBmcm9tICcuLi8uLi9jb250ZW50L2RhdGEuanNvbidcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgeyBBcm1vciB9IGZyb20gJy4uL2xpYi90eXBlcydcclxuaW1wb3J0IERhdGFUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL0RhdGFUYWJsZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PExheW91dD5cclxuXHRcdFx0PENvbnRhaW5lciBmbHVpZD5cclxuXHRcdFx0XHQ8RGF0YVRhYmxlXHJcblx0XHRcdFx0XHR0aXRsZT1cIkFybW9yc1wiXHJcblx0XHRcdFx0XHRib3JkZXJlZFxyXG5cdFx0XHRcdFx0Y29scz17W1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0bGFiZWw6ICdOYW1lJyxcclxuXHRcdFx0XHRcdFx0XHRmaWVsZDogJ25hbWUnLFxyXG5cdFx0XHRcdFx0XHRcdHNvcnRhYmxlOiB0cnVlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRsYWJlbDogJ0RlZmVuc2UnLFxyXG5cdFx0XHRcdFx0XHRcdGZpZWxkOiAnZGVmZW5zZScsXHJcblx0XHRcdFx0XHRcdFx0c29ydGFibGU6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0Y2VudGVyOiB0cnVlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRsYWJlbDogJ1NvYWsnLFxyXG5cdFx0XHRcdFx0XHRcdGZpZWxkOiAnc29haycsXHJcblx0XHRcdFx0XHRcdFx0c29ydGFibGU6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0Y2VudGVyOiB0cnVlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRsYWJlbDogJ0VuY3VtYnJhbmNlJyxcclxuXHRcdFx0XHRcdFx0XHRmaWVsZDogJ2VuY3VtYnJhbmNlJyxcclxuXHRcdFx0XHRcdFx0XHRzb3J0YWJsZTogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRjZW50ZXI6IHRydWVcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiAnSGFyZCBQb2ludHMnLFxyXG5cdFx0XHRcdFx0XHRcdGZpZWxkOiAnaGFyZFBvaW50cycsXHJcblx0XHRcdFx0XHRcdFx0c29ydGFibGU6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0Y2VudGVyOiB0cnVlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRsYWJlbDogJ1ByaWNlJyxcclxuXHRcdFx0XHRcdFx0XHRmaWVsZDogJ3ByaWNlJyxcclxuXHRcdFx0XHRcdFx0XHRzb3J0YWJsZTogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRjZW50ZXI6IHRydWVcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdGxhYmVsOiAnUmFyaXR5JyxcclxuXHRcdFx0XHRcdFx0XHRmaWVsZDogJ3Jhcml0eScsXHJcblx0XHRcdFx0XHRcdFx0c29ydGFibGU6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0Y2VudGVyOiB0cnVlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRsYWJlbDogJ1NwZWNpYWwnLFxyXG5cdFx0XHRcdFx0XHRcdGZpZWxkOiAnc3BlY2lhbCdcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XX1cclxuXHRcdFx0XHRcdGRhdGE9e0RhdGEuYXJtb3JzfVxyXG5cdFx0XHRcdFx0c29ydD17eyBmaWVsZDogJ25hbWUnLCBkaXI6ICdBU0MnIH19XHJcblx0XHRcdFx0XHRyb3dTdHlsZT17KHJvdzogQXJtb3IpID0+IHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHJvdy5yZXN0cmljdGVkXHJcblx0XHRcdFx0XHRcdFx0PyB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICdyZWQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogJ3doaXRlJ1xyXG5cdFx0XHRcdFx0XHRcdCAgfVxyXG5cdFx0XHRcdFx0XHRcdDoge31cclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9Db250YWluZXI+XHJcblx0XHQ8L0xheW91dD5cclxuXHQpXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///dIeQ\n")}}]);