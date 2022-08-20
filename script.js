TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "label": "KeyPlan_Front_DJI_0663",
  "hfovMin": 60,
  "partial": false,
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_B5B10CC0_AA92_2B25_4194_A02E4DA525DE_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 87.98,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_B5B10CC0_AA92_2B25_4194_A02E4DA525DE_0_HS_1_1_0_map.gif",
           "height": 99,
           "width": 200
          }
         ]
        },
        "pitch": -32.69,
        "yaw": 14.51
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_B5B16CC0_AA92_2B25_41D4_EE93336EC6A1",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_B5B10CC0_AA92_2B25_4194_A02E4DA525DE_0_HS_1_0.png",
           "height": 912,
           "width": 1841
          }
         ]
        },
        "hfov": 87.98,
        "pitch": -32.69,
        "yaw": 14.51
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259, this.camera_D3BFF87C_DE12_6056_41DD_09879D713290); this.mainPlayList.set('selectedIndex', 1); this.setComponentVisibility(this.Container_AA902B2C_A63E_AD36_41C2_0F9433A88998, true, 0, null, null, false)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 103.94,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_B5B10CC0_AA92_2B25_4194_A02E4DA525DE_0_HS_0_0_map.gif",
           "height": 16,
           "width": 38
          }
         ]
        },
        "pitch": -32.33,
        "yaw": 13.48
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_B5B17CC0_AA92_2B25_41D4_9A2A014F75C5",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_B5B10CC0_AA92_2B25_4194_A02E4DA525DE_0_HS_0_0.png",
           "height": 858,
           "width": 2047
          }
         ]
        },
        "hfov": 103.94,
        "pitch": -32.33,
        "yaw": 13.48
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 14.45,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_B5B10CC0_AA92_2B25_4194_A02E4DA525DE_0_HS_4_0_0_map.gif",
           "height": 62,
           "width": 120
          }
         ]
        },
        "pitch": 0.96,
        "yaw": -147.6
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_B5B14CC0_AA92_2B25_41E3_6BB1C9B6CC5E",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_B5B10CC0_AA92_2B25_4194_A02E4DA525DE_0_HS_4_0.png",
           "height": 125,
           "width": 240
          }
         ]
        },
        "hfov": 14.45,
        "pitch": 0.96,
        "yaw": -147.6
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 19.55,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_B5B10CC0_AA92_2B25_4194_A02E4DA525DE_0_HS_3_0_0_map.gif",
           "height": 68,
           "width": 162
          }
         ]
        },
        "pitch": 0.06,
        "yaw": -16.13
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_B44EACC0_AA92_2B25_41D5_ADFFEAC99852",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_B5B10CC0_AA92_2B25_4194_A02E4DA525DE_0_HS_3_0.png",
           "height": 137,
           "width": 325
          }
         ]
        },
        "hfov": 19.55,
        "pitch": 0.06,
        "yaw": -16.13
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 19.87,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_B5B10CC0_AA92_2B25_4194_A02E4DA525DE_0_HS_2_0_0_map.gif",
           "height": 106,
           "width": 165
          }
         ]
        },
        "pitch": -3.17,
        "yaw": -50.4
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_B44E8CC0_AA92_2B25_41D2_6A645F3E2B96",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_B5B10CC0_AA92_2B25_4194_A02E4DA525DE_0_HS_2_0.png",
           "height": 212,
           "width": 331
          }
         ]
        },
        "hfov": 19.87,
        "pitch": -3.17,
        "yaw": -50.4
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B5B10CC0_AA92_2B25_4194_A02E4DA525DE_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B5B10CC0_AA92_2B25_4194_A02E4DA525DE_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B5B10CC0_AA92_2B25_4194_A02E4DA525DE_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B5B10CC0_AA92_2B25_4194_A02E4DA525DE_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B5B10CC0_AA92_2B25_4194_A02E4DA525DE_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B5B10CC0_AA92_2B25_4194_A02E4DA525DE_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B5B10CC0_AA92_2B25_4194_A02E4DA525DE_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B5B10CC0_AA92_2B25_4194_A02E4DA525DE_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B5B10CC0_AA92_2B25_4194_A02E4DA525DE_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B5B10CC0_AA92_2B25_4194_A02E4DA525DE_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_B5B10CC0_AA92_2B25_4194_A02E4DA525DE_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B5B10CC0_AA92_2B25_4194_A02E4DA525DE_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B5B10CC0_AA92_2B25_4194_A02E4DA525DE_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_B5B10CC0_AA92_2B25_4194_A02E4DA525DE"
 },
 {
  "touchControlMode": "drag_rotation",
  "class": "PanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "buttonToggleHotspots": {
   "toolTipTextShadowVerticalLength": 0,
   "height": "76.75%",
   "maxHeight": 70,
   "paddingLeft": 0,
   "toolTipPaddingTop": 9,
   "toolTipShadowSpread": 0,
   "toolTipBorderSize": 0,
   "toolTipFontStyle": "normal",
   "toolTipShadowBlurRadius": 3,
   "toolTipTextShadowColor": "#000000",
   "toolTipPaddingLeft": 14,
   "toolTipTextShadowHorizontalLength": 0,
   "borderRadius": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "pressedIconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9_pressed.png",
   "toolTipFontColor": "#FFFFFF",
   "toolTipShadowColor": "#333333",
   "toolTipTextShadowOpacity": 1,
   "paddingTop": 0,
   "mode": "toggle",
   "class": "IconButton",
   "iconURL": "skin/IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9.png",
   "minWidth": 1,
   "toolTipBorderColor": "#767676",
   "toolTipFontFamily": "Arial",
   "toolTipFontWeight": "normal",
   "toolTipBorderRadius": 1,
   "toolTipFontSize": 13,
   "minHeight": 1,
   "paddingBottom": 0,
   "toolTipOpacity": 0.7,
   "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CDD059FA_EED0_D223_41DB_70ACFBE986FE, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CDD049FB_EED0_D221_41EB_CA2134B978E0, 'hideEffect', false) }",
   "cursor": "hand",
   "toolTipTextShadowBlurRadius": 3,
   "toolTipShadowOpacity": 0,
   "horizontalAlign": "center",
   "paddingRight": 0,
   "transparencyActive": true,
   "toolTipPaddingRight": 14,
   "toolTipBackgroundColor": "#000000",
   "borderSize": 0,
   "id": "IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9",
   "width": "17.15%",
   "toolTip": "Hotspots Visibility",
   "toolTipPaddingBottom": 9,
   "maxWidth": 70,
   "backgroundOpacity": 0
  },
  "mouseControlMode": "drag_rotation",
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "preloadEnabled": false,
  "buttonCardboardView": {
   "maxHeight": 70,
   "paddingLeft": 0,
   "borderRadius": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "paddingTop": 0,
   "mode": "push",
   "class": "IconButton",
   "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
   "minWidth": 1,
   "minHeight": 1,
   "paddingBottom": 0,
   "cursor": "hand",
   "horizontalAlign": "center",
   "paddingRight": 0,
   "transparencyActive": false,
   "borderSize": 0,
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "width": "17.15%",
   "height": "76.75%",
   "maxWidth": 70,
   "backgroundOpacity": 0
  },
  "buttonStop": "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B5B10CC0_AA92_2B25_4194_A02E4DA525DE_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -24.04,
     "targetYaw": -41.05,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.08
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -33.89,
     "targetYaw": 54.69,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.08
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -13.43,
   "yaw": 11.49
  }
 },
 {
  "class": "Panorama",
  "label": "MacroPano",
  "hfovMin": 60,
  "partial": false,
  "hfovMax": 110,
  "thumbnailUrl": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "class": "LensFlarePanoramaOverlay",
      "pitch": 63.47,
      "id": "overlay_85EA09A5_A79D_2D7C_41B8_C11389816DF8",
      "yaw": 70.11,
      "bleachingDistance": 0.4,
      "bleaching": 0.7
     },
     {
      "maps": [
       {
        "hfov": 4.24,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_58_0_0_map.gif",
           "height": 33,
           "width": 35
          }
         ]
        },
        "pitch": -7.87,
        "yaw": 175.83
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8B0187A6_AA9E_256A_41D5_9C3E467657D3",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_58_0.png",
           "height": 66,
           "width": 71
          }
         ]
        },
        "hfov": 4.24,
        "pitch": -7.87,
        "yaw": 175.83
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_B5B10CC0_AA92_2B25_4194_A02E4DA525DE, this.camera_D01B890C_DE12_61B6_41E4_BCC0F0E85220); this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Container_AA902B2C_A63E_AD36_41C2_0F9433A88998, false, 0, null, null, false)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 25.51,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_57_0_map.gif",
           "height": 16,
           "width": 21
          }
         ]
        },
        "pitch": -5.95,
        "yaw": 177.18
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8B0197A6_AA9E_256A_41A9_038973E776D0",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_57_0.png",
           "height": 325,
           "width": 427
          }
         ]
        },
        "hfov": 25.51,
        "pitch": -5.95,
        "yaw": 177.18
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 3.93,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_52_0_0_map.gif",
           "height": 25,
           "width": 33
          }
         ]
        },
        "pitch": -13.14,
        "yaw": -172.92
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8B0167A6_AA9E_256A_41C0_06DC012D42FA",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_52_0.png",
           "height": 50,
           "width": 67
          }
         ]
        },
        "hfov": 3.93,
        "pitch": -13.14,
        "yaw": -172.92
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.Container_AA902B2C_A63E_AD36_41C2_0F9433A88998, true, 0, null, null, false)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 11.31,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_51_0_map.gif",
           "height": 16,
           "width": 19
          }
         ]
        },
        "pitch": -13.72,
        "yaw": -172.11
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8B0177A6_AA9E_256A_41D1_CB883FBF4405",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_51_0.png",
           "height": 160,
           "width": 194
          }
         ]
        },
        "hfov": 11.31,
        "pitch": -13.72,
        "yaw": -172.11
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 4.42,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_50_0_0_map.gif",
           "height": 35,
           "width": 40
          }
         ]
        },
        "pitch": -23.27,
        "yaw": 173.96
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8B0147A6_AA9E_256A_41C4_54CAC15DA002",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_50_0.png",
           "height": 70,
           "width": 80
          }
         ]
        },
        "hfov": 4.42,
        "pitch": -23.27,
        "yaw": 173.96
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 5); this.setComponentVisibility(this.Container_AA902B2C_A63E_AD36_41C2_0F9433A88998, true, 0, null, null, false)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 11.74,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_49_0_map.gif",
           "height": 16,
           "width": 16
          }
         ]
        },
        "pitch": -24.84,
        "yaw": 174.11
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8B0157A6_AA9E_256A_41DC_2C2A3DE72EAA",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_49_0.png",
           "height": 218,
           "width": 215
          }
         ]
        },
        "hfov": 11.74,
        "pitch": -24.84,
        "yaw": 174.11
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 3.3,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_46_0_0_map.gif",
           "height": 32,
           "width": 28
          }
         ]
        },
        "pitch": -17.22,
        "yaw": -158.3
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8B0127A6_AA9E_256A_41E1_59326716E535",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_46_0.png",
           "height": 64,
           "width": 57
          }
         ]
        },
        "hfov": 3.3,
        "pitch": -17.22,
        "yaw": -158.3
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 12); this.setComponentVisibility(this.Container_AA902B2C_A63E_AD36_41C2_0F9433A88998, true, 0, null, null, false)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 14.41,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_60_0_map.gif",
           "height": 16,
           "width": 15
          }
         ]
        },
        "pitch": -15.79,
        "yaw": -157.29
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8B01C7A6_AA9E_256A_41D5_C03F1C8B20DD",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_60_0.png",
           "height": 255,
           "width": 249
          }
         ]
        },
        "hfov": 14.41,
        "pitch": -15.79,
        "yaw": -157.29
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 4.05,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_48_0_0_map.gif",
           "height": 33,
           "width": 38
          }
         ]
        },
        "pitch": -29.41,
        "yaw": -117.47
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8B01D7A6_AA9E_256A_41CA_B785CC1C5D5B",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_48_0.png",
           "height": 67,
           "width": 77
          }
         ]
        },
        "hfov": 4.05,
        "pitch": -29.41,
        "yaw": -117.47
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 18); this.setComponentVisibility(this.Container_AA902B2C_A63E_AD36_41C2_0F9433A88998, true, 0, null, null, false)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 13.32,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_47_0_map.gif",
           "height": 21,
           "width": 15
          }
         ]
        },
        "pitch": -29.05,
        "yaw": -116.86
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8B01A7A6_AA9E_256A_41E1_47DF34C02358",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_47_0.png",
           "height": 337,
           "width": 253
          }
         ]
        },
        "hfov": 13.32,
        "pitch": -29.05,
        "yaw": -116.86
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 4.53,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_42_0_0_map.gif",
           "height": 34,
           "width": 40
          }
         ]
        },
        "pitch": -19.48,
        "yaw": -88.95
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8B01B7A6_AA9E_256A_41DD_5B4E762FE399",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_42_0.png",
           "height": 68,
           "width": 80
          }
         ]
        },
        "hfov": 4.53,
        "pitch": -19.48,
        "yaw": -88.95
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 22); this.setComponentVisibility(this.Container_AA902B2C_A63E_AD36_41C2_0F9433A88998, true, 0, null, null, false)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 14.62,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_59_0_map.gif",
           "height": 17,
           "width": 16
          }
         ]
        },
        "pitch": -18.94,
        "yaw": -88.62
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8B0187A6_AA9E_256A_41DF_CA914CB59B9F",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_59_0.png",
           "height": 288,
           "width": 257
          }
         ]
        },
        "hfov": 14.62,
        "pitch": -18.94,
        "yaw": -88.62
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 4.19,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_44_0_0_map.gif",
           "height": 39,
           "width": 36
          }
         ]
        },
        "pitch": -17.98,
        "yaw": -55.77
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8B0167A6_AA9E_256A_41D3_24F44C0CA402",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_44_0.png",
           "height": 79,
           "width": 73
          }
         ]
        },
        "hfov": 4.19,
        "pitch": -17.98,
        "yaw": -55.77
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 26); this.setComponentVisibility(this.Container_AA902B2C_A63E_AD36_41C2_0F9433A88998, true, 0, null, null, false)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 10.41,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_43_0_map.gif",
           "height": 17,
           "width": 16
          }
         ]
        },
        "pitch": -17.19,
        "yaw": -56.04
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8B0177A6_AA9E_256A_41E4_C4E0F45FCBD3",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_43_0.png",
           "height": 201,
           "width": 181
          }
         ]
        },
        "hfov": 10.41,
        "pitch": -17.19,
        "yaw": -56.04
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 4.62,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_56_0_0_map.gif",
           "height": 37,
           "width": 39
          }
         ]
        },
        "pitch": -11.8,
        "yaw": -43.1
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8B0147A6_AA9E_256A_41B8_87BBABD6F463",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_56_0.png",
           "height": 75,
           "width": 78
          }
         ]
        },
        "hfov": 4.62,
        "pitch": -11.8,
        "yaw": -43.1
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_A1F859A1_AAF2_2D67_41E2_7A828B16DDEE, this.camera_D009992F_DE12_61F2_41E3_A2ABF1FF6FE2); this.mainPlayList.set('selectedIndex', 30); this.setComponentVisibility(this.Container_AA902B2C_A63E_AD36_41C2_0F9433A88998, false, 0, null, null, false)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 20.55,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_55_0_map.gif",
           "height": 16,
           "width": 16
          }
         ]
        },
        "pitch": -12.35,
        "yaw": -42.03
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8B0157A6_AA9E_256A_41DD_854D87E5FAB2",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_55_0.png",
           "height": 338,
           "width": 350
          }
         ]
        },
        "hfov": 20.55,
        "pitch": -12.35,
        "yaw": -42.03
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 4.47,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_54_0_0_map.gif",
           "height": 31,
           "width": 39
          }
         ]
        },
        "pitch": -18.89,
        "yaw": -137.14
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8B0127A6_AA9E_256A_41DE_F41C0D3353E9",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_54_0.png",
           "height": 62,
           "width": 78
          }
         ]
        },
        "hfov": 4.47,
        "pitch": -18.89,
        "yaw": -137.14
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 59)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 14.47,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_53_0_map.gif",
           "height": 16,
           "width": 16
          }
         ]
        },
        "pitch": -20.06,
        "yaw": -136.88
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8B0137A6_AA9E_256A_41DD_E2F09A8FB0C3",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_0_HS_53_0.png",
           "height": 269,
           "width": 256
          }
         ]
        },
        "hfov": 14.47,
        "pitch": -20.06,
        "yaw": -136.88
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -8.78,
     "targetYaw": -56.46,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -17.62,
     "targetYaw": -147.92,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "hfov": 90,
   "class": "PanoramaCameraPosition",
   "pitch": -18.34,
   "yaw": 163.57
  }
 },
 {
  "class": "Panorama",
  "label": "S1",
  "hfovMin": 60,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_8B05ECCC_AA92_2B3E_41E3_20EE07DC2942_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 3.46,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B05ECCC_AA92_2B3E_41E3_20EE07DC2942_0_HS_10_0_0_map.gif",
           "height": 39,
           "width": 37
          }
         ]
        },
        "pitch": -39.92,
        "yaw": -37.1
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8B1A3CCC_AA92_2B3E_41D1_854693456D18",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B05ECCC_AA92_2B3E_41E3_20EE07DC2942_0_HS_10_0.png",
           "height": 78,
           "width": 75
          }
         ]
        },
        "hfov": 3.46,
        "pitch": -39.92,
        "yaw": -37.1
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 3)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 21.71,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B05ECCC_AA92_2B3E_41E3_20EE07DC2942_0_HS_5_0_map.gif",
           "height": 18,
           "width": 16
          }
         ]
        },
        "pitch": -39.83,
        "yaw": -37.49
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8B05CCCC_AA92_2B3E_41D4_6098DB9DE1BF",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B05ECCC_AA92_2B3E_41E3_20EE07DC2942_0_HS_5_0.png",
           "height": 530,
           "width": 471
          }
         ]
        },
        "hfov": 21.71,
        "pitch": -39.83,
        "yaw": -37.49
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 3.58,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B05ECCC_AA92_2B3E_41E3_20EE07DC2942_0_HS_9_0_0_map.gif",
           "height": 31,
           "width": 32
          }
         ]
        },
        "pitch": -21.55,
        "yaw": -57.31
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8B1A1CCC_AA92_2B3E_41DF_B5E0F7BC7C90",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B05ECCC_AA92_2B3E_41E3_20EE07DC2942_0_HS_9_0.png",
           "height": 62,
           "width": 64
          }
         ]
        },
        "hfov": 3.58,
        "pitch": -21.55,
        "yaw": -57.31
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 21.72,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B05ECCC_AA92_2B3E_41E3_20EE07DC2942_0_HS_4_0_map.gif",
           "height": 16,
           "width": 19
          }
         ]
        },
        "pitch": -21.59,
        "yaw": -55.14
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8B1A2CCC_AA92_2B3E_41E4_C769DF52B083",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_8B05ECCC_AA92_2B3E_41E3_20EE07DC2942_0_HS_4_0.png",
           "height": 316,
           "width": 389
          }
         ]
        },
        "hfov": 21.72,
        "pitch": -21.59,
        "yaw": -55.14
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8B05ECCC_AA92_2B3E_41E3_20EE07DC2942_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8B05ECCC_AA92_2B3E_41E3_20EE07DC2942_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8B05ECCC_AA92_2B3E_41E3_20EE07DC2942_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8B05ECCC_AA92_2B3E_41E3_20EE07DC2942_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8B05ECCC_AA92_2B3E_41E3_20EE07DC2942_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8B05ECCC_AA92_2B3E_41E3_20EE07DC2942_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8B05ECCC_AA92_2B3E_41E3_20EE07DC2942_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8B05ECCC_AA92_2B3E_41E3_20EE07DC2942_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8B05ECCC_AA92_2B3E_41E3_20EE07DC2942_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8B05ECCC_AA92_2B3E_41E3_20EE07DC2942_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_8B05ECCC_AA92_2B3E_41E3_20EE07DC2942_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8B05ECCC_AA92_2B3E_41E3_20EE07DC2942_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_8B05ECCC_AA92_2B3E_41E3_20EE07DC2942_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_8B05ECCC_AA92_2B3E_41E3_20EE07DC2942"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_8B05ECCC_AA92_2B3E_41E3_20EE07DC2942_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -26.21,
     "targetYaw": 1.64,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -23.68,
     "targetYaw": -69.35,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -38.91,
   "yaw": 72.51
  }
 },
 {
  "class": "Panorama",
  "label": "S1V1",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_6FA625B7_6461_9D17_41D0_6D6DDB5A74A4_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 7.57,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_6FA625B7_6461_9D17_41D0_6D6DDB5A74A4_0_HS_10_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -2.21,
        "yaw": -160.04
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_B0801036_A65A_DB13_41E1_1399917F7D4B",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_6FA625B7_6461_9D17_41D0_6D6DDB5A74A4_0_HS_10_0.png",
           "height": 126,
           "width": 126
          }
         ]
        },
        "hfov": 7.57,
        "pitch": -2.21,
        "yaw": -160.04
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 39)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 76.81,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_6FA625B7_6461_9D17_41D0_6D6DDB5A74A4_0_HS_9_0_map.gif",
           "height": 16,
           "width": 23
          }
         ]
        },
        "pitch": -6.43,
        "yaw": -149.94
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_B08AB741_A65A_A56E_4181_07BCBDF47828",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_6FA625B7_6461_9D17_41D0_6D6DDB5A74A4_0_HS_9_0.png",
           "height": 887,
           "width": 1288
          }
         ]
        },
        "hfov": 76.81,
        "pitch": -6.43,
        "yaw": -149.94
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 7.57,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_6FA625B7_6461_9D17_41D0_6D6DDB5A74A4_0_HS_8_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": 2.09,
        "yaw": -35.37
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_BD177DCD_A65F_E571_419D_E8C47206DCB2",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_6FA625B7_6461_9D17_41D0_6D6DDB5A74A4_0_HS_8_0.png",
           "height": 126,
           "width": 126
          }
         ]
        },
        "hfov": 7.57,
        "pitch": 2.09,
        "yaw": -35.37
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 47)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 152.65,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_6FA625B7_6461_9D17_41D0_6D6DDB5A74A4_0_HS_7_0_map.gif",
           "height": 16,
           "width": 36
          }
         ]
        },
        "pitch": -9.14,
        "yaw": -2.15
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_BFD91402_A65F_BAF2_41D4_31F49D984C93",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_6FA625B7_6461_9D17_41D0_6D6DDB5A74A4_0_HS_7_0.png",
           "height": 892,
           "width": 2047
          }
         ]
        },
        "hfov": 152.65,
        "pitch": -9.14,
        "yaw": -2.15
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6FA625B7_6461_9D17_41D0_6D6DDB5A74A4_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6FA625B7_6461_9D17_41D0_6D6DDB5A74A4_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6FA625B7_6461_9D17_41D0_6D6DDB5A74A4_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6FA625B7_6461_9D17_41D0_6D6DDB5A74A4_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6FA625B7_6461_9D17_41D0_6D6DDB5A74A4_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6FA625B7_6461_9D17_41D0_6D6DDB5A74A4_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6FA625B7_6461_9D17_41D0_6D6DDB5A74A4_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6FA625B7_6461_9D17_41D0_6D6DDB5A74A4_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6FA625B7_6461_9D17_41D0_6D6DDB5A74A4_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6FA625B7_6461_9D17_41D0_6D6DDB5A74A4_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_6FA625B7_6461_9D17_41D0_6D6DDB5A74A4_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6FA625B7_6461_9D17_41D0_6D6DDB5A74A4_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6FA625B7_6461_9D17_41D0_6D6DDB5A74A4_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_6FA625B7_6461_9D17_41D0_6D6DDB5A74A4"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_6FA625B7_6461_9D17_41D0_6D6DDB5A74A4_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -1.71,
     "targetYaw": 122.4,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -4.74,
     "targetYaw": -128.97,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "label": "S1V2",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_6EB2135E_6460_7519_41B1_8EC107ECF1E8_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 6.55,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_6EB2135E_6460_7519_41B1_8EC107ECF1E8_0_HS_29_0_0_map.gif",
           "height": 55,
           "width": 55
          }
         ]
        },
        "pitch": -9.32,
        "yaw": 107.73
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_468F72A0_6421_9729_41CB_3B549BC47EAF",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_6EB2135E_6460_7519_41B1_8EC107ECF1E8_0_HS_29_0.png",
           "height": 110,
           "width": 110
          }
         ]
        },
        "hfov": 6.55,
        "pitch": -9.32,
        "yaw": 107.73
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 31)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 90.82,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_6EB2135E_6460_7519_41B1_8EC107ECF1E8_0_HS_28_0_map.gif",
           "height": 16,
           "width": 33
          }
         ]
        },
        "pitch": 0.52,
        "yaw": 86.03
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_4006F26A_6421_B739_41B1_0B6633B79F87",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_6EB2135E_6460_7519_41B1_8EC107ECF1E8_0_HS_28_0.png",
           "height": 715,
           "width": 1513
          }
         ]
        },
        "hfov": 90.82,
        "pitch": 0.52,
        "yaw": 86.03
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 6.59,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_6EB2135E_6460_7519_41B1_8EC107ECF1E8_0_HS_27_0_0_map.gif",
           "height": 55,
           "width": 55
          }
         ]
        },
        "pitch": -6.63,
        "yaw": -12.83
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_466D8F8E_6420_ADF9_41D4_81C86B9EB27A",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_6EB2135E_6460_7519_41B1_8EC107ECF1E8_0_HS_27_0.png",
           "height": 110,
           "width": 110
          }
         ]
        },
        "hfov": 6.59,
        "pitch": -6.63,
        "yaw": -12.83
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 53)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 134.98,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_6EB2135E_6460_7519_41B1_8EC107ECF1E8_0_HS_26_0_map.gif",
           "height": 16,
           "width": 33
          }
         ]
        },
        "pitch": -1.62,
        "yaw": -48.88
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_4C0720EF_6421_9337_41D1_5FFC3470E9A1",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_6EB2135E_6460_7519_41B1_8EC107ECF1E8_0_HS_26_0.png",
           "height": 984,
           "width": 2048
          }
         ]
        },
        "hfov": 134.98,
        "pitch": -1.62,
        "yaw": -48.88
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6EB2135E_6460_7519_41B1_8EC107ECF1E8_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6EB2135E_6460_7519_41B1_8EC107ECF1E8_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6EB2135E_6460_7519_41B1_8EC107ECF1E8_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6EB2135E_6460_7519_41B1_8EC107ECF1E8_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6EB2135E_6460_7519_41B1_8EC107ECF1E8_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6EB2135E_6460_7519_41B1_8EC107ECF1E8_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6EB2135E_6460_7519_41B1_8EC107ECF1E8_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6EB2135E_6460_7519_41B1_8EC107ECF1E8_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6EB2135E_6460_7519_41B1_8EC107ECF1E8_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6EB2135E_6460_7519_41B1_8EC107ECF1E8_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_6EB2135E_6460_7519_41B1_8EC107ECF1E8_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6EB2135E_6460_7519_41B1_8EC107ECF1E8_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6EB2135E_6460_7519_41B1_8EC107ECF1E8_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_6EB2135E_6460_7519_41B1_8EC107ECF1E8"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_6EB2135E_6460_7519_41B1_8EC107ECF1E8_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 0.82,
     "targetYaw": 31.2,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 1.58,
     "targetYaw": 131.49,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 2.87,
   "yaw": -88.35
  }
 },
 {
  "class": "Panorama",
  "label": "S2",
  "hfovMin": 60,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 5.06,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_0_HS_7_0_0_map.gif",
           "height": 46,
           "width": 59
          }
         ]
        },
        "pitch": -45.29,
        "yaw": 59.4
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A48D0388_AB72_7D25_41D4_11FD55353FA5",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_0_HS_7_0.png",
           "height": 93,
           "width": 119
          }
         ]
        },
        "hfov": 5.06,
        "pitch": -45.29,
        "yaw": 59.4
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 6)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 19.23,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_0_HS_6_0_map.gif",
           "height": 16,
           "width": 21
          }
         ]
        },
        "pitch": -45.41,
        "yaw": 60.05
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A48D3388_AB72_7D25_41AB_834163298302",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_0_HS_6_0.png",
           "height": 333,
           "width": 456
          }
         ]
        },
        "hfov": 19.23,
        "pitch": -45.41,
        "yaw": 60.05
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 5.03,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_0_HS_5_0_0_map.gif",
           "height": 38,
           "width": 47
          }
         ]
        },
        "pitch": -27.69,
        "yaw": 75.38
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A48D2388_AB72_7D25_41CD_5328043EA58F",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_0_HS_5_0.png",
           "height": 77,
           "width": 94
          }
         ]
        },
        "hfov": 5.03,
        "pitch": -27.69,
        "yaw": 75.38
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 7)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 33,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_0_HS_4_0_map.gif",
           "height": 16,
           "width": 24
          }
         ]
        },
        "pitch": -28.04,
        "yaw": 78.46
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A48CC388_AB72_7D25_41DC_5DD99B6EBF5C",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_0_HS_4_0.png",
           "height": 408,
           "width": 622
          }
         ]
        },
        "hfov": 33,
        "pitch": -28.04,
        "yaw": 78.46
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 6.35,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_0_HS_3_0_0_map.gif",
           "height": 52,
           "width": 59
          }
         ]
        },
        "pitch": -26.85,
        "yaw": 156.64
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A48CF388_AB72_7D25_41C5_7288556C9EEA",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_0_HS_3_0.png",
           "height": 105,
           "width": 118
          }
         ]
        },
        "hfov": 6.35,
        "pitch": -26.85,
        "yaw": 156.64
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 9)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 22.56,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_0_HS_10_0_map.gif",
           "height": 16,
           "width": 16
          }
         ]
        },
        "pitch": -26.59,
        "yaw": 157
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A415A776_AB92_25ED_41C2_46520DFA7BE2",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_0_HS_10_0.png",
           "height": 423,
           "width": 419
          }
         ]
        },
        "hfov": 22.56,
        "pitch": -26.59,
        "yaw": 157
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 4.85,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_0_HS_9_0_0_map.gif",
           "height": 46,
           "width": 61
          }
         ]
        },
        "pitch": -48.68,
        "yaw": 139.47
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A48CE388_AB72_7D25_41DA_B85A512E2EA5",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_0_HS_9_0.png",
           "height": 92,
           "width": 122
          }
         ]
        },
        "hfov": 4.85,
        "pitch": -48.68,
        "yaw": 139.47
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 8)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 19.64,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_0_HS_8_0_map.gif",
           "height": 16,
           "width": 18
          }
         ]
        },
        "pitch": -48.77,
        "yaw": 141.26
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A48CB388_AB72_7D25_41B1_0B269EE779D5",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_0_HS_8_0.png",
           "height": 427,
           "width": 496
          }
         ]
        },
        "hfov": 19.64,
        "pitch": -48.77,
        "yaw": 141.26
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -17.39,
     "targetYaw": 67.07,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.09
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -36.84,
     "targetYaw": 145.64,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.09
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -23.48,
   "yaw": -3.54
  }
 },
 {
  "class": "Panorama",
  "label": "S2V1-min",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_6E41768D_6460_7FFB_41B8_BECD361802CC_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41768D_6460_7FFB_41B8_BECD361802CC_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41768D_6460_7FFB_41B8_BECD361802CC_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41768D_6460_7FFB_41B8_BECD361802CC_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41768D_6460_7FFB_41B8_BECD361802CC_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41768D_6460_7FFB_41B8_BECD361802CC_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41768D_6460_7FFB_41B8_BECD361802CC_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41768D_6460_7FFB_41B8_BECD361802CC_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41768D_6460_7FFB_41B8_BECD361802CC_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41768D_6460_7FFB_41B8_BECD361802CC_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41768D_6460_7FFB_41B8_BECD361802CC_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41768D_6460_7FFB_41B8_BECD361802CC_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41768D_6460_7FFB_41B8_BECD361802CC_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_6E41768D_6460_7FFB_41B8_BECD361802CC_t.jpg"
   }
  ],
  "pitch": 0,
  "id": "panorama_6E41768D_6460_7FFB_41B8_BECD361802CC"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_6E41768D_6460_7FFB_41B8_BECD361802CC_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -2.46,
     "targetYaw": 62.27,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": -0.51,
   "yaw": -50.78
  }
 },
 {
  "class": "Panorama",
  "label": "S2V2-min",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_6E4180B4_6460_9329_41D5_D2E67711ED96_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 7.16,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_6E4180B4_6460_9329_41D5_D2E67711ED96_0_HS_3_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -19.14,
        "yaw": 67.07
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_4D13CDD8_6421_AD18_41CC_DAA2E42C6959",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_6E4180B4_6460_9329_41D5_D2E67711ED96_0_HS_3_0.png",
           "height": 126,
           "width": 126
          }
         ]
        },
        "hfov": 7.16,
        "pitch": -19.14,
        "yaw": 67.07
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 31)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 163,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_6E4180B4_6460_9329_41D5_D2E67711ED96_0_HS_2_0_map.gif",
           "height": 16,
           "width": 33
          }
         ]
        },
        "pitch": -7.64,
        "yaw": 68.72
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_406B0E5B_6420_6F1F_4190_F177E9E5AE62",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_6E4180B4_6460_9329_41D5_D2E67711ED96_0_HS_2_0.png",
           "height": 972,
           "width": 2047
          }
         ]
        },
        "hfov": 163,
        "pitch": -7.64,
        "yaw": 68.72
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 7.21,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_6E4180B4_6460_9329_41D5_D2E67711ED96_0_HS_1_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -18.07,
        "yaw": -125.81
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_431A01E1_6421_B52B_41A4_B08B199C819D",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_6E4180B4_6460_9329_41D5_D2E67711ED96_0_HS_1_0.png",
           "height": 126,
           "width": 126
          }
         ]
        },
        "hfov": 7.21,
        "pitch": -18.07,
        "yaw": -125.81
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 39)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 78.79,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_6E4180B4_6460_9329_41D5_D2E67711ED96_0_HS_4_0_map.gif",
           "height": 16,
           "width": 21
          }
         ]
        },
        "pitch": -5.25,
        "yaw": -139.62
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_B62C2B89_AA96_2D39_41B4_362E8010E755",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_6E4180B4_6460_9329_41D5_D2E67711ED96_0_HS_4_0.png",
           "height": 986,
           "width": 1318
          }
         ]
        },
        "hfov": 78.79,
        "pitch": -5.25,
        "yaw": -139.62
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E4180B4_6460_9329_41D5_D2E67711ED96_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E4180B4_6460_9329_41D5_D2E67711ED96_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E4180B4_6460_9329_41D5_D2E67711ED96_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E4180B4_6460_9329_41D5_D2E67711ED96_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E4180B4_6460_9329_41D5_D2E67711ED96_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E4180B4_6460_9329_41D5_D2E67711ED96_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E4180B4_6460_9329_41D5_D2E67711ED96_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E4180B4_6460_9329_41D5_D2E67711ED96_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E4180B4_6460_9329_41D5_D2E67711ED96_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E4180B4_6460_9329_41D5_D2E67711ED96_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_6E4180B4_6460_9329_41D5_D2E67711ED96_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E4180B4_6460_9329_41D5_D2E67711ED96_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E4180B4_6460_9329_41D5_D2E67711ED96_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_6E4180B4_6460_9329_41D5_D2E67711ED96"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_6E4180B4_6460_9329_41D5_D2E67711ED96_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 0.32,
     "targetYaw": -28.67,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -1.45,
     "targetYaw": 101.94,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0.25,
   "yaw": -120.25
  }
 },
 {
  "class": "Panorama",
  "label": "S2V3-min",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_6E419ACC_6460_9779_41C9_4EFA8552AE7C_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E419ACC_6460_9779_41C9_4EFA8552AE7C_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E419ACC_6460_9779_41C9_4EFA8552AE7C_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E419ACC_6460_9779_41C9_4EFA8552AE7C_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E419ACC_6460_9779_41C9_4EFA8552AE7C_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E419ACC_6460_9779_41C9_4EFA8552AE7C_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E419ACC_6460_9779_41C9_4EFA8552AE7C_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E419ACC_6460_9779_41C9_4EFA8552AE7C_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E419ACC_6460_9779_41C9_4EFA8552AE7C_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E419ACC_6460_9779_41C9_4EFA8552AE7C_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E419ACC_6460_9779_41C9_4EFA8552AE7C_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E419ACC_6460_9779_41C9_4EFA8552AE7C_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E419ACC_6460_9779_41C9_4EFA8552AE7C_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_6E419ACC_6460_9779_41C9_4EFA8552AE7C_t.jpg"
   }
  ],
  "pitch": 0,
  "id": "panorama_6E419ACC_6460_9779_41C9_4EFA8552AE7C"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_6E419ACC_6460_9779_41C9_4EFA8552AE7C_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -2.46,
     "targetYaw": 32.97,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0.51,
   "yaw": -147.79
  }
 },
 {
  "class": "Panorama",
  "label": "S2A1-min",
  "hfovMin": 60,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_A0D78D46_AAF2_252A_41E1_DA2823B073ED_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 5.05,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A0D78D46_AAF2_252A_41E1_DA2823B073ED_0_HS_3_0_0_map.gif",
           "height": 39,
           "width": 47
          }
         ]
        },
        "pitch": -27.23,
        "yaw": -6.05
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A0D79D46_AAF2_252A_41D8_2B745FF3DD42",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A0D78D46_AAF2_252A_41E1_DA2823B073ED_0_HS_3_0.png",
           "height": 78,
           "width": 94
          }
         ]
        },
        "hfov": 5.05,
        "pitch": -27.23,
        "yaw": -6.05
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 10)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 25.52,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A0D78D46_AAF2_252A_41E1_DA2823B073ED_0_HS_2_0_map.gif",
           "height": 17,
           "width": 15
          }
         ]
        },
        "pitch": -27.5,
        "yaw": -6.33
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A0D66D46_AAF2_252A_41D4_7C5FFFDBD536",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A0D78D46_AAF2_252A_41E1_DA2823B073ED_0_HS_2_0.png",
           "height": 521,
           "width": 479
          }
         ]
        },
        "hfov": 25.52,
        "pitch": -27.5,
        "yaw": -6.33
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 6.29,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A0D78D46_AAF2_252A_41E1_DA2823B073ED_0_HS_1_0_0_map.gif",
           "height": 60,
           "width": 69
          }
         ]
        },
        "pitch": -41.45,
        "yaw": 73.4
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A0D67D46_AAF2_252A_41C0_4684D57E5E33",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A0D78D46_AAF2_252A_41E1_DA2823B073ED_0_HS_1_0.png",
           "height": 120,
           "width": 139
          }
         ]
        },
        "hfov": 6.29,
        "pitch": -41.45,
        "yaw": 73.4
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 11)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 27.77,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A0D78D46_AAF2_252A_41E1_DA2823B073ED_0_HS_0_0_map.gif",
           "height": 16,
           "width": 21
          }
         ]
        },
        "pitch": -41.15,
        "yaw": 73.99
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A0D64D46_AAF2_252A_41E1_2DDCEB732334",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A0D78D46_AAF2_252A_41E1_DA2823B073ED_0_HS_0_0.png",
           "height": 457,
           "width": 614
          }
         ]
        },
        "hfov": 27.77,
        "pitch": -41.15,
        "yaw": 73.99
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A0D78D46_AAF2_252A_41E1_DA2823B073ED_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A0D78D46_AAF2_252A_41E1_DA2823B073ED_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A0D78D46_AAF2_252A_41E1_DA2823B073ED_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A0D78D46_AAF2_252A_41E1_DA2823B073ED_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A0D78D46_AAF2_252A_41E1_DA2823B073ED_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A0D78D46_AAF2_252A_41E1_DA2823B073ED_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A0D78D46_AAF2_252A_41E1_DA2823B073ED_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A0D78D46_AAF2_252A_41E1_DA2823B073ED_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A0D78D46_AAF2_252A_41E1_DA2823B073ED_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A0D78D46_AAF2_252A_41E1_DA2823B073ED_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_A0D78D46_AAF2_252A_41E1_DA2823B073ED_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A0D78D46_AAF2_252A_41E1_DA2823B073ED_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A0D78D46_AAF2_252A_41E1_DA2823B073ED_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_A0D78D46_AAF2_252A_41E1_DA2823B073ED"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_A0D78D46_AAF2_252A_41E1_DA2823B073ED_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -36.82,
     "targetYaw": 64.29,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -23.94,
     "targetYaw": 176.21,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -19.45,
   "yaw": 0.76
  }
 },
 {
  "class": "Panorama",
  "label": "S2A1V1-min",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_A134FC60_AAF2_EBE6_41BE_1FDE12BD11F2_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A134FC60_AAF2_EBE6_41BE_1FDE12BD11F2_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A134FC60_AAF2_EBE6_41BE_1FDE12BD11F2_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A134FC60_AAF2_EBE6_41BE_1FDE12BD11F2_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A134FC60_AAF2_EBE6_41BE_1FDE12BD11F2_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A134FC60_AAF2_EBE6_41BE_1FDE12BD11F2_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A134FC60_AAF2_EBE6_41BE_1FDE12BD11F2_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A134FC60_AAF2_EBE6_41BE_1FDE12BD11F2_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A134FC60_AAF2_EBE6_41BE_1FDE12BD11F2_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A134FC60_AAF2_EBE6_41BE_1FDE12BD11F2_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A134FC60_AAF2_EBE6_41BE_1FDE12BD11F2_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A134FC60_AAF2_EBE6_41BE_1FDE12BD11F2_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A134FC60_AAF2_EBE6_41BE_1FDE12BD11F2_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_A134FC60_AAF2_EBE6_41BE_1FDE12BD11F2_t.jpg"
   }
  ],
  "pitch": 0,
  "id": "panorama_A134FC60_AAF2_EBE6_41BE_1FDE12BD11F2"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_A134FC60_AAF2_EBE6_41BE_1FDE12BD11F2_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 0.32,
     "targetYaw": -99.41,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": -2.02,
   "yaw": 15.16
  }
 },
 {
  "class": "Panorama",
  "label": "S2A1V2-min",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_A1328670_AAF2_67E5_41D9_FB677AF8ABD5_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1328670_AAF2_67E5_41D9_FB677AF8ABD5_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1328670_AAF2_67E5_41D9_FB677AF8ABD5_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1328670_AAF2_67E5_41D9_FB677AF8ABD5_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1328670_AAF2_67E5_41D9_FB677AF8ABD5_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1328670_AAF2_67E5_41D9_FB677AF8ABD5_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1328670_AAF2_67E5_41D9_FB677AF8ABD5_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1328670_AAF2_67E5_41D9_FB677AF8ABD5_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1328670_AAF2_67E5_41D9_FB677AF8ABD5_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1328670_AAF2_67E5_41D9_FB677AF8ABD5_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1328670_AAF2_67E5_41D9_FB677AF8ABD5_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1328670_AAF2_67E5_41D9_FB677AF8ABD5_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1328670_AAF2_67E5_41D9_FB677AF8ABD5_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_A1328670_AAF2_67E5_41D9_FB677AF8ABD5_t.jpg"
   }
  ],
  "pitch": 0,
  "id": "panorama_A1328670_AAF2_67E5_41D9_FB677AF8ABD5"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_A1328670_AAF2_67E5_41D9_FB677AF8ABD5_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 6.63,
     "targetYaw": -132.25,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 12.13,
   "yaw": 40.67
  }
 },
 {
  "class": "Panorama",
  "label": "S3",
  "hfovMin": 60,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 3.64,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5_0_HS_3_0_0_map.gif",
           "height": 52,
           "width": 65
          }
         ]
        },
        "pitch": -62.49,
        "yaw": -17.5
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A4F4384F_AB72_6B3B_41B2_41607A0D27E1",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5_0_HS_3_0.png",
           "height": 105,
           "width": 131
          }
         ]
        },
        "hfov": 3.64,
        "pitch": -62.49,
        "yaw": -17.5
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 14)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 13.67,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5_0_HS_2_0_map.gif",
           "height": 17,
           "width": 16
          }
         ]
        },
        "pitch": -63.19,
        "yaw": -16.03
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A4F4C84F_AB72_6B3B_41D4_C761EC4E3055",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5_0_HS_2_0.png",
           "height": 565,
           "width": 505
          }
         ]
        },
        "hfov": 13.67,
        "pitch": -63.19,
        "yaw": -16.03
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 5.52,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5_0_HS_1_0_0_map.gif",
           "height": 38,
           "width": 47
          }
         ]
        },
        "pitch": -14.6,
        "yaw": 163.85
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A4F4D84F_AB72_6B3B_41CE_635D1C9AEA62",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5_0_HS_1_0.png",
           "height": 76,
           "width": 95
          }
         ]
        },
        "hfov": 5.52,
        "pitch": -14.6,
        "yaw": 163.85
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 13)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 36.89,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5_0_HS_0_0_map.gif",
           "height": 16,
           "width": 34
          }
         ]
        },
        "pitch": -11.45,
        "yaw": 163.95
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A4F4E84F_AB72_6B3B_41E2_CFBF573D0012",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5_0_HS_0_0.png",
           "height": 290,
           "width": 627
          }
         ]
        },
        "hfov": 36.89,
        "pitch": -11.45,
        "yaw": 163.95
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 6.52,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5_0_HS_7_0_0_map.gif",
           "height": 54,
           "width": 60
          }
         ]
        },
        "pitch": -25.36,
        "yaw": 162.49
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A4F4F84F_AB72_6B3B_41E3_8F01A9CC64FC",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5_0_HS_7_0.png",
           "height": 108,
           "width": 120
          }
         ]
        },
        "hfov": 6.52,
        "pitch": -25.36,
        "yaw": 162.49
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 59)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 48.3,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5_0_HS_6_0_map.gif",
           "height": 16,
           "width": 26
          }
         ]
        },
        "pitch": -29.98,
        "yaw": 151.29
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A4F4984F_AB72_6B3B_419B_86CBBA8A74F8",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5_0_HS_6_0.png",
           "height": 558,
           "width": 929
          }
         ]
        },
        "hfov": 48.3,
        "pitch": -29.98,
        "yaw": 151.29
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -23.68,
     "targetYaw": -3.92,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -33.03,
     "targetYaw": -97.39,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -27.28,
   "yaw": 160.17
  }
 },
 {
  "class": "Panorama",
  "label": "S3V1-min",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_B9E01B04_A6EE_AEF6_41DB_0E71973BB561_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 7.42,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_B9E01B04_A6EE_AEF6_41DB_0E71973BB561_0_HS_1_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -11.81,
        "yaw": -99.41
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_B9E3EB04_A6EE_AEF6_41B4_C218D02D2853",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_B9E01B04_A6EE_AEF6_41DB_0E71973BB561_0_HS_1_0.png",
           "height": 126,
           "width": 126
          }
         ]
        },
        "hfov": 7.42,
        "pitch": -11.81,
        "yaw": -99.41
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 135.15,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_B9E01B04_A6EE_AEF6_41DB_0E71973BB561_0_HS_0_0_map.gif",
           "height": 15,
           "width": 41
          }
         ]
        },
        "pitch": 0.57,
        "yaw": -97.77
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_B9E3DB04_A6EE_AEF6_41C8_3B54C294439D",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_B9E01B04_A6EE_AEF6_41DB_0E71973BB561_0_HS_0_0.png",
           "height": 788,
           "width": 2048
          }
         ]
        },
        "hfov": 135.15,
        "pitch": 0.57,
        "yaw": -97.77
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B9E01B04_A6EE_AEF6_41DB_0E71973BB561_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B9E01B04_A6EE_AEF6_41DB_0E71973BB561_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B9E01B04_A6EE_AEF6_41DB_0E71973BB561_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B9E01B04_A6EE_AEF6_41DB_0E71973BB561_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B9E01B04_A6EE_AEF6_41DB_0E71973BB561_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B9E01B04_A6EE_AEF6_41DB_0E71973BB561_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B9E01B04_A6EE_AEF6_41DB_0E71973BB561_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B9E01B04_A6EE_AEF6_41DB_0E71973BB561_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B9E01B04_A6EE_AEF6_41DB_0E71973BB561_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B9E01B04_A6EE_AEF6_41DB_0E71973BB561_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_B9E01B04_A6EE_AEF6_41DB_0E71973BB561_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B9E01B04_A6EE_AEF6_41DB_0E71973BB561_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B9E01B04_A6EE_AEF6_41DB_0E71973BB561_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_B9E01B04_A6EE_AEF6_41DB_0E71973BB561"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B9E01B04_A6EE_AEF6_41DB_0E71973BB561_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -0.69,
     "targetYaw": 6.69,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 2.59,
     "targetYaw": -104.46,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": -2.02,
   "yaw": 128.84
  }
 },
 {
  "class": "Panorama",
  "label": "S3V2-min",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_6E41BEEB_6460_AF3F_41D2_6E0C55A15528_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41BEEB_6460_AF3F_41D2_6E0C55A15528_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41BEEB_6460_AF3F_41D2_6E0C55A15528_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41BEEB_6460_AF3F_41D2_6E0C55A15528_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41BEEB_6460_AF3F_41D2_6E0C55A15528_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41BEEB_6460_AF3F_41D2_6E0C55A15528_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41BEEB_6460_AF3F_41D2_6E0C55A15528_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41BEEB_6460_AF3F_41D2_6E0C55A15528_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41BEEB_6460_AF3F_41D2_6E0C55A15528_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41BEEB_6460_AF3F_41D2_6E0C55A15528_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41BEEB_6460_AF3F_41D2_6E0C55A15528_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41BEEB_6460_AF3F_41D2_6E0C55A15528_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41BEEB_6460_AF3F_41D2_6E0C55A15528_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_6E41BEEB_6460_AF3F_41D2_6E0C55A15528_t.jpg"
   }
  ],
  "pitch": 0,
  "id": "panorama_6E41BEEB_6460_AF3F_41D2_6E0C55A15528"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_6E41BEEB_6460_AF3F_41D2_6E0C55A15528_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 6.88,
     "targetYaw": 105.47,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 2.27,
   "yaw": -69.98
  }
 },
 {
  "class": "Panorama",
  "label": "S3V3-min",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_B98F35EC_A6EB_6537_41D2_B2F2A580AB82_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B98F35EC_A6EB_6537_41D2_B2F2A580AB82_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B98F35EC_A6EB_6537_41D2_B2F2A580AB82_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B98F35EC_A6EB_6537_41D2_B2F2A580AB82_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B98F35EC_A6EB_6537_41D2_B2F2A580AB82_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B98F35EC_A6EB_6537_41D2_B2F2A580AB82_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B98F35EC_A6EB_6537_41D2_B2F2A580AB82_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B98F35EC_A6EB_6537_41D2_B2F2A580AB82_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B98F35EC_A6EB_6537_41D2_B2F2A580AB82_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B98F35EC_A6EB_6537_41D2_B2F2A580AB82_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B98F35EC_A6EB_6537_41D2_B2F2A580AB82_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B98F35EC_A6EB_6537_41D2_B2F2A580AB82_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_B98F35EC_A6EB_6537_41D2_B2F2A580AB82_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_B98F35EC_A6EB_6537_41D2_B2F2A580AB82_t.jpg"
   }
  ],
  "pitch": 0,
  "id": "panorama_B98F35EC_A6EB_6537_41D2_B2F2A580AB82"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_B98F35EC_A6EB_6537_41D2_B2F2A580AB82_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 3.6,
     "targetYaw": -76.67,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 2.78,
   "yaw": 73.26
  }
 },
 {
  "class": "Panorama",
  "label": "CLUB HOUSE STREET VIEW",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_BAF873B6_A636_FD12_41C9_52C22CB7ED8F_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 7.6,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_BAF873B6_A636_FD12_41C9_52C22CB7ED8F_0_HS_1_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": 5.87,
        "yaw": 6.22
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8555BA21_A65D_6F2E_41D5_E16506F57ABF",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_BAF873B6_A636_FD12_41C9_52C22CB7ED8F_0_HS_1_0.png",
           "height": 126,
           "width": 127
          }
         ]
        },
        "hfov": 7.6,
        "pitch": 5.87,
        "yaw": 6.22
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 59)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 122.63,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_BAF873B6_A636_FD12_41C9_52C22CB7ED8F_0_HS_0_0_map.gif",
           "height": 16,
           "width": 34
          }
         ]
        },
        "pitch": -4.61,
        "yaw": -17.94
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_86B55001_A65D_BAF1_41CC_03E23ED3DEFC",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_BAF873B6_A636_FD12_41C9_52C22CB7ED8F_0_HS_0_0.png",
           "height": 963,
           "width": 2048
          }
         ]
        },
        "hfov": 122.63,
        "pitch": -4.61,
        "yaw": -17.94
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BAF873B6_A636_FD12_41C9_52C22CB7ED8F_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BAF873B6_A636_FD12_41C9_52C22CB7ED8F_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BAF873B6_A636_FD12_41C9_52C22CB7ED8F_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BAF873B6_A636_FD12_41C9_52C22CB7ED8F_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BAF873B6_A636_FD12_41C9_52C22CB7ED8F_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BAF873B6_A636_FD12_41C9_52C22CB7ED8F_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BAF873B6_A636_FD12_41C9_52C22CB7ED8F_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BAF873B6_A636_FD12_41C9_52C22CB7ED8F_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BAF873B6_A636_FD12_41C9_52C22CB7ED8F_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BAF873B6_A636_FD12_41C9_52C22CB7ED8F_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_BAF873B6_A636_FD12_41C9_52C22CB7ED8F_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BAF873B6_A636_FD12_41C9_52C22CB7ED8F_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BAF873B6_A636_FD12_41C9_52C22CB7ED8F_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_BAF873B6_A636_FD12_41C9_52C22CB7ED8F"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_BAF873B6_A636_FD12_41C9_52C22CB7ED8F_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 2.08,
     "targetYaw": -93.35,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0.76,
   "yaw": 79.58
  }
 },
 {
  "class": "Panorama",
  "label": "Ex4_DJI_0669",
  "hfovMin": 60,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_A18BF642_AAF2_672A_41E2_A9D27DF205BA_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A18BF642_AAF2_672A_41E2_A9D27DF205BA_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A18BF642_AAF2_672A_41E2_A9D27DF205BA_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A18BF642_AAF2_672A_41E2_A9D27DF205BA_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A18BF642_AAF2_672A_41E2_A9D27DF205BA_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A18BF642_AAF2_672A_41E2_A9D27DF205BA_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A18BF642_AAF2_672A_41E2_A9D27DF205BA_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A18BF642_AAF2_672A_41E2_A9D27DF205BA_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A18BF642_AAF2_672A_41E2_A9D27DF205BA_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A18BF642_AAF2_672A_41E2_A9D27DF205BA_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A18BF642_AAF2_672A_41E2_A9D27DF205BA_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A18BF642_AAF2_672A_41E2_A9D27DF205BA_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A18BF642_AAF2_672A_41E2_A9D27DF205BA_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_A18BF642_AAF2_672A_41E2_A9D27DF205BA_t.jpg"
   }
  ],
  "pitch": 0,
  "id": "panorama_A18BF642_AAF2_672A_41E2_A9D27DF205BA"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_A18BF642_AAF2_672A_41E2_A9D27DF205BA_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -30.25,
     "targetYaw": 15.03,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "hfov": 90,
   "class": "PanoramaCameraPosition",
   "pitch": -11.12,
   "yaw": 117.22
  }
 },
 {
  "class": "Panorama",
  "label": "S4",
  "hfovMin": 60,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 6.55,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C_0_HS_5_0_0_map.gif",
           "height": 50,
           "width": 60
          }
         ]
        },
        "pitch": -26.17,
        "yaw": 92.07
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A1EBEDA2_AAF2_256A_41D5_C353CB52AA8C",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C_0_HS_5_0.png",
           "height": 101,
           "width": 121
          }
         ]
        },
        "hfov": 6.55,
        "pitch": -26.17,
        "yaw": 92.07
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 20)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 28.81,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C_0_HS_4_0_map.gif",
           "height": 16,
           "width": 17
          }
         ]
        },
        "pitch": -27.3,
        "yaw": 90.75
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A1EBDDA2_AAF2_256A_41BC_1D2E8414125F",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C_0_HS_4_0.png",
           "height": 484,
           "width": 540
          }
         ]
        },
        "hfov": 28.81,
        "pitch": -27.3,
        "yaw": 90.75
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 6.1,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C_0_HS_3_0_0_map.gif",
           "height": 48,
           "width": 60
          }
         ]
        },
        "pitch": -33.23,
        "yaw": -19.03
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A1EBCDA2_AAF2_256A_41E2_43B6CB36725A",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C_0_HS_3_0.png",
           "height": 97,
           "width": 121
          }
         ]
        },
        "hfov": 6.1,
        "pitch": -33.23,
        "yaw": -19.03
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 19)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 24.15,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C_0_HS_2_0_map.gif",
           "height": 16,
           "width": 17
          }
         ]
        },
        "pitch": -32.57,
        "yaw": -19
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A1EBBDA2_AAF2_256A_41B4_7A38630EB727",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C_0_HS_2_0.png",
           "height": 438,
           "width": 477
          }
         ]
        },
        "hfov": 24.15,
        "pitch": -32.57,
        "yaw": -19
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 4.94,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C_0_HS_1_0_0_map.gif",
           "height": 51,
           "width": 54
          }
         ]
        },
        "pitch": -40.41,
        "yaw": 114.2
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A1EBADA2_AAF2_256A_41C5_BB0164AE76A9",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C_0_HS_1_0.png",
           "height": 102,
           "width": 108
          }
         ]
        },
        "hfov": 4.94,
        "pitch": -40.41,
        "yaw": 114.2
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 21)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 21.31,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C_0_HS_0_0_map.gif",
           "height": 16,
           "width": 17
          }
         ]
        },
        "pitch": -40.55,
        "yaw": 114.58
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A1EB9DA2_AAF2_256A_41B3_38F396C2694C",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C_0_HS_0_0.png",
           "height": 426,
           "width": 467
          }
         ]
        },
        "hfov": 21.31,
        "pitch": -40.55,
        "yaw": 114.58
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -16.86,
     "targetYaw": -36,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -25.96,
     "targetYaw": 91.83,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -19.71,
   "yaw": 126.82
  }
 },
 {
  "class": "Panorama",
  "label": "S4V1-min",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_6E41935B_6460_F51F_41D4_E597F889D564_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41935B_6460_F51F_41D4_E597F889D564_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41935B_6460_F51F_41D4_E597F889D564_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41935B_6460_F51F_41D4_E597F889D564_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41935B_6460_F51F_41D4_E597F889D564_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41935B_6460_F51F_41D4_E597F889D564_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41935B_6460_F51F_41D4_E597F889D564_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41935B_6460_F51F_41D4_E597F889D564_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41935B_6460_F51F_41D4_E597F889D564_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41935B_6460_F51F_41D4_E597F889D564_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41935B_6460_F51F_41D4_E597F889D564_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41935B_6460_F51F_41D4_E597F889D564_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41935B_6460_F51F_41D4_E597F889D564_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_6E41935B_6460_F51F_41D4_E597F889D564_t.jpg"
   }
  ],
  "pitch": 0,
  "id": "panorama_6E41935B_6460_F51F_41D4_E597F889D564"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_6E41935B_6460_F51F_41D4_E597F889D564_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 0.57,
     "targetYaw": -78.95,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0.51,
   "yaw": 86.15
  }
 },
 {
  "class": "Panorama",
  "label": "S4V2-min",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_6E41BDB5_6460_ED2B_41C1_6F922FDFCAF0_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41BDB5_6460_ED2B_41C1_6F922FDFCAF0_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41BDB5_6460_ED2B_41C1_6F922FDFCAF0_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41BDB5_6460_ED2B_41C1_6F922FDFCAF0_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41BDB5_6460_ED2B_41C1_6F922FDFCAF0_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41BDB5_6460_ED2B_41C1_6F922FDFCAF0_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41BDB5_6460_ED2B_41C1_6F922FDFCAF0_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41BDB5_6460_ED2B_41C1_6F922FDFCAF0_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41BDB5_6460_ED2B_41C1_6F922FDFCAF0_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41BDB5_6460_ED2B_41C1_6F922FDFCAF0_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41BDB5_6460_ED2B_41C1_6F922FDFCAF0_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41BDB5_6460_ED2B_41C1_6F922FDFCAF0_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41BDB5_6460_ED2B_41C1_6F922FDFCAF0_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_6E41BDB5_6460_ED2B_41C1_6F922FDFCAF0_t.jpg"
   }
  ],
  "pitch": 0,
  "id": "panorama_6E41BDB5_6460_ED2B_41C1_6F922FDFCAF0"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_6E41BDB5_6460_ED2B_41C1_6F922FDFCAF0_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -0.44,
     "targetYaw": 155.49,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 2.78,
   "yaw": -3.79
  }
 },
 {
  "class": "Panorama",
  "label": "S4V3-min",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_6E41D7EE_6460_9D39_41B0_19E5CB13BB50_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41D7EE_6460_9D39_41B0_19E5CB13BB50_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41D7EE_6460_9D39_41B0_19E5CB13BB50_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41D7EE_6460_9D39_41B0_19E5CB13BB50_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41D7EE_6460_9D39_41B0_19E5CB13BB50_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41D7EE_6460_9D39_41B0_19E5CB13BB50_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41D7EE_6460_9D39_41B0_19E5CB13BB50_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41D7EE_6460_9D39_41B0_19E5CB13BB50_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41D7EE_6460_9D39_41B0_19E5CB13BB50_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41D7EE_6460_9D39_41B0_19E5CB13BB50_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41D7EE_6460_9D39_41B0_19E5CB13BB50_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41D7EE_6460_9D39_41B0_19E5CB13BB50_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41D7EE_6460_9D39_41B0_19E5CB13BB50_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_6E41D7EE_6460_9D39_41B0_19E5CB13BB50_t.jpg"
   }
  ],
  "pitch": 0,
  "id": "panorama_6E41D7EE_6460_9D39_41B0_19E5CB13BB50"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_6E41D7EE_6460_9D39_41B0_19E5CB13BB50_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 2.84,
     "targetYaw": -46.61,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 2.78,
   "yaw": 104.08
  }
 },
 {
  "class": "Panorama",
  "label": "S5",
  "hfovMin": 60,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_A18120CB_AAF2_3B3A_41E0_A9B0761CFB34_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 4.04,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A18120CB_AAF2_3B3A_41E0_A9B0761CFB34_0_HS_3_0_0_map.gif",
           "height": 43,
           "width": 49
          }
         ]
        },
        "pitch": -47.1,
        "yaw": 63.08
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A18110CC_AAF2_3B3E_41E0_AE5FB5EEE7B6",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A18120CB_AAF2_3B3A_41E0_A9B0761CFB34_0_HS_3_0.png",
           "height": 87,
           "width": 98
          }
         ]
        },
        "hfov": 4.04,
        "pitch": -47.1,
        "yaw": 63.08
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 23)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 4.48,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A18120CB_AAF2_3B3A_41E0_A9B0761CFB34_0_HS_1_0_0_map.gif",
           "height": 35,
           "width": 42
          }
         ]
        },
        "pitch": -28.98,
        "yaw": 122.07
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A18170CC_AAF2_3B3E_41E4_D37AB0B06332",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A18120CB_AAF2_3B3A_41E0_A9B0761CFB34_0_HS_1_0.png",
           "height": 70,
           "width": 85
          }
         ]
        },
        "hfov": 4.48,
        "pitch": -28.98,
        "yaw": 122.07
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 24)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 26.86,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A18120CB_AAF2_3B3A_41E0_A9B0761CFB34_0_HS_0_0_map.gif",
           "height": 17,
           "width": 16
          }
         ]
        },
        "pitch": -30.98,
        "yaw": 122.64
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A18160CC_AAF2_3B3E_41E0_96D4EA33087A",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A18120CB_AAF2_3B3A_41E0_A9B0761CFB34_0_HS_0_0.png",
           "height": 587,
           "width": 522
          }
         ]
        },
        "hfov": 26.86,
        "pitch": -30.98,
        "yaw": 122.64
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 21.25,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A18120CB_AAF2_3B3A_41E0_A9B0761CFB34_0_HS_6_0_map.gif",
           "height": 16,
           "width": 17
          }
         ]
        },
        "pitch": -48.51,
        "yaw": 63.4
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_B6117A9D_AA9E_6F5E_41B3_F6FD0B0085A3",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A18120CB_AAF2_3B3A_41E0_A9B0761CFB34_0_HS_6_0.png",
           "height": 483,
           "width": 534
          }
         ]
        },
        "hfov": 21.25,
        "pitch": -48.51,
        "yaw": 63.4
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A18120CB_AAF2_3B3A_41E0_A9B0761CFB34_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A18120CB_AAF2_3B3A_41E0_A9B0761CFB34_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A18120CB_AAF2_3B3A_41E0_A9B0761CFB34_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A18120CB_AAF2_3B3A_41E0_A9B0761CFB34_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A18120CB_AAF2_3B3A_41E0_A9B0761CFB34_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A18120CB_AAF2_3B3A_41E0_A9B0761CFB34_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A18120CB_AAF2_3B3A_41E0_A9B0761CFB34_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A18120CB_AAF2_3B3A_41E0_A9B0761CFB34_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A18120CB_AAF2_3B3A_41E0_A9B0761CFB34_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A18120CB_AAF2_3B3A_41E0_A9B0761CFB34_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_A18120CB_AAF2_3B3A_41E0_A9B0761CFB34_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A18120CB_AAF2_3B3A_41E0_A9B0761CFB34_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A18120CB_AAF2_3B3A_41E0_A9B0761CFB34_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_A18120CB_AAF2_3B3A_41E0_A9B0761CFB34"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_A18120CB_AAF2_3B3A_41E0_A9B0761CFB34_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -15.09,
     "targetYaw": -123.41,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -29.31,
   "yaw": 118.48
  }
 },
 {
  "class": "Panorama",
  "label": "S5V1-min",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_6E41CC2D_6460_B33B_41B9_C966262CAA0F_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 7.36,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_6E41CC2D_6460_B33B_41B9_C966262CAA0F_0_HS_1_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -13.83,
        "yaw": 42.57
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_4345B44A_6460_B379_416C_D597366CF7FF",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_6E41CC2D_6460_B33B_41B9_C966262CAA0F_0_HS_1_0.png",
           "height": 126,
           "width": 126
          }
         ]
        },
        "hfov": 7.36,
        "pitch": -13.83,
        "yaw": 42.57
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 39)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 133.2,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_6E41CC2D_6460_B33B_41B9_C966262CAA0F_0_HS_0_0_map.gif",
           "height": 16,
           "width": 38
          }
         ]
        },
        "pitch": -6.74,
        "yaw": 68.7
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_4323B5DC_6461_9D19_41D1_D37854697DE8",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_6E41CC2D_6460_B33B_41B9_C966262CAA0F_0_HS_0_0.png",
           "height": 855,
           "width": 2048
          }
         ]
        },
        "hfov": 133.2,
        "pitch": -6.74,
        "yaw": 68.7
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41CC2D_6460_B33B_41B9_C966262CAA0F_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41CC2D_6460_B33B_41B9_C966262CAA0F_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41CC2D_6460_B33B_41B9_C966262CAA0F_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41CC2D_6460_B33B_41B9_C966262CAA0F_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41CC2D_6460_B33B_41B9_C966262CAA0F_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41CC2D_6460_B33B_41B9_C966262CAA0F_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41CC2D_6460_B33B_41B9_C966262CAA0F_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41CC2D_6460_B33B_41B9_C966262CAA0F_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41CC2D_6460_B33B_41B9_C966262CAA0F_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41CC2D_6460_B33B_41B9_C966262CAA0F_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_6E41CC2D_6460_B33B_41B9_C966262CAA0F_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41CC2D_6460_B33B_41B9_C966262CAA0F_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41CC2D_6460_B33B_41B9_C966262CAA0F_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_6E41CC2D_6460_B33B_41B9_C966262CAA0F"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_6E41CC2D_6460_B33B_41B9_C966262CAA0F_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 1.33,
     "targetYaw": 142.86,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": -1.52,
   "yaw": -56.59
  }
 },
 {
  "class": "Panorama",
  "label": "S5A1V1-min",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_6E41D226_6460_B729_41C5_12830EDF59FE_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41D226_6460_B729_41C5_12830EDF59FE_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41D226_6460_B729_41C5_12830EDF59FE_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41D226_6460_B729_41C5_12830EDF59FE_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41D226_6460_B729_41C5_12830EDF59FE_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41D226_6460_B729_41C5_12830EDF59FE_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41D226_6460_B729_41C5_12830EDF59FE_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41D226_6460_B729_41C5_12830EDF59FE_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41D226_6460_B729_41C5_12830EDF59FE_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41D226_6460_B729_41C5_12830EDF59FE_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41D226_6460_B729_41C5_12830EDF59FE_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41D226_6460_B729_41C5_12830EDF59FE_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41D226_6460_B729_41C5_12830EDF59FE_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_6E41D226_6460_B729_41C5_12830EDF59FE_t.jpg"
   }
  ],
  "pitch": 0,
  "id": "panorama_6E41D226_6460_B729_41C5_12830EDF59FE"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_6E41D226_6460_B729_41C5_12830EDF59FE_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -1.45,
     "targetYaw": 85.52,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": -1.01,
   "yaw": -112.93
  }
 },
 {
  "class": "Panorama",
  "label": "Ex3_DJI_0670",
  "hfovMin": 60,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_A1FE7933_AAF2_2D6A_41DC_A6106B748B39_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1FE7933_AAF2_2D6A_41DC_A6106B748B39_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1FE7933_AAF2_2D6A_41DC_A6106B748B39_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1FE7933_AAF2_2D6A_41DC_A6106B748B39_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1FE7933_AAF2_2D6A_41DC_A6106B748B39_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1FE7933_AAF2_2D6A_41DC_A6106B748B39_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1FE7933_AAF2_2D6A_41DC_A6106B748B39_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1FE7933_AAF2_2D6A_41DC_A6106B748B39_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1FE7933_AAF2_2D6A_41DC_A6106B748B39_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1FE7933_AAF2_2D6A_41DC_A6106B748B39_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1FE7933_AAF2_2D6A_41DC_A6106B748B39_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1FE7933_AAF2_2D6A_41DC_A6106B748B39_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1FE7933_AAF2_2D6A_41DC_A6106B748B39_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_A1FE7933_AAF2_2D6A_41DC_A6106B748B39_t.jpg"
   }
  ],
  "pitch": 0,
  "id": "panorama_A1FE7933_AAF2_2D6A_41DC_A6106B748B39"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_A1FE7933_AAF2_2D6A_41DC_A6106B748B39_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -15.6,
     "targetYaw": 106.74,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -32.84,
   "yaw": -141.22
  }
 },
 {
  "class": "Panorama",
  "label": "S6",
  "hfovMin": 60,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 3.35,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763_0_HS_5_0_0_map.gif",
           "height": 63,
           "width": 71
          }
         ]
        },
        "pitch": -67.17,
        "yaw": -131.62
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A1F63EF1_AAF3_E4E6_41E1_2B8B405D2DB3",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763_0_HS_5_0.png",
           "height": 126,
           "width": 143
          }
         ]
        },
        "hfov": 3.35,
        "pitch": -67.17,
        "yaw": -131.62
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 28)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 15.5,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763_0_HS_4_0_map.gif",
           "height": 16,
           "width": 21
          }
         ]
        },
        "pitch": -67.7,
        "yaw": -130.97
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A1F64EF1_AAF3_E4E6_41C2_16EE57D0CA13",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763_0_HS_4_0.png",
           "height": 496,
           "width": 680
          }
         ]
        },
        "hfov": 15.5,
        "pitch": -67.7,
        "yaw": -130.97
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 3.5,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763_0_HS_3_0_0_map.gif",
           "height": 42,
           "width": 47
          }
         ]
        },
        "pitch": -52.54,
        "yaw": -46.81
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A1F65EF1_AAF3_E4E6_416F_B2D4FDB24C39",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763_0_HS_3_0.png",
           "height": 84,
           "width": 95
          }
         ]
        },
        "hfov": 3.5,
        "pitch": -52.54,
        "yaw": -46.81
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 27)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 4.87,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763_0_HS_1_0_0_map.gif",
           "height": 44,
           "width": 44
          }
         ]
        },
        "pitch": -24.84,
        "yaw": 2.52
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A1F67EF1_AAF3_E4E6_41D5_D45C5483CEAD",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763_0_HS_1_0.png",
           "height": 88,
           "width": 89
          }
         ]
        },
        "hfov": 4.87,
        "pitch": -24.84,
        "yaw": 2.52
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 35.34,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763_0_HS_0_0_map.gif",
           "height": 16,
           "width": 20
          }
         ]
        },
        "pitch": -27.07,
        "yaw": 4.16
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A1F68EF1_AAF3_E4E6_41E0_BFADFB54EA10",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763_0_HS_0_0.png",
           "height": 515,
           "width": 661
          }
         ]
        },
        "hfov": 35.34,
        "pitch": -27.07,
        "yaw": 4.16
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 29)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 15.16,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763_0_HS_6_0_map.gif",
           "height": 16,
           "width": 16
          }
         ]
        },
        "pitch": -53.14,
        "yaw": -46.22
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_B7D1CCBD_AA9E_2B5E_41C6_97BDC3125C00",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763_0_HS_6_0.png",
           "height": 421,
           "width": 421
          }
         ]
        },
        "hfov": 15.16,
        "pitch": -53.14,
        "yaw": -46.22
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -12.57,
     "targetYaw": 114.82,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -19.71,
   "yaw": -155.37
  }
 },
 {
  "class": "Panorama",
  "label": "S6V1-min",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_6E41C009_6460_72FB_41CB_F3A1D5D86867_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41C009_6460_72FB_41CB_F3A1D5D86867_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41C009_6460_72FB_41CB_F3A1D5D86867_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41C009_6460_72FB_41CB_F3A1D5D86867_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41C009_6460_72FB_41CB_F3A1D5D86867_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41C009_6460_72FB_41CB_F3A1D5D86867_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41C009_6460_72FB_41CB_F3A1D5D86867_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41C009_6460_72FB_41CB_F3A1D5D86867_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41C009_6460_72FB_41CB_F3A1D5D86867_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41C009_6460_72FB_41CB_F3A1D5D86867_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41C009_6460_72FB_41CB_F3A1D5D86867_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41C009_6460_72FB_41CB_F3A1D5D86867_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41C009_6460_72FB_41CB_F3A1D5D86867_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_6E41C009_6460_72FB_41CB_F3A1D5D86867_t.jpg"
   }
  ],
  "pitch": 0,
  "id": "panorama_6E41C009_6460_72FB_41CB_F3A1D5D86867"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_6E41C009_6460_72FB_41CB_F3A1D5D86867_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 0.06,
     "targetYaw": 44.08,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 0.57,
     "targetYaw": 157.01,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0.76,
   "yaw": -42.19
  }
 },
 {
  "class": "Panorama",
  "label": "S6V2-min",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_6E41DA52_6460_7769_41D4_BA5E308A7FCF_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41DA52_6460_7769_41D4_BA5E308A7FCF_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41DA52_6460_7769_41D4_BA5E308A7FCF_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41DA52_6460_7769_41D4_BA5E308A7FCF_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41DA52_6460_7769_41D4_BA5E308A7FCF_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41DA52_6460_7769_41D4_BA5E308A7FCF_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41DA52_6460_7769_41D4_BA5E308A7FCF_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41DA52_6460_7769_41D4_BA5E308A7FCF_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41DA52_6460_7769_41D4_BA5E308A7FCF_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41DA52_6460_7769_41D4_BA5E308A7FCF_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41DA52_6460_7769_41D4_BA5E308A7FCF_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41DA52_6460_7769_41D4_BA5E308A7FCF_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41DA52_6460_7769_41D4_BA5E308A7FCF_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_6E41DA52_6460_7769_41D4_BA5E308A7FCF_t.jpg"
   }
  ],
  "pitch": 0,
  "id": "panorama_6E41DA52_6460_7769_41D4_BA5E308A7FCF"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_6E41DA52_6460_7769_41D4_BA5E308A7FCF_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 2.84,
     "targetYaw": -11.75,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 1.77,
   "yaw": 124.29
  }
 },
 {
  "class": "Panorama",
  "label": "S6A1V1-min",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_6E41F612_6460_9EE9_41BA_632B2281DFE7_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41F612_6460_9EE9_41BA_632B2281DFE7_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41F612_6460_9EE9_41BA_632B2281DFE7_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41F612_6460_9EE9_41BA_632B2281DFE7_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41F612_6460_9EE9_41BA_632B2281DFE7_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41F612_6460_9EE9_41BA_632B2281DFE7_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41F612_6460_9EE9_41BA_632B2281DFE7_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41F612_6460_9EE9_41BA_632B2281DFE7_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41F612_6460_9EE9_41BA_632B2281DFE7_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41F612_6460_9EE9_41BA_632B2281DFE7_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41F612_6460_9EE9_41BA_632B2281DFE7_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41F612_6460_9EE9_41BA_632B2281DFE7_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_6E41F612_6460_9EE9_41BA_632B2281DFE7_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_6E41F612_6460_9EE9_41BA_632B2281DFE7_t.jpg"
   }
  ],
  "pitch": 0,
  "id": "panorama_6E41F612_6460_9EE9_41BA_632B2281DFE7"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_6E41F612_6460_9EE9_41BA_632B2281DFE7_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -2.97,
     "targetYaw": -84.76,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": -1.26,
   "yaw": 91.71
  }
 },
 {
  "class": "Panorama",
  "label": "Keyplan3_DJI_0671",
  "hfovMin": 60,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_A1F859A1_AAF2_2D67_41E2_7A828B16DDEE_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 123.49,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A1F859A1_AAF2_2D67_41E2_7A828B16DDEE_0_HS_1_0_map.gif",
           "height": 16,
           "width": 39
          }
         ]
        },
        "pitch": -24.92,
        "yaw": 93.26
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A1F829A1_AAF2_2D67_41D0_B4290B64B22B",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A1F859A1_AAF2_2D67_41E2_7A828B16DDEE_0_HS_1_0.png",
           "height": 839,
           "width": 2048
          }
         ]
        },
        "hfov": 123.49,
        "pitch": -24.92,
        "yaw": 93.26
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 53.26,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A1F859A1_AAF2_2D67_41E2_7A828B16DDEE_0_HS_0_1_0_map.gif",
           "height": 113,
           "width": 200
          }
         ]
        },
        "pitch": -23.5,
        "yaw": 80.19
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_A1F839A1_AAF2_2D67_419C_964A9000A424",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "roll": 0,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_A1F859A1_AAF2_2D67_41E2_7A828B16DDEE_0_HS_0_0.png",
           "height": 542,
           "width": 957
          }
         ]
        },
        "hfov": 53.26,
        "pitch": -23.5,
        "yaw": 80.19
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259, this.camera_D05AA997_DE12_60D2_41D9_4E6D3A5CB71B); this.mainPlayList.set('selectedIndex', 1); this.setComponentVisibility(this.Container_AA902B2C_A63E_AD36_41C2_0F9433A88998, true, 0, null, null, false)"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1F859A1_AAF2_2D67_41E2_7A828B16DDEE_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1F859A1_AAF2_2D67_41E2_7A828B16DDEE_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1F859A1_AAF2_2D67_41E2_7A828B16DDEE_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1F859A1_AAF2_2D67_41E2_7A828B16DDEE_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1F859A1_AAF2_2D67_41E2_7A828B16DDEE_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1F859A1_AAF2_2D67_41E2_7A828B16DDEE_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1F859A1_AAF2_2D67_41E2_7A828B16DDEE_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1F859A1_AAF2_2D67_41E2_7A828B16DDEE_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1F859A1_AAF2_2D67_41E2_7A828B16DDEE_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1F859A1_AAF2_2D67_41E2_7A828B16DDEE_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_A1F859A1_AAF2_2D67_41E2_7A828B16DDEE_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1F859A1_AAF2_2D67_41E2_7A828B16DDEE_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_A1F859A1_AAF2_2D67_41E2_7A828B16DDEE_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_A1F859A1_AAF2_2D67_41E2_7A828B16DDEE"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_A1F859A1_AAF2_2D67_41E2_7A828B16DDEE_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -14.84,
     "targetYaw": 46.11,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -15.85,
     "targetYaw": 112.55,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": -18.19,
   "yaw": 77.56
  }
 },
 {
  "class": "Panorama",
  "label": "MODERN LIVING ROOM FINAL",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 6.26,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_0_HS_17_0_0_map.gif",
           "height": 56,
           "width": 52
          }
         ]
        },
        "pitch": -9.99,
        "yaw": -17.41
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_59C1A59A_535A_A9D1_41D1_FF28D849F9DD",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_0_HS_17_0.png",
           "height": 112,
           "width": 105
          }
         ]
        },
        "hfov": 6.26,
        "pitch": -9.99,
        "yaw": -17.41
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_347A9D97_3D8D_F96D_41B7_295232802521, this.camera_2F4BAB18_3EB3_4EE9_41B7_D2FE0D3E27BD); this.mainPlayList.set('selectedIndex', 32)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 16.98,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_0_HS_16_0_map.gif",
           "height": 31,
           "width": 16
          }
         ]
        },
        "pitch": -8.67,
        "yaw": -18.33
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_59C1B59A_535A_A9D1_41B3_EEBA9C517F6E",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_0_HS_16_0.png",
           "height": 556,
           "width": 286
          }
         ]
        },
        "hfov": 16.98,
        "pitch": -8.67,
        "yaw": -18.33
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB, this.camera_D391183C_DE12_6FD7_41D9_9BE4E8455C26); this.mainPlayList.set('selectedIndex', 32)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 10.71,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_0_HS_15_0_0_map.gif",
           "height": 90,
           "width": 90
          }
         ]
        },
        "pitch": -9.66,
        "yaw": 90.44
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_59C1859A_535A_A9D1_41A1_EBFB670432E0",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_0_HS_15_0.png",
           "height": 181,
           "width": 181
          }
         ]
        },
        "hfov": 10.71,
        "pitch": -9.66,
        "yaw": 90.44
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 19.31,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_0_HS_14_0_map.gif",
           "height": 35,
           "width": 16
          }
         ]
        },
        "pitch": -6.62,
        "yaw": 88.91
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_59C1959A_535A_A9D1_41CE_4B1402EE0DEA",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_0_HS_14_0.png",
           "height": 711,
           "width": 324
          }
         ]
        },
        "hfov": 19.31,
        "pitch": -6.62,
        "yaw": 88.91
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 7.54,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_0_HS_18_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": 5.84,
        "yaw": -58.48
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_59C2559A_535A_A9D1_4175_A25889AA65A2",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_0_HS_18_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.54,
        "pitch": 5.84,
        "yaw": -58.48
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5, this.camera_8A4CD871_AAB2_2BE6_41E1_B54949AAE703); this.mainPlayList.set('selectedIndex', 34)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 29.77,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_0_HS_12_0_map.gif",
           "height": 41,
           "width": 16
          }
         ]
        },
        "pitch": 1.78,
        "yaw": -56.66
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_59C2459A_535A_A9D1_41D0_1C70F331737A",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_0_HS_12_0.png",
           "height": 1280,
           "width": 496
          }
         ]
        },
        "hfov": 29.77,
        "pitch": 1.78,
        "yaw": -56.66
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5, this.camera_D362C822_DE12_6FF2_41E3_A28E7D581D45); this.mainPlayList.set('selectedIndex', 34); this.mainPlayList.set('selectedIndex', 34)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 7.42,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_0_HS_22_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -11.59,
        "yaw": -57.32
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C42CBF41_CF32_3D01_41E9_5205B18B60D6",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_0_HS_22_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.42,
        "pitch": -11.59,
        "yaw": -57.32
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D8417219_D1DF_63E2_41D6_C0A2D1F29357, this.camera_D39D5833_DE12_6FD1_41DB_2ACDA28AD22F); this.mainPlayList.set('selectedIndex', 37)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 31.27,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_0_HS_21_0_map.gif",
           "height": 40,
           "width": 16
          }
         ]
        },
        "pitch": 2.61,
        "yaw": -56.16
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C481326B_CF32_2701_41D8_F8B97C2B2902",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_0_HS_21_0.png",
           "height": 1304,
           "width": 521
          }
         ]
        },
        "hfov": 31.27,
        "pitch": 2.61,
        "yaw": -56.16
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 7.14,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_0_HS_20_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": 19.48,
        "yaw": -45.35
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_DF6D9F7D_D1E9_E022_41E2_25350F2340D9",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_0_HS_20_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.14,
        "pitch": 19.48,
        "yaw": -45.35
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D84831E4_D1B8_E728_41DA_F6A150C811BE, this.camera_D366A82A_DE12_6FF3_41E8_C4E705962CB2); this.mainPlayList.set('selectedIndex', 38)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 33.63,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_0_HS_19_0_map.gif",
           "height": 16,
           "width": 20
          }
         ]
        },
        "pitch": 22.42,
        "yaw": -45.14
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_DEDE969B_D1E9_60E6_41CA_84270EE43829",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_0_HS_19_0.png",
           "height": 467,
           "width": 606
          }
         ]
        },
        "hfov": 33.63,
        "pitch": 22.42,
        "yaw": -45.14
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323000,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": -2.04,
   "yaw": 8.35
  }
 },
 {
  "class": "Panorama",
  "label": "MODERN DINING AREA",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 7.56,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_0_HS_5_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -3.76,
        "yaw": -173.68
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_59E3E907_535B_A6BF_41D3_5AEFCC5BFB00",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_0_HS_5_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.56,
        "pitch": -3.76,
        "yaw": -173.68
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_34C526F6_3D73_C8AF_41CC_72232A979B37, this.camera_2F7EAB33_3EB3_4D3F_41CB_4FFD9B11CD20); this.mainPlayList.set('selectedIndex', 33)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 25.08,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_0_HS_11_0_map.gif",
           "height": 16,
           "width": 16
          }
         ]
        },
        "pitch": -6.96,
        "yaw": -166.61
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5F0A819A_5365_A9D1_41D0_41BD9F63FDBB",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_0_HS_11_0.png",
           "height": 404,
           "width": 421
          }
         ]
        },
        "hfov": 25.08,
        "pitch": -6.96,
        "yaw": -166.61
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_59C3021B_535A_AAD7_41CE_A61BCE03CD40, this.camera_D063277B_DE12_6052_41E2_2CBAE6B2C551); this.mainPlayList.set('selectedIndex', 33)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 7.57,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_0_HS_3_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -3,
        "yaw": 20.08
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_59E33908_535B_A6B1_41A4_B1E224AFE377",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_0_HS_3_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.57,
        "pitch": -3,
        "yaw": 20.08
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_34F8C783_3D73_4965_41CD_1E5506B70BA4, this.camera_2F721B2A_3EB3_4D29_41C8_068790F7298B); this.mainPlayList.set('selectedIndex', 31); this.mainPlayList.set('selectedIndex', 31)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 43.69,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_0_HS_2_0_map.gif",
           "height": 18,
           "width": 16
          }
         ]
        },
        "pitch": -1.56,
        "yaw": 25.76
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_59E30908_535B_A6B1_41BE_76310FD1256A",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_0_HS_2_0.png",
           "height": 833,
           "width": 728
          }
         ]
        },
        "hfov": 43.69,
        "pitch": -1.56,
        "yaw": 25.76
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A, this.camera_D067D784_DE12_60B6_41EA_C149311FF536); this.mainPlayList.set('selectedIndex', 31); this.mainPlayList.set('selectedIndex', 31)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 6.79,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_0_HS_1_0_0_map.gif",
           "height": 55,
           "width": 56
          }
         ]
        },
        "pitch": -5.02,
        "yaw": 160.42
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_59E31908_535B_A6B1_41D3_804FA5961E4A",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_0_HS_1_0.png",
           "height": 110,
           "width": 113
          }
         ]
        },
        "hfov": 6.79,
        "pitch": -5.02,
        "yaw": 160.42
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true,
        "toolTip": "TO BEDROOM",
        "click": "this.startPanoramaWithCamera(this.panorama_37EAB33E_3D8D_C99F_417A_FF3FC97EEAA4, this.camera_D06CC772_DE12_6052_41CB_B0E482D1EA4D); this.mainPlayList.set('selectedIndex', 36); this.mainPlayList.set('selectedIndex', 36)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 7.55,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_0_HS_7_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -4.82,
        "yaw": 82.54
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_59E3F908_535B_A6B1_41C7_C4A5F7961776",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_0_HS_7_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.55,
        "pitch": -4.82,
        "yaw": 82.54
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 34)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 41.14,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_0_HS_18_0_map.gif",
           "height": 16,
           "width": 16
          }
         ]
        },
        "pitch": -16.98,
        "yaw": 88.24
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_F5E6B86A_D269_A026_41EA_108F98DDB2FD",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_0_HS_18_0.png",
           "height": 750,
           "width": 716
          }
         ]
        },
        "hfov": 41.14,
        "pitch": -16.98,
        "yaw": 88.24
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 7.57,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_0_HS_9_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -2.75,
        "yaw": -62.53
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5FDDFA7C_537E_9B51_41C0_AE128ECFF36D",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_0_HS_9_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.57,
        "pitch": -2.75,
        "yaw": -62.53
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 25.1,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_0_HS_10_0_map.gif",
           "height": 16,
           "width": 17
          }
         ]
        },
        "pitch": -2.97,
        "yaw": -56.16
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5FA36CEC_537B_9F71_41B4_8C3EC0E0C5F7",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_0_HS_10_0.png",
           "height": 393,
           "width": 418
          }
         ]
        },
        "hfov": 25.1,
        "pitch": -2.97,
        "yaw": -56.16
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 7.33,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_0_HS_16_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": 14.68,
        "yaw": 99.92
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C4C0776D_CF32_2D01_41C6_00259BB7D92C",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_0_HS_16_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.33,
        "pitch": 14.68,
        "yaw": 99.92
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 37)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 45.42,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_0_HS_15_0_map.gif",
           "height": 15,
           "width": 23
          }
         ]
        },
        "pitch": 23.48,
        "yaw": 88.95
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C325D579_CF32_2D0E_41E2_8CB050CAD727",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_0_HS_15_0.png",
           "height": 569,
           "width": 825
          }
         ]
        },
        "hfov": 45.42,
        "pitch": 23.48,
        "yaw": 88.95
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 6.95,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_0_HS_14_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": 23.53,
        "yaw": 121.89
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_DF4F818D_D1EF_A0E2_41CD_75E656555268",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_0_HS_14_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 6.95,
        "pitch": 23.53,
        "yaw": 121.89
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 38)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 45.43,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_0_HS_13_0_map.gif",
           "height": 16,
           "width": 22
          }
         ]
        },
        "pitch": 28.18,
        "yaw": 111.03
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_DE959B9D_D1E8_A0E2_41D9_6F8C456FA676",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_0_HS_13_0.png",
           "height": 608,
           "width": 858
          }
         ]
        },
        "hfov": 45.43,
        "pitch": 28.18,
        "yaw": 111.03
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 19.29,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_0_HS_17_0_map.gif",
           "height": 22,
           "width": 16
          }
         ]
        },
        "pitch": -1.63,
        "yaw": 163.98
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_F5A581AB_D278_E026_41EA_523F6C643E75",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_0_HS_17_0.png",
           "height": 460,
           "width": 321
          }
         ]
        },
        "hfov": 19.29,
        "pitch": -1.63,
        "yaw": 163.98
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": -0.23,
   "yaw": 131.51
  }
 },
 {
  "class": "Panorama",
  "label": "MODERN KITCHEN",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 110,
  "thumbnailUrl": "media/panorama_59C3021B_535A_AAD7_41CE_A61BCE03CD40_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 17.66,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C3021B_535A_AAD7_41CE_A61BCE03CD40_0_HS_2_0_map.gif",
           "height": 21,
           "width": 16
          }
         ]
        },
        "pitch": -1.95,
        "yaw": -169.9
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_59C3121B_535A_AAD7_41B9_D2652CAD0F58",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C3021B_535A_AAD7_41CE_A61BCE03CD40_0_HS_2_0.png",
           "height": 387,
           "width": 294
          }
         ]
        },
        "hfov": 17.66,
        "pitch": -1.95,
        "yaw": -169.9
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_347A9D97_3D8D_F96D_41B7_295232802521, this.camera_2F796B3C_3EB3_4D29_4193_C8B6E05F14B6); this.mainPlayList.set('selectedIndex', 32); this.mainPlayList.set('selectedIndex', 32)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 7.57,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C3021B_535A_AAD7_41CE_A61BCE03CD40_0_HS_4_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -2.24,
        "yaw": -170.65
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_59C2E21B_535A_AAD7_41D0_6E96A315C1C2",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C3021B_535A_AAD7_41CE_A61BCE03CD40_0_HS_4_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.57,
        "pitch": -2.24,
        "yaw": -170.65
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB, this.camera_D3D8B8B2_DE12_60D2_41E7_1876E0CBC083); this.mainPlayList.set('selectedIndex', 32)"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C3021B_535A_AAD7_41CE_A61BCE03CD40_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C3021B_535A_AAD7_41CE_A61BCE03CD40_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C3021B_535A_AAD7_41CE_A61BCE03CD40_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C3021B_535A_AAD7_41CE_A61BCE03CD40_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C3021B_535A_AAD7_41CE_A61BCE03CD40_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C3021B_535A_AAD7_41CE_A61BCE03CD40_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C3021B_535A_AAD7_41CE_A61BCE03CD40_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C3021B_535A_AAD7_41CE_A61BCE03CD40_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C3021B_535A_AAD7_41CE_A61BCE03CD40_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C3021B_535A_AAD7_41CE_A61BCE03CD40_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_59C3021B_535A_AAD7_41CE_A61BCE03CD40_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C3021B_535A_AAD7_41CE_A61BCE03CD40_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C3021B_535A_AAD7_41CE_A61BCE03CD40_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_59C3021B_535A_AAD7_41CE_A61BCE03CD40"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_59C3021B_535A_AAD7_41CE_A61BCE03CD40_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "pitch": -0.02,
   "yaw": 88.14
  }
 },
 {
  "class": "Panorama",
  "label": "MODERN MASTER BEDROOM",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 110,
  "thumbnailUrl": "media/panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 14.74,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5_0_HS_12_0_map.gif",
           "height": 50,
           "width": 16
          }
         ]
        },
        "pitch": -19.74,
        "yaw": -116.34
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_36D39C59_3D73_5FE5_41C5_2385275818D7",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5_0_HS_12_0.png",
           "height": 827,
           "width": 261
          }
         ]
        },
        "hfov": 14.74,
        "pitch": -19.74,
        "yaw": -116.34
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_37C82571_3D8C_C9A5_41CC_C24F6C0B2854, this.camera_2F764B21_3EB3_4EDB_41B3_675E19C0A988); this.mainPlayList.set('selectedIndex', 35)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 8.22,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5_0_HS_14_0_0_map.gif",
           "height": 61,
           "width": 71
          }
         ]
        },
        "pitch": -16.77,
        "yaw": -115.83
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_2D656E1C_3D74_C6E9_41C4_E7B878678A22",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5_0_HS_14_0.png",
           "height": 123,
           "width": 143
          }
         ]
        },
        "hfov": 8.22,
        "pitch": -16.77,
        "yaw": -115.83
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_37C82571_3D8C_C9A5_41CC_C24F6C0B2854, this.camera_D03AF955_DE12_6056_41EA_F87ED41CC549); this.mainPlayList.set('selectedIndex', 35)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 6.29,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5_0_HS_16_0_0_map.gif",
           "height": 55,
           "width": 56
          }
         ]
        },
        "pitch": -22.7,
        "yaw": -157.64
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_588A7983_528A_9B9E_41D2_98A56A644822",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5_0_HS_16_0.png",
           "height": 110,
           "width": 113
          }
         ]
        },
        "hfov": 6.29,
        "pitch": -22.7,
        "yaw": -157.64
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 31)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 13.49,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5_0_HS_15_0_map.gif",
           "height": 45,
           "width": 16
          }
         ]
        },
        "pitch": -20.47,
        "yaw": -157.4
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_58CF0FEB_528D_976D_41C2_A835EC22BD50",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5_0_HS_15_0.png",
           "height": 684,
           "width": 240
          }
         ]
        },
        "hfov": 13.49,
        "pitch": -20.47,
        "yaw": -157.4
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A, this.camera_D004E946_DE12_61B2_41EA_4F8492D77681); this.mainPlayList.set('selectedIndex', 31)"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323000,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "pitch": -17.62,
   "yaw": 48.53
  }
 },
 {
  "class": "Panorama",
  "label": "MODERN BATHROOM",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 110,
  "thumbnailUrl": "media/panorama_37C82571_3D8C_C9A5_41CC_C24F6C0B2854_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 54.83,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37C82571_3D8C_C9A5_41CC_C24F6C0B2854_0_HS_0_0_map.gif",
           "height": 31,
           "width": 16
          }
         ]
        },
        "pitch": -14.32,
        "yaw": -153.47
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_37C84571_3D8C_C9A5_41CD_FB9A2DE3F557",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37C82571_3D8C_C9A5_41CC_C24F6C0B2854_0_HS_0_0.png",
           "height": 1877,
           "width": 943
          }
         ]
        },
        "hfov": 54.83,
        "pitch": -14.32,
        "yaw": -153.47
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5, this.camera_2F4D8B0F_3EB3_4EE7_41A1_5B5C70631287); this.mainPlayList.set('selectedIndex', 34)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 7.48,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37C82571_3D8C_C9A5_41CC_C24F6C0B2854_0_HS_2_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -9.32,
        "yaw": -157.26
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_58B0F899_528B_F9AD_41C7_FB95830B9278",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37C82571_3D8C_C9A5_41CC_C24F6C0B2854_0_HS_2_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.48,
        "pitch": -9.32,
        "yaw": -157.26
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5, this.camera_D3808861_DE12_606E_41EB_58A27FD98996); this.mainPlayList.set('selectedIndex', 34)"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37C82571_3D8C_C9A5_41CC_C24F6C0B2854_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37C82571_3D8C_C9A5_41CC_C24F6C0B2854_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37C82571_3D8C_C9A5_41CC_C24F6C0B2854_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37C82571_3D8C_C9A5_41CC_C24F6C0B2854_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37C82571_3D8C_C9A5_41CC_C24F6C0B2854_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37C82571_3D8C_C9A5_41CC_C24F6C0B2854_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37C82571_3D8C_C9A5_41CC_C24F6C0B2854_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37C82571_3D8C_C9A5_41CC_C24F6C0B2854_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37C82571_3D8C_C9A5_41CC_C24F6C0B2854_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37C82571_3D8C_C9A5_41CC_C24F6C0B2854_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_37C82571_3D8C_C9A5_41CC_C24F6C0B2854_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37C82571_3D8C_C9A5_41CC_C24F6C0B2854_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37C82571_3D8C_C9A5_41CC_C24F6C0B2854_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_37C82571_3D8C_C9A5_41CC_C24F6C0B2854"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_37C82571_3D8C_C9A5_41CC_C24F6C0B2854_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -50.97,
     "targetYaw": -7.2,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 20.27,
     "targetYaw": -80.46,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 23.05,
     "targetYaw": 83.49,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "pitch": -40.93,
   "yaw": 83.62
  }
 },
 {
  "class": "Panorama",
  "label": "MODERN BEDROOM 2 OPT 2",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 110,
  "thumbnailUrl": "media/panorama_37EAB33E_3D8D_C99F_417A_FF3FC97EEAA4_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 7.54,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37EAB33E_3D8D_C99F_417A_FF3FC97EEAA4_0_HS_1_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -5.53,
        "yaw": 129.22
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_581757B5_5296_97E5_41A5_D208DFAEDDB2",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37EAB33E_3D8D_C99F_417A_FF3FC97EEAA4_0_HS_1_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.54,
        "pitch": -5.53,
        "yaw": 129.22
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 32)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 20.09,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37EAB33E_3D8D_C99F_417A_FF3FC97EEAA4_0_HS_0_0_map.gif",
           "height": 37,
           "width": 16
          }
         ]
        },
        "pitch": -6.19,
        "yaw": 128.71
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_594E7A55_529B_B8A5_41CB_C4E97C5AA181",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37EAB33E_3D8D_C99F_417A_FF3FC97EEAA4_0_HS_0_0.png",
           "height": 797,
           "width": 336
          }
         ]
        },
        "hfov": 20.09,
        "pitch": -6.19,
        "yaw": 128.71
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB, this.camera_D36EA819_DE12_6FDE_4157_056270EFFFD4); this.mainPlayList.set('selectedIndex', 32)"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37EAB33E_3D8D_C99F_417A_FF3FC97EEAA4_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37EAB33E_3D8D_C99F_417A_FF3FC97EEAA4_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37EAB33E_3D8D_C99F_417A_FF3FC97EEAA4_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37EAB33E_3D8D_C99F_417A_FF3FC97EEAA4_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37EAB33E_3D8D_C99F_417A_FF3FC97EEAA4_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37EAB33E_3D8D_C99F_417A_FF3FC97EEAA4_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37EAB33E_3D8D_C99F_417A_FF3FC97EEAA4_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37EAB33E_3D8D_C99F_417A_FF3FC97EEAA4_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37EAB33E_3D8D_C99F_417A_FF3FC97EEAA4_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37EAB33E_3D8D_C99F_417A_FF3FC97EEAA4_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_37EAB33E_3D8D_C99F_417A_FF3FC97EEAA4_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37EAB33E_3D8D_C99F_417A_FF3FC97EEAA4_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37EAB33E_3D8D_C99F_417A_FF3FC97EEAA4_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_37EAB33E_3D8D_C99F_417A_FF3FC97EEAA4"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_37EAB33E_3D8D_C99F_417A_FF3FC97EEAA4_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "pitch": -0.4,
   "yaw": 70.04
  }
 },
 {
  "class": "Panorama",
  "label": "modern bedroom 3",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 110,
  "thumbnailUrl": "media/panorama_D8417219_D1DF_63E2_41D6_C0A2D1F29357_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 7.29,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D8417219_D1DF_63E2_41D6_C0A2D1F29357_0_HS_1_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -15.88,
        "yaw": -150.44
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_DB1965FE_D1E8_E01E_41AB_63B17CEE70D2",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D8417219_D1DF_63E2_41D6_C0A2D1F29357_0_HS_1_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.29,
        "pitch": -15.88,
        "yaw": -150.44
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A, this.camera_D3E56903_DE12_61B2_41E7_BD74D40C505B); this.mainPlayList.set('selectedIndex', 31)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 25.35,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D8417219_D1DF_63E2_41D6_C0A2D1F29357_0_HS_0_0_map.gif",
           "height": 42,
           "width": 16
          }
         ]
        },
        "pitch": -10.29,
        "yaw": -151.45
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_DAE4989C_D1E8_A0E2_41D4_9B63FE8EA41C",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D8417219_D1DF_63E2_41D6_C0A2D1F29357_0_HS_0_0.png",
           "height": 1145,
           "width": 429
          }
         ]
        },
        "hfov": 25.35,
        "pitch": -10.29,
        "yaw": -151.45
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8417219_D1DF_63E2_41D6_C0A2D1F29357_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8417219_D1DF_63E2_41D6_C0A2D1F29357_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8417219_D1DF_63E2_41D6_C0A2D1F29357_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8417219_D1DF_63E2_41D6_C0A2D1F29357_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8417219_D1DF_63E2_41D6_C0A2D1F29357_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8417219_D1DF_63E2_41D6_C0A2D1F29357_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8417219_D1DF_63E2_41D6_C0A2D1F29357_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8417219_D1DF_63E2_41D6_C0A2D1F29357_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8417219_D1DF_63E2_41D6_C0A2D1F29357_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8417219_D1DF_63E2_41D6_C0A2D1F29357_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_D8417219_D1DF_63E2_41D6_C0A2D1F29357_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8417219_D1DF_63E2_41D6_C0A2D1F29357_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8417219_D1DF_63E2_41D6_C0A2D1F29357_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_D8417219_D1DF_63E2_41D6_C0A2D1F29357"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_D8417219_D1DF_63E2_41D6_C0A2D1F29357_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "pitch": -1.3,
   "yaw": 14.41
  }
 },
 {
  "class": "Panorama",
  "label": "bungalow pano from terrace 1",
  "hfovMin": 60,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_D84831E4_D1B8_E728_41DA_F6A150C811BE_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 7.41,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D84831E4_D1B8_E728_41DA_F6A150C811BE_0_HS_1_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -12.1,
        "yaw": 147.66
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_DFC7D1BA_D1E8_A026_41CD_C6225FE1A157",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D84831E4_D1B8_E728_41DA_F6A150C811BE_0_HS_1_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.41,
        "pitch": -12.1,
        "yaw": 147.66
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A, this.camera_D34517D1_DE12_60AE_41D1_D7785B40F19A); this.mainPlayList.set('selectedIndex', 31)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 59.5,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D84831E4_D1B8_E728_41DA_F6A150C811BE_0_HS_0_0_map.gif",
           "height": 15,
           "width": 20
          }
         ]
        },
        "pitch": -3.6,
        "yaw": 149.68
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_DF85A4B9_D1E9_6022_41D1_E850D31823B4",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D84831E4_D1B8_E728_41DA_F6A150C811BE_0_HS_0_0.png",
           "height": 778,
           "width": 993
          }
         ]
        },
        "hfov": 59.5,
        "pitch": -3.6,
        "yaw": 149.68
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D84831E4_D1B8_E728_41DA_F6A150C811BE_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D84831E4_D1B8_E728_41DA_F6A150C811BE_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D84831E4_D1B8_E728_41DA_F6A150C811BE_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D84831E4_D1B8_E728_41DA_F6A150C811BE_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D84831E4_D1B8_E728_41DA_F6A150C811BE_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D84831E4_D1B8_E728_41DA_F6A150C811BE_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D84831E4_D1B8_E728_41DA_F6A150C811BE_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D84831E4_D1B8_E728_41DA_F6A150C811BE_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D84831E4_D1B8_E728_41DA_F6A150C811BE_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D84831E4_D1B8_E728_41DA_F6A150C811BE_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_D84831E4_D1B8_E728_41DA_F6A150C811BE_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D84831E4_D1B8_E728_41DA_F6A150C811BE_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D84831E4_D1B8_E728_41DA_F6A150C811BE_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_D84831E4_D1B8_E728_41DA_F6A150C811BE"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_D84831E4_D1B8_E728_41DA_F6A150C811BE_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "label": "BOHO LIVING ROOM",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_37A81EB9_3D8D_58A5_41AA_C4ACED0FBF57_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 7.58,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A81EB9_3D8D_58A5_41AA_C4ACED0FBF57_0_HS_3_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -1.74,
        "yaw": 7.45
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5824A614_5296_A8BB_41B3_741C63514DEF",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A81EB9_3D8D_58A5_41AA_C4ACED0FBF57_0_HS_3_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.58,
        "pitch": -1.74,
        "yaw": 7.45
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 21.21,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A81EB9_3D8D_58A5_41AA_C4ACED0FBF57_0_HS_2_0_map.gif",
           "height": 34,
           "width": 16
          }
         ]
        },
        "pitch": -1.76,
        "yaw": 9.71
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_59A11D28_5295_B8EB_41D1_3E5698875A19",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A81EB9_3D8D_58A5_41AA_C4ACED0FBF57_0_HS_2_0.png",
           "height": 758,
           "width": 353
          }
         ]
        },
        "hfov": 21.21,
        "pitch": -1.76,
        "yaw": 9.71
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 7.46,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A81EB9_3D8D_58A5_41AA_C4ACED0FBF57_0_HS_0_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -10.07,
        "yaw": -103.45
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5E82D39C_536D_69D2_41D0_F36B5DBAC9EC",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A81EB9_3D8D_58A5_41AA_C4ACED0FBF57_0_HS_0_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.46,
        "pitch": -10.07,
        "yaw": -103.45
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_37A859F3_3D8D_38A4_418C_5303DC82A478, this.camera_8B8617A3_AAB2_256A_41C0_9A29AB91963E); this.mainPlayList.set('selectedIndex', 40)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 18.62,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A81EB9_3D8D_58A5_41AA_C4ACED0FBF57_0_HS_1_0_map.gif",
           "height": 19,
           "width": 16
          }
         ]
        },
        "pitch": -10.72,
        "yaw": -102.82
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5EBEDE2C_536D_9AF2_41B5_3B553EC12B87",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A81EB9_3D8D_58A5_41AA_C4ACED0FBF57_0_HS_1_0.png",
           "height": 387,
           "width": 315
          }
         ]
        },
        "hfov": 18.62,
        "pitch": -10.72,
        "yaw": -102.82
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_37A859F3_3D8D_38A4_418C_5303DC82A478, this.camera_D37BF7E3_DE12_6072_41D2_F9B98D0C94E9); this.mainPlayList.set('selectedIndex', 40)"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A81EB9_3D8D_58A5_41AA_C4ACED0FBF57_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A81EB9_3D8D_58A5_41AA_C4ACED0FBF57_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A81EB9_3D8D_58A5_41AA_C4ACED0FBF57_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A81EB9_3D8D_58A5_41AA_C4ACED0FBF57_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A81EB9_3D8D_58A5_41AA_C4ACED0FBF57_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A81EB9_3D8D_58A5_41AA_C4ACED0FBF57_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A81EB9_3D8D_58A5_41AA_C4ACED0FBF57_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A81EB9_3D8D_58A5_41AA_C4ACED0FBF57_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A81EB9_3D8D_58A5_41AA_C4ACED0FBF57_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A81EB9_3D8D_58A5_41AA_C4ACED0FBF57_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_37A81EB9_3D8D_58A5_41AA_C4ACED0FBF57_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A81EB9_3D8D_58A5_41AA_C4ACED0FBF57_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A81EB9_3D8D_58A5_41AA_C4ACED0FBF57_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_37A81EB9_3D8D_58A5_41AA_C4ACED0FBF57"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_37A81EB9_3D8D_58A5_41AA_C4ACED0FBF57_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": -0.12,
   "yaw": -124.56
  }
 },
 {
  "class": "Panorama",
  "label": "BOHO DINING AREA",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 7.49,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_0_HS_6_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -8.56,
        "yaw": -6.44
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5D408919_5365_A6D3_41A6_3B72A51270EB",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_0_HS_6_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.49,
        "pitch": -8.56,
        "yaw": -6.44
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_37A91F68_3D8C_D9A3_41CA_B317408EB7FB, this.camera_D3690807_DE12_6FB2_41DD_DCB18B2FFEE4); this.mainPlayList.set('selectedIndex', 44)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 7.58,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_0_HS_4_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": 0,
        "yaw": -78.02
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5DBB5C1F_5365_9ECF_41CB_527D1C1F20AB",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_0_HS_4_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.58,
        "pitch": 0,
        "yaw": -78.02
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_37A82945_3D8D_79EC_41C5_0E9F64DED0AD, this.camera_D370C7F5_DE12_6056_41D1_50B77BFF34EF); this.mainPlayList.set('selectedIndex', 42)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 39.98,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_0_HS_12_0_map.gif",
           "height": 16,
           "width": 17
          }
         ]
        },
        "pitch": 34.52,
        "yaw": -78.94
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C177F07D_D1B9_A022_41CF_75887DEA5494",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_0_HS_12_0.png",
           "height": 751,
           "width": 808
          }
         ]
        },
        "hfov": 39.98,
        "pitch": 34.52,
        "yaw": -78.94
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 6.48,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_0_HS_2_0_0_map.gif",
           "height": 52,
           "width": 54
          }
         ]
        },
        "pitch": -9.01,
        "yaw": -144.27
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5DCB1096_535E_E7D1_41BD_CF1CC58A76AD",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_0_HS_2_0.png",
           "height": 105,
           "width": 109
          }
         ]
        },
        "hfov": 6.48,
        "pitch": -9.01,
        "yaw": -144.27
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_37A81EB9_3D8D_58A5_41AA_C4ACED0FBF57, this.camera_8BB857B5_AAB2_256E_41CD_BE9C3774B705); this.mainPlayList.set('selectedIndex', 39)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 36.86,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_0_HS_3_0_map.gif",
           "height": 17,
           "width": 16
          }
         ]
        },
        "pitch": -6.97,
        "yaw": -145.14
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5C3AE51C_535A_AED1_41D3_42DAF80EC04D",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_0_HS_3_0.png",
           "height": 661,
           "width": 618
          }
         ]
        },
        "hfov": 36.86,
        "pitch": -6.97,
        "yaw": -145.14
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_37A81EB9_3D8D_58A5_41AA_C4ACED0FBF57, this.camera_D37537FE_DE12_6052_41D3_C8C5EEDFC883); this.mainPlayList.set('selectedIndex', 39)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 7.48,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_0_HS_0_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -9.48,
        "yaw": 25.23
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5D8141B5_535D_69D3_41CE_3E888C61BBEE",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_0_HS_0_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.48,
        "pitch": -9.48,
        "yaw": 25.23
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_37A8244E_3D8D_4FFC_41B4_58B5B47F7D1E, this.camera_8BBCF7BE_AAB2_255A_41E1_3A2850220ED6); this.mainPlayList.set('selectedIndex', 41)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 26.26,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_0_HS_1_0_map.gif",
           "height": 39,
           "width": 16
          }
         ]
        },
        "pitch": -0.31,
        "yaw": 27.15
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5C154310_535E_AAD1_41B0_2794892D3F42",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_0_HS_1_0.png",
           "height": 1073,
           "width": 437
          }
         ]
        },
        "hfov": 26.26,
        "pitch": -0.31,
        "yaw": 27.15
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_37A8244E_3D8D_4FFC_41B4_58B5B47F7D1E, this.camera_D36AE810_DE12_6FAE_41E8_E1EDABDA5650); this.mainPlayList.set('selectedIndex', 41)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 6.85,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_0_HS_11_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": 25.29,
        "yaw": -78.95
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_DEF8F03B_D1D8_A026_41BF_F864C452EE8B",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_0_HS_11_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 6.85,
        "pitch": 25.29,
        "yaw": -78.95
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D85D1BBD_D1DF_E022_41BA_13361ABD752C, this.camera_D37F07EC_DE12_6076_41DC_BA8B152EAF78); this.mainPlayList.set('selectedIndex', 45)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 42.27,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_0_HS_14_0_map.gif",
           "height": 16,
           "width": 16
          }
         ]
        },
        "pitch": -11.89,
        "yaw": -77.76
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_F4C13938_D259_6022_41C2_D1939414C04F",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_0_HS_14_0.png",
           "height": 720,
           "width": 720
          }
         ]
        },
        "hfov": 42.27,
        "pitch": -11.89,
        "yaw": -77.76
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 40.73,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_0_HS_13_0_map.gif",
           "height": 24,
           "width": 16
          }
         ]
        },
        "pitch": 5.74,
        "yaw": -13.3
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_F999594F_D278_A07E_41DC_0ADAE3F49B30",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_0_HS_13_0.png",
           "height": 1035,
           "width": 682
          }
         ]
        },
        "hfov": 40.73,
        "pitch": 5.74,
        "yaw": -13.3
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_37A859F3_3D8D_38A4_418C_5303DC82A478"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0.32,
   "yaw": -45.93
  }
 },
 {
  "class": "Panorama",
  "label": "BOHO KITCHEN",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_37A8244E_3D8D_4FFC_41B4_58B5B47F7D1E_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 20.21,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A8244E_3D8D_4FFC_41B4_58B5B47F7D1E_0_HS_3_0_map.gif",
           "height": 43,
           "width": 16
          }
         ]
        },
        "pitch": -1.44,
        "yaw": -26.15
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5D7F6A22_53A5_9AF6_41A2_462E8B86E150",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A8244E_3D8D_4FFC_41B4_58B5B47F7D1E_0_HS_3_0.png",
           "height": 905,
           "width": 336
          }
         ]
        },
        "hfov": 20.21,
        "pitch": -1.44,
        "yaw": -26.15
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 7.54,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A8244E_3D8D_4FFC_41B4_58B5B47F7D1E_0_HS_2_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -5.53,
        "yaw": -29.43
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5C9446A6_53A5_ABF1_41D3_5EF84743C862",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A8244E_3D8D_4FFC_41B4_58B5B47F7D1E_0_HS_2_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.54,
        "pitch": -5.53,
        "yaw": -29.43
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 17.54,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A8244E_3D8D_4FFC_41B4_58B5B47F7D1E_0_HS_1_0_map.gif",
           "height": 41,
           "width": 16
          }
         ]
        },
        "pitch": -6.98,
        "yaw": -131.5
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5D65E19E_53BA_A9D1_41C1_E090768E4E77",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A8244E_3D8D_4FFC_41B4_58B5B47F7D1E_0_HS_1_0.png",
           "height": 759,
           "width": 294
          }
         ]
        },
        "hfov": 17.54,
        "pitch": -6.98,
        "yaw": -131.5
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 40)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 7.26,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A8244E_3D8D_4FFC_41B4_58B5B47F7D1E_0_HS_0_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -16.64,
        "yaw": -132.76
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5CEBA2CA_53BD_6BB1_41D1_D5AD6211A927",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A8244E_3D8D_4FFC_41B4_58B5B47F7D1E_0_HS_0_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.26,
        "pitch": -16.64,
        "yaw": -132.76
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_37A859F3_3D8D_38A4_418C_5303DC82A478, this.camera_D09A278D_DE12_60B6_41C2_70E4933C3A2A); this.mainPlayList.set('selectedIndex', 40)"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A8244E_3D8D_4FFC_41B4_58B5B47F7D1E_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A8244E_3D8D_4FFC_41B4_58B5B47F7D1E_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A8244E_3D8D_4FFC_41B4_58B5B47F7D1E_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A8244E_3D8D_4FFC_41B4_58B5B47F7D1E_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A8244E_3D8D_4FFC_41B4_58B5B47F7D1E_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A8244E_3D8D_4FFC_41B4_58B5B47F7D1E_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A8244E_3D8D_4FFC_41B4_58B5B47F7D1E_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A8244E_3D8D_4FFC_41B4_58B5B47F7D1E_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A8244E_3D8D_4FFC_41B4_58B5B47F7D1E_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A8244E_3D8D_4FFC_41B4_58B5B47F7D1E_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_37A8244E_3D8D_4FFC_41B4_58B5B47F7D1E_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A8244E_3D8D_4FFC_41B4_58B5B47F7D1E_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A8244E_3D8D_4FFC_41B4_58B5B47F7D1E_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_37A8244E_3D8D_4FFC_41B4_58B5B47F7D1E"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_37A8244E_3D8D_4FFC_41B4_58B5B47F7D1E_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 0
  }
 },
 {
  "class": "Panorama",
  "label": "BOHO MASTERBEDROOM",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_37A82945_3D8D_79EC_41C5_0E9F64DED0AD_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 7.51,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A82945_3D8D_79EC_41C5_0E9F64DED0AD_0_HS_2_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -7.88,
        "yaw": -2.56
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5C2A1E1E_53BE_9AD1_41C2_EF1C96CC82D4",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A82945_3D8D_79EC_41C5_0E9F64DED0AD_0_HS_2_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.51,
        "pitch": -7.88,
        "yaw": -2.56
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_BB13D09B_A63A_DB12_41E2_F4BD3A49BA2A, this.camera_D395F845_DE12_6FB1_417B_4598AF448EA2); this.mainPlayList.set('selectedIndex', 46)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 51.03,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A82945_3D8D_79EC_41C5_0E9F64DED0AD_0_HS_4_0_map.gif",
           "height": 29,
           "width": 15
          }
         ]
        },
        "pitch": 0.06,
        "yaw": -4.17
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C0C0BB30_D1AB_A022_41DE_663FF3F7A981",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A82945_3D8D_79EC_41C5_0E9F64DED0AD_0_HS_4_0.png",
           "height": 1541,
           "width": 850
          }
         ]
        },
        "hfov": 51.03,
        "pitch": 0.06,
        "yaw": -4.17
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 6.45,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A82945_3D8D_79EC_41C5_0E9F64DED0AD_0_HS_0_0_0_map.gif",
           "height": 53,
           "width": 53
          }
         ]
        },
        "pitch": -3.55,
        "yaw": 97.53
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_439A80D7_53BB_E75F_41D3_75427E77E518",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A82945_3D8D_79EC_41C5_0E9F64DED0AD_0_HS_0_0.png",
           "height": 107,
           "width": 107
          }
         ]
        },
        "hfov": 6.45,
        "pitch": -3.55,
        "yaw": 97.53
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_37A859F3_3D8D_38A4_418C_5303DC82A478, this.camera_D389A84E_DE12_6FB3_41BF_DEE36AF766BC); this.mainPlayList.set('selectedIndex', 40)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 19.45,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A82945_3D8D_79EC_41C5_0E9F64DED0AD_0_HS_1_0_map.gif",
           "height": 30,
           "width": 16
          }
         ]
        },
        "pitch": -0.34,
        "yaw": 99.02
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_43AE4589_53BD_E9B3_41A7_D8FCAB9CAD65",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A82945_3D8D_79EC_41C5_0E9F64DED0AD_0_HS_1_0.png",
           "height": 627,
           "width": 324
          }
         ]
        },
        "hfov": 19.45,
        "pitch": -0.34,
        "yaw": 99.02
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A82945_3D8D_79EC_41C5_0E9F64DED0AD_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A82945_3D8D_79EC_41C5_0E9F64DED0AD_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A82945_3D8D_79EC_41C5_0E9F64DED0AD_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A82945_3D8D_79EC_41C5_0E9F64DED0AD_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A82945_3D8D_79EC_41C5_0E9F64DED0AD_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A82945_3D8D_79EC_41C5_0E9F64DED0AD_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A82945_3D8D_79EC_41C5_0E9F64DED0AD_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A82945_3D8D_79EC_41C5_0E9F64DED0AD_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A82945_3D8D_79EC_41C5_0E9F64DED0AD_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A82945_3D8D_79EC_41C5_0E9F64DED0AD_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_37A82945_3D8D_79EC_41C5_0E9F64DED0AD_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A82945_3D8D_79EC_41C5_0E9F64DED0AD_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A82945_3D8D_79EC_41C5_0E9F64DED0AD_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_37A82945_3D8D_79EC_41C5_0E9F64DED0AD"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_37A82945_3D8D_79EC_41C5_0E9F64DED0AD_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 1.01,
   "yaw": 146.78
  }
 },
 {
  "class": "Panorama",
  "label": "BOHO BATHROOM",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_3767C48A_3D8C_CF67_41C3_F2694027A356_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 41.62,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_3767C48A_3D8C_CF67_41C3_F2694027A356_0_HS_1_0_map.gif",
           "height": 52,
           "width": 16
          }
         ]
        },
        "pitch": -3.22,
        "yaw": 157.64
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5C61DA3D_53A7_9AD3_41C4_D1BF85C1E802",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_3767C48A_3D8C_CF67_41C3_F2694027A356_0_HS_1_0.png",
           "height": 2048,
           "width": 625
          }
         ]
        },
        "hfov": 41.62,
        "pitch": -3.22,
        "yaw": 157.64
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D85D1BBD_D1DF_E022_41BA_13361ABD752C, this.camera_D07A974E_DE12_61B2_41EB_5762E755355E); this.mainPlayList.set('selectedIndex', 45)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 7.56,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_3767C48A_3D8C_CF67_41C3_F2694027A356_0_HS_0_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -4.22,
        "yaw": 158.8
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_43954D90_53A5_79D1_41C3_1E14F397625F",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_3767C48A_3D8C_CF67_41C3_F2694027A356_0_HS_0_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.56,
        "pitch": -4.22,
        "yaw": 158.8
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_37A82945_3D8D_79EC_41C5_0E9F64DED0AD, this.camera_8BBAB7AC_AAB2_257E_41AF_0B250A948D76); this.mainPlayList.set('selectedIndex', 42)"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_3767C48A_3D8C_CF67_41C3_F2694027A356_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_3767C48A_3D8C_CF67_41C3_F2694027A356_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_3767C48A_3D8C_CF67_41C3_F2694027A356_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_3767C48A_3D8C_CF67_41C3_F2694027A356_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_3767C48A_3D8C_CF67_41C3_F2694027A356_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_3767C48A_3D8C_CF67_41C3_F2694027A356_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_3767C48A_3D8C_CF67_41C3_F2694027A356_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_3767C48A_3D8C_CF67_41C3_F2694027A356_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_3767C48A_3D8C_CF67_41C3_F2694027A356_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_3767C48A_3D8C_CF67_41C3_F2694027A356_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_3767C48A_3D8C_CF67_41C3_F2694027A356_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_3767C48A_3D8C_CF67_41C3_F2694027A356_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_3767C48A_3D8C_CF67_41C3_F2694027A356_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_3767C48A_3D8C_CF67_41C3_F2694027A356"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_3767C48A_3D8C_CF67_41C3_F2694027A356_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -27.73,
     "targetYaw": 83.49,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -41.12,
     "targetYaw": 8.21,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 21.28,
     "targetYaw": -80.21,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": -7.9,
   "yaw": 91.46
  }
 },
 {
  "class": "Panorama",
  "label": "BOHO BEDROOM 2",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_37A91F68_3D8C_D9A3_41CA_B317408EB7FB_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 17.29,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A91F68_3D8C_D9A3_41CA_B317408EB7FB_0_HS_3_0_map.gif",
           "height": 44,
           "width": 16
          }
         ]
        },
        "pitch": -4.65,
        "yaw": 59.31
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_43641302_53AF_EAB1_41CF_6B0E5EF72A08",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A91F68_3D8C_D9A3_41CA_B317408EB7FB_0_HS_3_0.png",
           "height": 803,
           "width": 289
          }
         ]
        },
        "hfov": 17.29,
        "pitch": -4.65,
        "yaw": 59.31
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 40)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 7.48,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A91F68_3D8C_D9A3_41CA_B317408EB7FB_0_HS_2_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -9.06,
        "yaw": 59.22
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_434AD8C3_53AD_A7B7_41D3_FECEA34612A1",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_37A91F68_3D8C_D9A3_41CA_B317408EB7FB_0_HS_2_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.48,
        "pitch": -9.06,
        "yaw": 59.22
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_37A859F3_3D8D_38A4_418C_5303DC82A478, this.camera_D0241988_DE12_60BE_41D8_12F6C25FAEA9); this.mainPlayList.set('selectedIndex', 40)"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A91F68_3D8C_D9A3_41CA_B317408EB7FB_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A91F68_3D8C_D9A3_41CA_B317408EB7FB_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A91F68_3D8C_D9A3_41CA_B317408EB7FB_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A91F68_3D8C_D9A3_41CA_B317408EB7FB_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A91F68_3D8C_D9A3_41CA_B317408EB7FB_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A91F68_3D8C_D9A3_41CA_B317408EB7FB_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A91F68_3D8C_D9A3_41CA_B317408EB7FB_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A91F68_3D8C_D9A3_41CA_B317408EB7FB_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A91F68_3D8C_D9A3_41CA_B317408EB7FB_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A91F68_3D8C_D9A3_41CA_B317408EB7FB_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_37A91F68_3D8C_D9A3_41CA_B317408EB7FB_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A91F68_3D8C_D9A3_41CA_B317408EB7FB_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_37A91F68_3D8C_D9A3_41CA_B317408EB7FB_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_37A91F68_3D8C_D9A3_41CA_B317408EB7FB"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_37A91F68_3D8C_D9A3_41CA_B317408EB7FB_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0.17,
   "yaw": 127.24
  }
 },
 {
  "class": "Panorama",
  "label": "boho bedroom 3",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_D85D1BBD_D1DF_E022_41BA_13361ABD752C_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 6.91,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D85D1BBD_D1DF_E022_41BA_13361ABD752C_0_HS_3_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -24.22,
        "yaw": 27.66
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_DE84EC50_D1B7_E062_41C1_7456D0671747",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D85D1BBD_D1DF_E022_41BA_13361ABD752C_0_HS_3_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 6.91,
        "pitch": -24.22,
        "yaw": 27.66
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_3767C48A_3D8C_CF67_41C3_F2694027A356, this.camera_D3B6E88E_DE12_60B2_41D7_2E38663CA3C7); this.mainPlayList.set('selectedIndex', 43)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 26.3,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D85D1BBD_D1DF_E022_41BA_13361ABD752C_0_HS_2_0_map.gif",
           "height": 37,
           "width": 16
          }
         ]
        },
        "pitch": -20.27,
        "yaw": 26.78
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C18A62B8_D1A8_E022_41E9_EC1E6009E0AC",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D85D1BBD_D1DF_E022_41BA_13361ABD752C_0_HS_2_0.png",
           "height": 1082,
           "width": 467
          }
         ]
        },
        "hfov": 26.3,
        "pitch": -20.27,
        "yaw": 26.78
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 7.21,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D85D1BBD_D1DF_E022_41BA_13361ABD752C_0_HS_1_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -17.91,
        "yaw": 147.41
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_DE4569F5_D1A9_6022_41E0_0EC754BE5489",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D85D1BBD_D1DF_E022_41BA_13361ABD752C_0_HS_1_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.21,
        "pitch": -17.91,
        "yaw": 147.41
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_37A859F3_3D8D_38A4_418C_5303DC82A478, this.camera_D3A168A0_DE12_60EE_41E8_EABBF93C25AE); this.mainPlayList.set('selectedIndex', 40)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 28.49,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D85D1BBD_D1DF_E022_41BA_13361ABD752C_0_HS_0_0_map.gif",
           "height": 30,
           "width": 16
          }
         ]
        },
        "pitch": -8.4,
        "yaw": 144.88
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C165C3DC_D1AB_A062_41CB_6EC61F7E5120",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D85D1BBD_D1DF_E022_41BA_13361ABD752C_0_HS_0_0.png",
           "height": 905,
           "width": 480
          }
         ]
        },
        "hfov": 28.49,
        "pitch": -8.4,
        "yaw": 144.88
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D85D1BBD_D1DF_E022_41BA_13361ABD752C_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D85D1BBD_D1DF_E022_41BA_13361ABD752C_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D85D1BBD_D1DF_E022_41BA_13361ABD752C_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D85D1BBD_D1DF_E022_41BA_13361ABD752C_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D85D1BBD_D1DF_E022_41BA_13361ABD752C_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D85D1BBD_D1DF_E022_41BA_13361ABD752C_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D85D1BBD_D1DF_E022_41BA_13361ABD752C_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D85D1BBD_D1DF_E022_41BA_13361ABD752C_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D85D1BBD_D1DF_E022_41BA_13361ABD752C_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D85D1BBD_D1DF_E022_41BA_13361ABD752C_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_D85D1BBD_D1DF_E022_41BA_13361ABD752C_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D85D1BBD_D1DF_E022_41BA_13361ABD752C_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D85D1BBD_D1DF_E022_41BA_13361ABD752C_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_D85D1BBD_D1DF_E022_41BA_13361ABD752C"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_D85D1BBD_D1DF_E022_41BA_13361ABD752C_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": -7.05,
   "yaw": -104.62
  }
 },
 {
  "class": "Panorama",
  "label": "TWIN BUNGALOW TERRACE VIEW",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 110,
  "thumbnailUrl": "media/panorama_BB13D09B_A63A_DB12_41E2_F4BD3A49BA2A_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 7.13,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_BB13D09B_A63A_DB12_41E2_F4BD3A49BA2A_0_HS_1_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -19.93,
        "yaw": -167.37
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_B8368341_A62E_DD6E_41E4_A96DEE378812",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_BB13D09B_A63A_DB12_41E2_F4BD3A49BA2A_0_HS_1_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.13,
        "pitch": -19.93,
        "yaw": -167.37
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_37A82945_3D8D_79EC_41C5_0E9F64DED0AD, this.camera_D3BBD873_DE12_6052_41EA_8D8B997AD221); this.mainPlayList.set('selectedIndex', 42)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 56.99,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_BB13D09B_A63A_DB12_41E2_F4BD3A49BA2A_0_HS_0_0_map.gif",
           "height": 16,
           "width": 16
          }
         ]
        },
        "pitch": -3.02,
        "yaw": -148.94
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_BAEC1271_A62E_DF11_41E3_E84CA39277BA",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_BB13D09B_A63A_DB12_41E2_F4BD3A49BA2A_0_HS_0_0.png",
           "height": 934,
           "width": 951
          }
         ]
        },
        "hfov": 56.99,
        "pitch": -3.02,
        "yaw": -148.94
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BB13D09B_A63A_DB12_41E2_F4BD3A49BA2A_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BB13D09B_A63A_DB12_41E2_F4BD3A49BA2A_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BB13D09B_A63A_DB12_41E2_F4BD3A49BA2A_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BB13D09B_A63A_DB12_41E2_F4BD3A49BA2A_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BB13D09B_A63A_DB12_41E2_F4BD3A49BA2A_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BB13D09B_A63A_DB12_41E2_F4BD3A49BA2A_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BB13D09B_A63A_DB12_41E2_F4BD3A49BA2A_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BB13D09B_A63A_DB12_41E2_F4BD3A49BA2A_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BB13D09B_A63A_DB12_41E2_F4BD3A49BA2A_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BB13D09B_A63A_DB12_41E2_F4BD3A49BA2A_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_BB13D09B_A63A_DB12_41E2_F4BD3A49BA2A_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BB13D09B_A63A_DB12_41E2_F4BD3A49BA2A_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BB13D09B_A63A_DB12_41E2_F4BD3A49BA2A_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_BB13D09B_A63A_DB12_41E2_F4BD3A49BA2A"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_BB13D09B_A63A_DB12_41E2_F4BD3A49BA2A_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "pitch": -15.52,
   "yaw": 78.39
  }
 },
 {
  "class": "Panorama",
  "label": "TRADITIONAL LIVING",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 7.56,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_0_HS_7_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -3.73,
        "yaw": 135.54
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_551F3647_5CFF_2CC2_4136_6C9BBF234EC2",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_0_HS_7_0.png",
           "height": 126,
           "width": 126
          }
         ]
        },
        "hfov": 7.56,
        "pitch": -3.73,
        "yaw": 135.54
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 22.19,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_0_HS_6_0_map.gif",
           "height": 27,
           "width": 16
          }
         ]
        },
        "pitch": -2.5,
        "yaw": 134.51
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_56DB435C_5CFE_E4C6_41D4_AFDEDED76493",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_0_HS_6_0.png",
           "height": 627,
           "width": 370
          }
         ]
        },
        "hfov": 22.19,
        "pitch": -2.5,
        "yaw": 134.51
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 7.5,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_0_HS_5_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -8.31,
        "yaw": -66.82
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_56FF81D3_5C89_E7C1_41BC_EF428C230358",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_0_HS_5_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.5,
        "pitch": -8.31,
        "yaw": -66.82
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 21.68,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_0_HS_4_0_map.gif",
           "height": 31,
           "width": 16
          }
         ]
        },
        "pitch": -3.86,
        "yaw": -67.84
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_564F1A41_5C89_243E_41CA_B9356740C345",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_0_HS_4_0.png",
           "height": 721,
           "width": 362
          }
         ]
        },
        "hfov": 21.68,
        "pitch": -3.86,
        "yaw": -67.84
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_59DDFCCD_5367_7FB3_41D2_CB17D6CFC750, this.camera_D3ECD8FA_DE12_6052_41CF_A5BA9DB02345); this.mainPlayList.set('selectedIndex', 48)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 6.35,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_0_HS_3_0_0_map.gif",
           "height": 50,
           "width": 53
          }
         ]
        },
        "pitch": 3.16,
        "yaw": -104.67
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_56BF67AF_5C89_6C42_41CD_2683EBB11CD3",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_0_HS_3_0.png",
           "height": 101,
           "width": 106
          }
         ]
        },
        "hfov": 6.35,
        "pitch": 3.16,
        "yaw": -104.67
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 20.46,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_0_HS_2_0_map.gif",
           "height": 27,
           "width": 16
          }
         ]
        },
        "pitch": 1.17,
        "yaw": -101.31
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_567BA6CF_5C8E_EDC1_41C3_755B0DE9278A",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_0_HS_2_0.png",
           "height": 581,
           "width": 341
          }
         ]
        },
        "hfov": 20.46,
        "pitch": 1.17,
        "yaw": -101.31
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_59C51C81_5365_9FB2_41C4_9AA9FFF61575, this.camera_D3F638F1_DE12_606E_41D9_EA8D678D6778); this.mainPlayList.set('selectedIndex', 49)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 6.24,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_0_HS_1_0_0_map.gif",
           "height": 55,
           "width": 52
          }
         ]
        },
        "pitch": 2.52,
        "yaw": -121.33
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_57907A76_5C89_24C3_41C0_9F63FD2A2098",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_0_HS_1_0.png",
           "height": 111,
           "width": 104
          }
         ]
        },
        "hfov": 6.24,
        "pitch": 2.52,
        "yaw": -121.33
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_59FAA04E_5366_A6B1_417E_A7CBC9158A99, this.camera_D3F1B8E8_DE12_607E_41E1_53F49B921D26); this.mainPlayList.set('selectedIndex', 51)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 16.2,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_0_HS_0_0_map.gif",
           "height": 45,
           "width": 16
          }
         ]
        },
        "pitch": 4.82,
        "yaw": -121.04
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_57035372_5C8B_24C2_41D3_4F1A41EF961D",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_0_HS_0_0.png",
           "height": 763,
           "width": 270
          }
         ]
        },
        "hfov": 16.2,
        "pitch": 4.82,
        "yaw": -121.04
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 7.52,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_0_HS_9_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": 6.85,
        "yaw": -147.16
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C367A849_D259_6062_41DE_CBE39200428F",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_0_HS_9_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.52,
        "pitch": 6.85,
        "yaw": -147.16
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D8F301A6_D1B8_A728_41AA_28BAC81AC047, this.camera_D3FB68DF_DE12_6052_41E6_DAE8025B7042); this.mainPlayList.set('selectedIndex', 52)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 36.13,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_0_HS_8_0_map.gif",
           "height": 32,
           "width": 16
          }
         ]
        },
        "pitch": -0.44,
        "yaw": -144.51
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C38AE9D0_D258_E062_41D9_18D649A508A0",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_0_HS_8_0.png",
           "height": 1212,
           "width": 602
          }
         ]
        },
        "hfov": 36.13,
        "pitch": -0.44,
        "yaw": -144.51
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_592967CF_5367_694E_41C0_DA66BBB02849_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_592967CF_5367_694E_41C0_DA66BBB02849"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_592967CF_5367_694E_41C0_DA66BBB02849_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": -1.29,
   "yaw": 66.79
  }
 },
 {
  "class": "Panorama",
  "label": "TRADITIONAL KITCHEN",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 110,
  "thumbnailUrl": "media/panorama_59DDFCCD_5367_7FB3_41D2_CB17D6CFC750_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 7.57,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59DDFCCD_5367_7FB3_41D2_CB17D6CFC750_0_HS_1_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -2.75,
        "yaw": -145.14
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_56B049A3_5C8B_2442_41D1_8D7F26F83E3D",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59DDFCCD_5367_7FB3_41D2_CB17D6CFC750_0_HS_1_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.57,
        "pitch": -2.75,
        "yaw": -145.14
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_592967CF_5367_694E_41C0_DA66BBB02849, this.camera_D3A5A8A9_DE12_60FE_41B3_6C9F496A8B93); this.mainPlayList.set('selectedIndex', 47)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 36.76,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59DDFCCD_5367_7FB3_41D2_CB17D6CFC750_0_HS_0_0_map.gif",
           "height": 32,
           "width": 16
          }
         ]
        },
        "pitch": -4.12,
        "yaw": -144.45
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_560C62FD_5C8B_E5C6_41C1_804F244DEF31",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59DDFCCD_5367_7FB3_41D2_CB17D6CFC750_0_HS_0_0.png",
           "height": 1234,
           "width": 614
          }
         ]
        },
        "hfov": 36.76,
        "pitch": -4.12,
        "yaw": -144.45
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_592967CF_5367_694E_41C0_DA66BBB02849, this.camera_8BAAB7D8_AAB2_2526_41E4_B1A7FD548149)"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59DDFCCD_5367_7FB3_41D2_CB17D6CFC750_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59DDFCCD_5367_7FB3_41D2_CB17D6CFC750_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59DDFCCD_5367_7FB3_41D2_CB17D6CFC750_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59DDFCCD_5367_7FB3_41D2_CB17D6CFC750_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59DDFCCD_5367_7FB3_41D2_CB17D6CFC750_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59DDFCCD_5367_7FB3_41D2_CB17D6CFC750_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59DDFCCD_5367_7FB3_41D2_CB17D6CFC750_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59DDFCCD_5367_7FB3_41D2_CB17D6CFC750_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59DDFCCD_5367_7FB3_41D2_CB17D6CFC750_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59DDFCCD_5367_7FB3_41D2_CB17D6CFC750_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_59DDFCCD_5367_7FB3_41D2_CB17D6CFC750_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59DDFCCD_5367_7FB3_41D2_CB17D6CFC750_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59DDFCCD_5367_7FB3_41D2_CB17D6CFC750_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_59DDFCCD_5367_7FB3_41D2_CB17D6CFC750"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_59DDFCCD_5367_7FB3_41D2_CB17D6CFC750_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "pitch": -0.43,
   "yaw": 28.72
  }
 },
 {
  "class": "Panorama",
  "label": "TRADITIONAL MASTER BEDROOM",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_59C51C81_5365_9FB2_41C4_9AA9FFF61575_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 7.49,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C51C81_5365_9FB2_41C4_9AA9FFF61575_0_HS_3_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -8.81,
        "yaw": 120.88
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_567ED22D_5C89_2446_41D0_4254785131B7",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C51C81_5365_9FB2_41C4_9AA9FFF61575_0_HS_3_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.49,
        "pitch": -8.81,
        "yaw": 120.88
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_59F93A57_5365_BB5F_41D1_0AA165E49833, this.camera_D433A53C_D930_83C0_4181_E930B7485BAD); this.mainPlayList.set('selectedIndex', 50)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 27.11,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C51C81_5365_9FB2_41C4_9AA9FFF61575_0_HS_2_0_map.gif",
           "height": 23,
           "width": 16
          }
         ]
        },
        "pitch": -5.53,
        "yaw": 127.42
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5625371D_5C86_EC46_41A7_D164240DA747",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C51C81_5365_9FB2_41C4_9AA9FFF61575_0_HS_2_0.png",
           "height": 667,
           "width": 453
          }
         ]
        },
        "hfov": 27.11,
        "pitch": -5.53,
        "yaw": 127.42
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_59F93A57_5365_BB5F_41D1_0AA165E49833, this.camera_D34A07B6_DE12_60D2_41E3_A1D27E3B6D2C); this.mainPlayList.set('selectedIndex', 50)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 6.5,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C51C81_5365_9FB2_41C4_9AA9FFF61575_0_HS_1_0_0_map.gif",
           "height": 55,
           "width": 54
          }
         ]
        },
        "pitch": -8.25,
        "yaw": 70.61
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_57C996D7_5C87_EDC2_41D2_B9228CAC88D8",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C51C81_5365_9FB2_41C4_9AA9FFF61575_0_HS_1_0.png",
           "height": 110,
           "width": 109
          }
         ]
        },
        "hfov": 6.5,
        "pitch": -8.25,
        "yaw": 70.61
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_592967CF_5367_694E_41C0_DA66BBB02849, this.camera_D34027C8_DE12_60BE_41C6_54086DF90F09); this.mainPlayList.set('selectedIndex', 47)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 19,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C51C81_5365_9FB2_41C4_9AA9FFF61575_0_HS_0_0_map.gif",
           "height": 34,
           "width": 16
          }
         ]
        },
        "pitch": -2.68,
        "yaw": 67.53
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_57AAAD3B_5C99_7C42_41AF_3E8E19D79D6C",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59C51C81_5365_9FB2_41C4_9AA9FFF61575_0_HS_0_0.png",
           "height": 677,
           "width": 317
          }
         ]
        },
        "hfov": 19,
        "pitch": -2.68,
        "yaw": 67.53
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C51C81_5365_9FB2_41C4_9AA9FFF61575_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C51C81_5365_9FB2_41C4_9AA9FFF61575_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C51C81_5365_9FB2_41C4_9AA9FFF61575_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C51C81_5365_9FB2_41C4_9AA9FFF61575_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C51C81_5365_9FB2_41C4_9AA9FFF61575_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C51C81_5365_9FB2_41C4_9AA9FFF61575_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C51C81_5365_9FB2_41C4_9AA9FFF61575_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C51C81_5365_9FB2_41C4_9AA9FFF61575_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C51C81_5365_9FB2_41C4_9AA9FFF61575_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C51C81_5365_9FB2_41C4_9AA9FFF61575_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_59C51C81_5365_9FB2_41C4_9AA9FFF61575_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C51C81_5365_9FB2_41C4_9AA9FFF61575_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59C51C81_5365_9FB2_41C4_9AA9FFF61575_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_59C51C81_5365_9FB2_41C4_9AA9FFF61575"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_59C51C81_5365_9FB2_41C4_9AA9FFF61575_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": -0.3,
   "yaw": 29.79
  }
 },
 {
  "class": "Panorama",
  "label": "TRADITIONAL BATHROOM",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 110,
  "thumbnailUrl": "media/panorama_59F93A57_5365_BB5F_41D1_0AA165E49833_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 7.57,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59F93A57_5365_BB5F_41D1_0AA165E49833_0_HS_1_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -3,
        "yaw": 10.74
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_57CA468C_5C9F_6C46_41C4_6B5EB22CDD3C",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59F93A57_5365_BB5F_41D1_0AA165E49833_0_HS_1_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.57,
        "pitch": -3,
        "yaw": 10.74
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_59C51C81_5365_9FB2_41C4_9AA9FFF61575, this.camera_D3C2F8D6_DE12_6052_41B0_A66722CC58A0); this.mainPlayList.set('selectedIndex', 49)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 21.81,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59F93A57_5365_BB5F_41D1_0AA165E49833_0_HS_0_0_map.gif",
           "height": 90,
           "width": 16
          }
         ]
        },
        "pitch": -7.06,
        "yaw": 11.1
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_5786EEA6_5C9F_5C43_41B4_9B14D29B1753",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59F93A57_5365_BB5F_41D1_0AA165E49833_0_HS_0_0.png",
           "height": 2048,
           "width": 364
          }
         ]
        },
        "hfov": 21.81,
        "pitch": -7.06,
        "yaw": 11.1
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59F93A57_5365_BB5F_41D1_0AA165E49833_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59F93A57_5365_BB5F_41D1_0AA165E49833_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59F93A57_5365_BB5F_41D1_0AA165E49833_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59F93A57_5365_BB5F_41D1_0AA165E49833_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59F93A57_5365_BB5F_41D1_0AA165E49833_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59F93A57_5365_BB5F_41D1_0AA165E49833_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59F93A57_5365_BB5F_41D1_0AA165E49833_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59F93A57_5365_BB5F_41D1_0AA165E49833_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59F93A57_5365_BB5F_41D1_0AA165E49833_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59F93A57_5365_BB5F_41D1_0AA165E49833_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_59F93A57_5365_BB5F_41D1_0AA165E49833_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59F93A57_5365_BB5F_41D1_0AA165E49833_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59F93A57_5365_BB5F_41D1_0AA165E49833_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_59F93A57_5365_BB5F_41D1_0AA165E49833"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_59F93A57_5365_BB5F_41D1_0AA165E49833_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -28.74,
     "targetYaw": 93.6,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 6.88,
     "targetYaw": -132.25,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "pitch": -11.3,
   "yaw": 110.73
  }
 },
 {
  "class": "Panorama",
  "label": "TRADITIONAL BEDROOM 2",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_59FAA04E_5366_A6B1_417E_A7CBC9158A99_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 7.56,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59FAA04E_5366_A6B1_417E_A7CBC9158A99_0_HS_1_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -4.01,
        "yaw": 72.13
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_57D056B1_5C9B_2C5E_41D3_1B701D7E535D",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59FAA04E_5366_A6B1_417E_A7CBC9158A99_0_HS_1_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.56,
        "pitch": -4.01,
        "yaw": 72.13
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_592967CF_5367_694E_41C0_DA66BBB02849, this.camera_D38CC857_DE12_6052_41E8_E2D459FA2C13); this.mainPlayList.set('selectedIndex', 47)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 31.31,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59FAA04E_5366_A6B1_417E_A7CBC9158A99_0_HS_2_0_map.gif",
           "height": 22,
           "width": 16
          }
         ]
        },
        "pitch": -0.53,
        "yaw": 72.62
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_D9C93F44_D45C_2476_41B7_D9D97A02152C",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_59FAA04E_5366_A6B1_417E_A7CBC9158A99_0_HS_2_0.png",
           "height": 730,
           "width": 521
          }
         ]
        },
        "hfov": 31.31,
        "pitch": -0.53,
        "yaw": 72.62
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59FAA04E_5366_A6B1_417E_A7CBC9158A99_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59FAA04E_5366_A6B1_417E_A7CBC9158A99_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59FAA04E_5366_A6B1_417E_A7CBC9158A99_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59FAA04E_5366_A6B1_417E_A7CBC9158A99_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59FAA04E_5366_A6B1_417E_A7CBC9158A99_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59FAA04E_5366_A6B1_417E_A7CBC9158A99_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59FAA04E_5366_A6B1_417E_A7CBC9158A99_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59FAA04E_5366_A6B1_417E_A7CBC9158A99_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59FAA04E_5366_A6B1_417E_A7CBC9158A99_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59FAA04E_5366_A6B1_417E_A7CBC9158A99_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_59FAA04E_5366_A6B1_417E_A7CBC9158A99_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59FAA04E_5366_A6B1_417E_A7CBC9158A99_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_59FAA04E_5366_A6B1_417E_A7CBC9158A99_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_59FAA04E_5366_A6B1_417E_A7CBC9158A99"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_59FAA04E_5366_A6B1_417E_A7CBC9158A99_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0.95,
   "yaw": -56.33
  }
 },
 {
  "class": "Panorama",
  "label": "ROW HOUSE TYPE 3 -TERRACE",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 110,
  "thumbnailUrl": "media/panorama_D8F301A6_D1B8_A728_41AA_28BAC81AC047_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 7.2,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D8F301A6_D1B8_A728_41AA_28BAC81AC047_0_HS_1_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -18.16,
        "yaw": 163.07
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C2FCED8C_D258_A0E2_41AD_AB39ADC688B1",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D8F301A6_D1B8_A728_41AA_28BAC81AC047_0_HS_1_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.2,
        "pitch": -18.16,
        "yaw": 163.07
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_592967CF_5367_694E_41C0_DA66BBB02849, this.camera_D0716757_DE12_6052_41D3_70F1736BE485); this.mainPlayList.set('selectedIndex', 47)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 43.03,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D8F301A6_D1B8_A728_41AA_28BAC81AC047_0_HS_0_0_map.gif",
           "height": 25,
           "width": 16
          }
         ]
        },
        "pitch": -11.81,
        "yaw": 154.74
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C3C55067_D25B_602E_41DF_D077870FC1DE",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D8F301A6_D1B8_A728_41AA_28BAC81AC047_0_HS_0_0.png",
           "height": 1145,
           "width": 732
          }
         ]
        },
        "hfov": 43.03,
        "pitch": -11.81,
        "yaw": 154.74
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8F301A6_D1B8_A728_41AA_28BAC81AC047_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8F301A6_D1B8_A728_41AA_28BAC81AC047_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8F301A6_D1B8_A728_41AA_28BAC81AC047_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8F301A6_D1B8_A728_41AA_28BAC81AC047_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8F301A6_D1B8_A728_41AA_28BAC81AC047_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8F301A6_D1B8_A728_41AA_28BAC81AC047_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8F301A6_D1B8_A728_41AA_28BAC81AC047_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8F301A6_D1B8_A728_41AA_28BAC81AC047_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8F301A6_D1B8_A728_41AA_28BAC81AC047_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8F301A6_D1B8_A728_41AA_28BAC81AC047_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_D8F301A6_D1B8_A728_41AA_28BAC81AC047_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8F301A6_D1B8_A728_41AA_28BAC81AC047_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8F301A6_D1B8_A728_41AA_28BAC81AC047_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_D8F301A6_D1B8_A728_41AA_28BAC81AC047"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_D8F301A6_D1B8_A728_41AA_28BAC81AC047_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "pitch": -13.36,
   "yaw": -118.12
  }
 },
 {
  "class": "Panorama",
  "label": "RH1_Living",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 110,
  "thumbnailUrl": "media/panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 7.5,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_0_HS_7_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -8.31,
        "yaw": -127.45
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_CAA9A331_D258_E022_41D0_C02A39865C50",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_0_HS_7_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.5,
        "pitch": -8.31,
        "yaw": -127.45
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 28.79,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_0_HS_6_0_map.gif",
           "height": 32,
           "width": 16
          }
         ]
        },
        "pitch": -1.45,
        "yaw": -126.69
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C45D4DCC_D258_A062_41DF_FE16896CA18F",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_0_HS_6_0.png",
           "height": 985,
           "width": 480
          }
         ]
        },
        "hfov": 28.79,
        "pitch": -1.45,
        "yaw": -126.69
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 7.57,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_0_HS_5_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -1.99,
        "yaw": 80.46
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_CB54AD4D_D257_A062_41B2_C8333A4C638E",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_0_HS_5_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.57,
        "pitch": -1.99,
        "yaw": 80.46
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D88C3123_D1D8_A026_41D2_B67731C56229, this.camera_D3D138BB_DE12_60D2_41C0_F3ACF6379C49); this.mainPlayList.set('selectedIndex', 54)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 44.21,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_0_HS_4_0_map.gif",
           "height": 16,
           "width": 16
          }
         ]
        },
        "pitch": 0.69,
        "yaw": 67.96
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C4FB979E_D257_601E_4192_321E2BA2AF0E",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_0_HS_4_0.png",
           "height": 753,
           "width": 736
          }
         ]
        },
        "hfov": 44.21,
        "pitch": 0.69,
        "yaw": 67.96
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 7.58,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_0_HS_3_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": 1.8,
        "yaw": 102.44
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C51660B8_D2A8_A022_41D3_70E1B8A65128",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_0_HS_3_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.58,
        "pitch": 1.8,
        "yaw": 102.44
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D88CA4DC_D1D8_E062_418A_B5733B4B6156, this.camera_D3CC78CD_DE12_60B6_41D2_38BD360F6ACE); this.mainPlayList.set('selectedIndex', 55)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 26.98,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_0_HS_2_0_map.gif",
           "height": 43,
           "width": 16
          }
         ]
        },
        "pitch": 10.69,
        "yaw": 103.59
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C5EA3B56_D2A9_A06E_41DD_5EE2C4938DF6",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_0_HS_2_0.png",
           "height": 1245,
           "width": 457
          }
         ]
        },
        "hfov": 26.98,
        "pitch": 10.69,
        "yaw": 103.59
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 7.28,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_0_HS_1_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": 16.2,
        "yaw": 129.73
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_CA1E1F85_D2AF_60E2_41DC_24FAAE2B7008",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_0_HS_1_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.28,
        "pitch": 16.2,
        "yaw": 129.73
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D85E86B9_D1D8_A022_41D1_303FEE34B957, this.camera_D3D7F8C4_DE12_60B6_41DC_4B7C0821E459); this.mainPlayList.set('selectedIndex', 57)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 37.33,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_0_HS_0_0_map.gif",
           "height": 32,
           "width": 16
          }
         ]
        },
        "pitch": 11.58,
        "yaw": 132.74
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_CA3007B7_D2AF_602E_41E6_9783AD86878C",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_0_HS_0_0.png",
           "height": 1294,
           "width": 635
          }
         ]
        },
        "hfov": 37.33,
        "pitch": 11.58,
        "yaw": 132.74
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": -0.26,
   "yaw": 177.7
  }
 },
 {
  "class": "Panorama",
  "label": "RH1_Kitchen",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 110,
  "thumbnailUrl": "media/panorama_D88C3123_D1D8_A026_41D2_B67731C56229_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 7.56,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88C3123_D1D8_A026_41D2_B67731C56229_0_HS_1_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -4.26,
        "yaw": 1.89
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C81FEEF9_D2A8_A022_41D5_C1876C4BC16B",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88C3123_D1D8_A026_41D2_B67731C56229_0_HS_1_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.56,
        "pitch": -4.26,
        "yaw": 1.89
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F, this.camera_D0795744_DE12_61B6_41D6_437939A8258E); this.mainPlayList.set('selectedIndex', 53)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 62.59,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88C3123_D1D8_A026_41D2_B67731C56229_0_HS_0_0_map.gif",
           "height": 16,
           "width": 18
          }
         ]
        },
        "pitch": -10.55,
        "yaw": 4.42
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C878ACBB_D2AB_6026_41D7_74A6A16E9931",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88C3123_D1D8_A026_41D2_B67731C56229_0_HS_0_0.png",
           "height": 926,
           "width": 1061
          }
         ]
        },
        "hfov": 62.59,
        "pitch": -10.55,
        "yaw": 4.42
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88C3123_D1D8_A026_41D2_B67731C56229_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88C3123_D1D8_A026_41D2_B67731C56229_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88C3123_D1D8_A026_41D2_B67731C56229_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88C3123_D1D8_A026_41D2_B67731C56229_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88C3123_D1D8_A026_41D2_B67731C56229_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88C3123_D1D8_A026_41D2_B67731C56229_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88C3123_D1D8_A026_41D2_B67731C56229_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88C3123_D1D8_A026_41D2_B67731C56229_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88C3123_D1D8_A026_41D2_B67731C56229_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88C3123_D1D8_A026_41D2_B67731C56229_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_D88C3123_D1D8_A026_41D2_B67731C56229_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88C3123_D1D8_A026_41D2_B67731C56229_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88C3123_D1D8_A026_41D2_B67731C56229_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_D88C3123_D1D8_A026_41D2_B67731C56229"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_D88C3123_D1D8_A026_41D2_B67731C56229_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "pitch": -9.24,
   "yaw": 166.14
  }
 },
 {
  "class": "Panorama",
  "label": "RH1_MBed",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 110,
  "thumbnailUrl": "media/panorama_D88CA4DC_D1D8_E062_418A_B5733B4B6156_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 7.45,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88CA4DC_D1D8_E062_418A_B5733B4B6156_0_HS_3_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -10.58,
        "yaw": -25.64
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_CBFB3C04_D2BF_E7E2_41E2_08C1A807B266",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88CA4DC_D1D8_E062_418A_B5733B4B6156_0_HS_3_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.45,
        "pitch": -10.58,
        "yaw": -25.64
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F, this.camera_D029396C_DE12_6076_41EA_5A818E67B720); this.mainPlayList.set('selectedIndex', 53)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 31.18,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88CA4DC_D1D8_E062_418A_B5733B4B6156_0_HS_2_0_map.gif",
           "height": 27,
           "width": 16
          }
         ]
        },
        "pitch": -5.49,
        "yaw": -23.12
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_CB951E44_D2B8_E062_41CA_DBA610705342",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88CA4DC_D1D8_E062_418A_B5733B4B6156_0_HS_2_0.png",
           "height": 909,
           "width": 522
          }
         ]
        },
        "hfov": 31.18,
        "pitch": -5.49,
        "yaw": -23.12
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 5.66,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88CA4DC_D1D8_E062_418A_B5733B4B6156_0_HS_1_0_0_map.gif",
           "height": 57,
           "width": 48
          }
         ]
        },
        "pitch": -12.98,
        "yaw": -46.99
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C8CCCF36_D2B8_A02E_4197_E639491781AF",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88CA4DC_D1D8_E062_418A_B5733B4B6156_0_HS_1_0.png",
           "height": 114,
           "width": 96
          }
         ]
        },
        "hfov": 5.66,
        "pitch": -12.98,
        "yaw": -46.99
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D88C9EC2_D1D8_E066_41E4_C37A1E91A097, this.camera_D02FE97A_DE12_6052_41DF_A0CD01BE560F); this.mainPlayList.set('selectedIndex', 56)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 25.07,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88CA4DC_D1D8_E062_418A_B5733B4B6156_0_HS_0_0_map.gif",
           "height": 43,
           "width": 16
          }
         ]
        },
        "pitch": -6.95,
        "yaw": -48.13
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_CB01C5D5_D2BB_A062_41D7_0FBFCA44750A",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88CA4DC_D1D8_E062_418A_B5733B4B6156_0_HS_0_0.png",
           "height": 1129,
           "width": 420
          }
         ]
        },
        "hfov": 25.07,
        "pitch": -6.95,
        "yaw": -48.13
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88CA4DC_D1D8_E062_418A_B5733B4B6156_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88CA4DC_D1D8_E062_418A_B5733B4B6156_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88CA4DC_D1D8_E062_418A_B5733B4B6156_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88CA4DC_D1D8_E062_418A_B5733B4B6156_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88CA4DC_D1D8_E062_418A_B5733B4B6156_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88CA4DC_D1D8_E062_418A_B5733B4B6156_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88CA4DC_D1D8_E062_418A_B5733B4B6156_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88CA4DC_D1D8_E062_418A_B5733B4B6156_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88CA4DC_D1D8_E062_418A_B5733B4B6156_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88CA4DC_D1D8_E062_418A_B5733B4B6156_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_D88CA4DC_D1D8_E062_418A_B5733B4B6156_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88CA4DC_D1D8_E062_418A_B5733B4B6156_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88CA4DC_D1D8_E062_418A_B5733B4B6156_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_D88CA4DC_D1D8_E062_418A_B5733B4B6156"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_D88CA4DC_D1D8_E062_418A_B5733B4B6156_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "pitch": -3.31,
   "yaw": 20.4
  }
 },
 {
  "class": "Panorama",
  "label": "RH1_Toilet",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_D88C9EC2_D1D8_E066_41E4_C37A1E91A097_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 7.56,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88C9EC2_D1D8_E066_41E4_C37A1E91A097_0_HS_1_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -4.52,
        "yaw": -113.05
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C8BBB8FD_D2A8_A022_41E5_75E25272D19B",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88C9EC2_D1D8_E066_41E4_C37A1E91A097_0_HS_1_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.56,
        "pitch": -4.52,
        "yaw": -113.05
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D88CA4DC_D1D8_E062_418A_B5733B4B6156, this.camera_D346C7DA_DE12_6052_41D6_F1D3FDB2791F); this.mainPlayList.set('selectedIndex', 55)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 80.06,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88C9EC2_D1D8_E066_41E4_C37A1E91A097_0_HS_0_0_map.gif",
           "height": 26,
           "width": 16
          }
         ]
        },
        "pitch": -1.33,
        "yaw": -114.44
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C830AA9E_D2A9_E01E_41E5_555982E23C44",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D88C9EC2_D1D8_E066_41E4_C37A1E91A097_0_HS_0_0.png",
           "height": 2048,
           "width": 1250
          }
         ]
        },
        "hfov": 80.06,
        "pitch": -1.33,
        "yaw": -114.44
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88C9EC2_D1D8_E066_41E4_C37A1E91A097_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88C9EC2_D1D8_E066_41E4_C37A1E91A097_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88C9EC2_D1D8_E066_41E4_C37A1E91A097_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88C9EC2_D1D8_E066_41E4_C37A1E91A097_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88C9EC2_D1D8_E066_41E4_C37A1E91A097_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88C9EC2_D1D8_E066_41E4_C37A1E91A097_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88C9EC2_D1D8_E066_41E4_C37A1E91A097_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88C9EC2_D1D8_E066_41E4_C37A1E91A097_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88C9EC2_D1D8_E066_41E4_C37A1E91A097_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88C9EC2_D1D8_E066_41E4_C37A1E91A097_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_D88C9EC2_D1D8_E066_41E4_C37A1E91A097_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88C9EC2_D1D8_E066_41E4_C37A1E91A097_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D88C9EC2_D1D8_E066_41E4_C37A1E91A097_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_D88C9EC2_D1D8_E066_41E4_C37A1E91A097"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_D88C9EC2_D1D8_E066_41E4_C37A1E91A097_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": -20.39,
   "yaw": -29.16
  }
 },
 {
  "class": "Panorama",
  "label": "RH1_Bed2",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 100,
  "thumbnailUrl": "media/panorama_D85E86B9_D1D8_A022_41D1_303FEE34B957_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 7.38,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D85E86B9_D1D8_A022_41D1_303FEE34B957_0_HS_3_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -13.11,
        "yaw": -166.61
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C8355135_D2AB_6022_41DD_A36E990F0F19",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D85E86B9_D1D8_A022_41D1_303FEE34B957_0_HS_3_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.38,
        "pitch": -13.11,
        "yaw": -166.61
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F, this.camera_D0699769_DE12_607E_41E9_914942F01E9E); this.mainPlayList.set('selectedIndex', 53)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 23.3,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D85E86B9_D1D8_A022_41D1_303FEE34B957_0_HS_2_0_map.gif",
           "height": 63,
           "width": 16
          }
         ]
        },
        "pitch": -7.39,
        "yaw": -166.74
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C951127A_D2A8_A026_41E1_7B832D58FCC8",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D85E86B9_D1D8_A022_41D1_303FEE34B957_0_HS_2_0.png",
           "height": 1545,
           "width": 391
          }
         ]
        },
        "hfov": 23.3,
        "pitch": -7.39,
        "yaw": -166.74
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 7.53,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D85E86B9_D1D8_A022_41D1_303FEE34B957_0_HS_1_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -6.54,
        "yaw": 66.57
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_CE7744F0_D2D7_A022_41E0_7BAE176D55D1",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D85E86B9_D1D8_A022_41D1_303FEE34B957_0_HS_1_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.53,
        "pitch": -6.54,
        "yaw": 66.57
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D8F32A15_D1B8_E4E8_41D5_6C777187D535, this.camera_D075D760_DE12_606E_41B6_D0AA6926471E); this.mainPlayList.set('selectedIndex', 58)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 62.95,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D85E86B9_D1D8_A022_41D1_303FEE34B957_0_HS_0_0_map.gif",
           "height": 16,
           "width": 18
          }
         ]
        },
        "pitch": -4.61,
        "yaw": 69.35
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_CCD3EC8D_D2DF_60E2_41DE_2F2C0C1BD7BC",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D85E86B9_D1D8_A022_41D1_303FEE34B957_0_HS_0_0.png",
           "height": 896,
           "width": 1052
          }
         ]
        },
        "hfov": 62.95,
        "pitch": -4.61,
        "yaw": 69.35
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D85E86B9_D1D8_A022_41D1_303FEE34B957_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D85E86B9_D1D8_A022_41D1_303FEE34B957_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D85E86B9_D1D8_A022_41D1_303FEE34B957_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D85E86B9_D1D8_A022_41D1_303FEE34B957_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D85E86B9_D1D8_A022_41D1_303FEE34B957_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D85E86B9_D1D8_A022_41D1_303FEE34B957_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D85E86B9_D1D8_A022_41D1_303FEE34B957_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D85E86B9_D1D8_A022_41D1_303FEE34B957_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D85E86B9_D1D8_A022_41D1_303FEE34B957_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D85E86B9_D1D8_A022_41D1_303FEE34B957_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_D85E86B9_D1D8_A022_41D1_303FEE34B957_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D85E86B9_D1D8_A022_41D1_303FEE34B957_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D85E86B9_D1D8_A022_41D1_303FEE34B957_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_D85E86B9_D1D8_A022_41D1_303FEE34B957"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_D85E86B9_D1D8_A022_41D1_303FEE34B957_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": -15.74,
   "yaw": 10.27
  }
 },
 {
  "class": "Panorama",
  "label": "ROW HOUSE 2ND TERRACE",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 110,
  "thumbnailUrl": "media/panorama_D8F32A15_D1B8_E4E8_41D5_6C777187D535_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 7.16,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D8F32A15_D1B8_E4E8_41D5_6C777187D535_0_HS_1_0_0_map.gif",
           "height": 63,
           "width": 63
          }
         ]
        },
        "pitch": -19.17,
        "yaw": -171.41
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_CDCC2077_D2EF_602E_41DA_933CBDB23664",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D8F32A15_D1B8_E4E8_41D5_6C777187D535_0_HS_1_0.png",
           "height": 127,
           "width": 126
          }
         ]
        },
        "hfov": 7.16,
        "pitch": -19.17,
        "yaw": -171.41
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D85E86B9_D1D8_A022_41D1_303FEE34B957, this.camera_D387486A_DE12_6072_41EA_96BB8F346E43); this.mainPlayList.set('selectedIndex', 57)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 33.76,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D8F32A15_D1B8_E4E8_41D5_6C777187D535_0_HS_0_0_map.gif",
           "height": 33,
           "width": 16
          }
         ]
        },
        "pitch": -15.98,
        "yaw": -162.19
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_F3324634_D2EB_6022_41E1_B4099B0F6961",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_D8F32A15_D1B8_E4E8_41D5_6C777187D535_0_HS_0_0.png",
           "height": 1241,
           "width": 585
          }
         ]
        },
        "hfov": 33.76,
        "pitch": -15.98,
        "yaw": -162.19
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8F32A15_D1B8_E4E8_41D5_6C777187D535_r_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8F32A15_D1B8_E4E8_41D5_6C777187D535_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8F32A15_D1B8_E4E8_41D5_6C777187D535_l_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8F32A15_D1B8_E4E8_41D5_6C777187D535_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8F32A15_D1B8_E4E8_41D5_6C777187D535_b_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8F32A15_D1B8_E4E8_41D5_6C777187D535_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8F32A15_D1B8_E4E8_41D5_6C777187D535_u_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8F32A15_D1B8_E4E8_41D5_6C777187D535_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8F32A15_D1B8_E4E8_41D5_6C777187D535_d_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8F32A15_D1B8_E4E8_41D5_6C777187D535_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_D8F32A15_D1B8_E4E8_41D5_6C777187D535_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8F32A15_D1B8_E4E8_41D5_6C777187D535_f_hq.jpeg",
       "height": 1904,
       "width": 1904
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_D8F32A15_D1B8_E4E8_41D5_6C777187D535_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_D8F32A15_D1B8_E4E8_41D5_6C777187D535"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_D8F32A15_D1B8_E4E8_41D5_6C777187D535_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "pitch": -0.04,
   "yaw": 126.52
  }
 },
 {
  "class": "Panorama",
  "label": "BIRD EYE VIEW CLUBHOUSE",
  "hfovMin": 90,
  "partial": false,
  "hfovMax": 110,
  "thumbnailUrl": "media/panorama_BAEBFE4F_A636_E772_41D2_BE9202296A07_t.jpg",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "class": "CubicPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 8.6,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_BAEBFE4F_A636_E772_41D2_BE9202296A07_0_HS_1_0_0_map.gif",
           "height": 45,
           "width": 49
          }
         ]
        },
        "pitch": -8.2,
        "yaw": 8.01
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_86B02E71_A656_A72E_41E1_FA0D3D1B8686",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_BAEBFE4F_A636_E772_41D2_BE9202296A07_0_HS_1_0.png",
           "height": 90,
           "width": 98
          }
         ]
        },
        "hfov": 8.6,
        "pitch": -8.2,
        "yaw": 8.01
       }
      ],
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 60)"
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 91,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_BAEBFE4F_A636_E772_41D2_BE9202296A07_0_HS_0_0_map.gif",
           "height": 16,
           "width": 29
          }
         ]
        },
        "pitch": -16.53,
        "yaw": 11.72
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_8440F6A9_A655_673E_41BE_9D90D4CB37BE",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "url": "media/panorama_BAEBFE4F_A636_E772_41D2_BE9202296A07_0_HS_0_0.png",
           "height": 586,
           "width": 1079
          }
         ]
        },
        "hfov": 91,
        "pitch": -16.53,
        "yaw": 11.72
       }
      ],
      "enabledInCardboard": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ]
     }
    ],
    "right": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BAEBFE4F_A636_E772_41D2_BE9202296A07_r_hq.jpeg",
       "height": 1296,
       "width": 1296
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BAEBFE4F_A636_E772_41D2_BE9202296A07_r.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "left": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BAEBFE4F_A636_E772_41D2_BE9202296A07_l_hq.jpeg",
       "height": 1296,
       "width": 1296
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BAEBFE4F_A636_E772_41D2_BE9202296A07_l.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "back": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BAEBFE4F_A636_E772_41D2_BE9202296A07_b_hq.jpeg",
       "height": 1296,
       "width": 1296
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BAEBFE4F_A636_E772_41D2_BE9202296A07_b.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "top": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BAEBFE4F_A636_E772_41D2_BE9202296A07_u_hq.jpeg",
       "height": 1296,
       "width": 1296
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BAEBFE4F_A636_E772_41D2_BE9202296A07_u.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "bottom": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BAEBFE4F_A636_E772_41D2_BE9202296A07_d_hq.jpeg",
       "height": 1296,
       "width": 1296
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BAEBFE4F_A636_E772_41D2_BE9202296A07_d.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    },
    "thumbnailUrl": "media/panorama_BAEBFE4F_A636_E772_41D2_BE9202296A07_t.jpg",
    "front": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BAEBFE4F_A636_E772_41D2_BE9202296A07_f_hq.jpeg",
       "height": 1296,
       "width": 1296
      },
      {
       "class": "ImageResourceLevel",
       "url": "media/panorama_BAEBFE4F_A636_E772_41D2_BE9202296A07_f.jpeg",
       "height": 1024,
       "width": 1024
      }
     ]
    }
   }
  ],
  "pitch": 0,
  "id": "panorama_BAEBFE4F_A636_E772_41D2_BE9202296A07"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_BAEBFE4F_A636_E772_41D2_BE9202296A07_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -16.11,
     "targetYaw": 105.47,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -46.42,
     "targetYaw": 5.18,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "pitch": -27.77,
   "yaw": 10.23
  }
 },
 {
  "playList": {
   "class": "PhotoPlayList",
   "items": [
    {
     "media": {
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_BA1253A0_AB96_FD66_41DE_7C4B719ED223.png"
        }
       ]
      },
      "label": "amenities-desktop",
      "thumbnailUrl": "media/photo_BA1253A0_AB96_FD66_41DE_7C4B719ED223_t.png",
      "width": 1920,
      "height": 1080,
      "id": "photo_BA1253A0_AB96_FD66_41DE_7C4B719ED223",
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.29",
       "zoomFactor": 1.1,
       "x": "0.52"
      },
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.50",
       "zoomFactor": 1,
       "x": "0.50"
      }
     }
    },
    {
     "media": {
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_BC1E1740_AB72_2526_41E3_6A166BF54846.png"
        }
       ]
      },
      "label": "RAINDANCE CLABHOUSE STILL 1",
      "thumbnailUrl": "media/photo_BC1E1740_AB72_2526_41E3_6A166BF54846_t.png",
      "width": 1920,
      "height": 1080,
      "id": "photo_BC1E1740_AB72_2526_41E3_6A166BF54846",
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.69",
       "zoomFactor": 1.1,
       "x": "0.65"
      },
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.50",
       "zoomFactor": 1,
       "x": "0.50"
      }
     }
    },
    {
     "media": {
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_BA127764_AB96_E5EE_41A3_239F38B9F3BC.png"
        }
       ]
      },
      "label": "CLUBHOUSE POOL-min",
      "thumbnailUrl": "media/photo_BA127764_AB96_E5EE_41A3_239F38B9F3BC_t.png",
      "width": 1920,
      "height": 1080,
      "id": "photo_BA127764_AB96_E5EE_41A3_239F38B9F3BC",
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.54",
       "zoomFactor": 1.1,
       "x": "0.67"
      },
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.50",
       "zoomFactor": 1,
       "x": "0.50"
      }
     }
    },
    {
     "media": {
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_A06060B1_AA92_DB66_4194_B990EE81C325.png"
        }
       ]
      },
      "label": "MiniTheatre",
      "thumbnailUrl": "media/photo_A06060B1_AA92_DB66_4194_B990EE81C325_t.png",
      "width": 1920,
      "height": 1080,
      "id": "photo_A06060B1_AA92_DB66_4194_B990EE81C325",
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.39",
       "zoomFactor": 1.1,
       "x": "0.38"
      },
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.50",
       "zoomFactor": 1,
       "x": "0.50"
      }
     }
    },
    {
     "media": {
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_A17E49DE_AA92_2CDA_41D8_D54670474A03.png"
        }
       ]
      },
      "label": "Banquet",
      "thumbnailUrl": "media/photo_A17E49DE_AA92_2CDA_41D8_D54670474A03_t.png",
      "width": 1920,
      "height": 1080,
      "id": "photo_A17E49DE_AA92_2CDA_41D8_D54670474A03",
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.55",
       "zoomFactor": 1.1,
       "x": "0.69"
      },
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.50",
       "zoomFactor": 1,
       "x": "0.50"
      }
     }
    },
    {
     "media": {
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_A067CE28_AA92_2766_41E3_F97B25E7E6DB.png"
        }
       ]
      },
      "label": "Gym",
      "thumbnailUrl": "media/photo_A067CE28_AA92_2766_41E3_F97B25E7E6DB_t.png",
      "width": 1920,
      "height": 1080,
      "id": "photo_A067CE28_AA92_2766_41E3_F97B25E7E6DB",
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.60",
       "zoomFactor": 1.1,
       "x": "0.54"
      },
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.50",
       "zoomFactor": 1,
       "x": "0.50"
      }
     }
    },
    {
     "media": {
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_A060734C_AA92_DD3E_41DF_E0827AB47FBC.png"
        }
       ]
      },
      "label": "RESTAURANT GREEN",
      "thumbnailUrl": "media/photo_A060734C_AA92_DD3E_41DF_E0827AB47FBC_t.png",
      "width": 1920,
      "height": 1080,
      "id": "photo_A060734C_AA92_DD3E_41DF_E0827AB47FBC",
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.43",
       "zoomFactor": 1.1,
       "x": "0.63"
      },
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.50",
       "zoomFactor": 1,
       "x": "0.50"
      }
     }
    },
    {
     "media": {
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_A0607766_AA92_E5EA_41B3_4B6EDC30BF9F.png"
        }
       ]
      },
      "label": "RESTAURANT ORANGE",
      "thumbnailUrl": "media/photo_A0607766_AA92_E5EA_41B3_4B6EDC30BF9F_t.png",
      "width": 1920,
      "height": 1080,
      "id": "photo_A0607766_AA92_E5EA_41B3_4B6EDC30BF9F",
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.48",
       "zoomFactor": 1.1,
       "x": "0.56"
      },
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.50",
       "zoomFactor": 1,
       "x": "0.50"
      }
     }
    },
    {
     "media": {
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_BA139FBA_AB96_E55A_41E3_5DC309EDF49D.png"
        }
       ]
      },
      "label": "AMENITIES basketball etc 1-min",
      "thumbnailUrl": "media/photo_BA139FBA_AB96_E55A_41E3_5DC309EDF49D_t.png",
      "width": 1920,
      "height": 1080,
      "id": "photo_BA139FBA_AB96_E55A_41E3_5DC309EDF49D",
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.53",
       "zoomFactor": 1.1,
       "x": "0.26"
      },
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.50",
       "zoomFactor": 1,
       "x": "0.50"
      }
     }
    },
    {
     "media": {
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_A0607B2E_AA92_ED7A_41DE_7DB1BB52D00F.png"
        }
       ]
      },
      "label": "Yoga",
      "thumbnailUrl": "media/photo_A0607B2E_AA92_ED7A_41DE_7DB1BB52D00F_t.png",
      "width": 1920,
      "height": 1080,
      "id": "photo_A0607B2E_AA92_ED7A_41DE_7DB1BB52D00F",
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.31",
       "zoomFactor": 1.1,
       "x": "0.56"
      },
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.50",
       "zoomFactor": 1,
       "x": "0.50"
      }
     }
    },
    {
     "media": {
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "url": "media/photo_B8EDB9F4_AB96_ECEE_41E1_D78B2E9DCDB8.png"
        }
       ]
      },
      "label": "AMENITIES AMPHITHEATRE 1-min",
      "thumbnailUrl": "media/photo_B8EDB9F4_AB96_ECEE_41E1_D78B2E9DCDB8_t.png",
      "width": 1920,
      "height": 1080,
      "id": "photo_B8EDB9F4_AB96_ECEE_41E1_D78B2E9DCDB8",
      "duration": 5000
     },
     "class": "PhotoPlayListItem",
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.46",
       "zoomFactor": 1.1,
       "x": "0.59"
      },
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "y": "0.50",
       "zoomFactor": 1,
       "x": "0.50"
      }
     }
    }
   ],
   "id": "album_ACE02BB6_A50D_E1B1_41D7_4CFB6D26A620_AlbumPlayList"
  },
  "class": "PhotoAlbum",
  "label": "Photo Album Banquet",
  "id": "album_ACE02BB6_A50D_E1B1_41D7_4CFB6D26A620",
  "thumbnailUrl": "media/album_ACE02BB6_A50D_E1B1_41D7_4CFB6D26A620_t.png"
 },
 {
  "class": "PhotoAlbumPlayer",
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPhotoAlbumPlayer",
  "buttonStop": "this.IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB"
 },
 "this.photo_BA1253A0_AB96_FD66_41DE_7C4B719ED223",
 "this.photo_BC1E1740_AB72_2526_41E3_6A166BF54846",
 "this.photo_BA127764_AB96_E5EE_41A3_239F38B9F3BC",
 "this.photo_A06060B1_AA92_DB66_4194_B990EE81C325",
 "this.photo_A17E49DE_AA92_2CDA_41D8_D54670474A03",
 "this.photo_A067CE28_AA92_2766_41E3_F97B25E7E6DB",
 "this.photo_A060734C_AA92_DD3E_41DF_E0827AB47FBC",
 "this.photo_A0607766_AA92_E5EA_41B3_4B6EDC30BF9F",
 "this.photo_BA139FBA_AB96_E55A_41E3_5DC309EDF49D",
 "this.photo_A0607B2E_AA92_ED7A_41DE_7DB1BB52D00F",
 "this.photo_B8EDB9F4_AB96_ECEE_41E1_D78B2E9DCDB8",
 {
  "class": "PlayList",
  "items": [
   {
    "media": "this.panorama_B5B10CC0_AA92_2B25_4194_A02E4DA525DE",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B5B10CC0_AA92_2B25_4194_A02E4DA525DE_camera"
   },
   {
    "media": "this.panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.Image_9DBFF4C8_9223_DCFB_41B4_FC435007C476, false, 0, this.effect_BAD67FCE_9243_78F1_41DB_86AC561E5DF5, 'hideEffect', false); this.setComponentVisibility(this.Image_9DBFF4C8_9223_DCFB_41B4_FC435007C476, false, 0, this.effect_BAD67FCE_9243_78F1_41DB_86AC561E5DF5, 'hideEffect', false)",
    "camera": "this.panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2); this.setComponentVisibility(this.Image_9DBFF4C8_9223_DCFB_41B4_FC435007C476, true, 0, this.effect_BAD64FCE_9243_78F0_41DD_FFAEB204D688, 'showEffect', false)"
   },
   {
    "media": "this.panorama_8B05ECCC_AA92_2B3E_41E3_20EE07DC2942",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_8B05ECCC_AA92_2B3E_41E3_20EE07DC2942_camera"
   },
   {
    "media": "this.panorama_6FA625B7_6461_9D17_41D0_6D6DDB5A74A4",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6FA625B7_6461_9D17_41D0_6D6DDB5A74A4_camera"
   },
   {
    "media": "this.panorama_6EB2135E_6460_7519_41B1_8EC107ECF1E8",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.Image_82D03E84_923C_DB71_41D5_F59C5FE2AAED, false, 0, this.effect_BAD70FD0_9243_7891_41B7_24A43EF169A6, 'hideEffect', false); this.setComponentVisibility(this.Image_82D03E84_923C_DB71_41D5_F59C5FE2AAED, false, 0, this.effect_BAD70FD0_9243_7891_41B7_24A43EF169A6, 'hideEffect', false)",
    "camera": "this.panorama_6EB2135E_6460_7519_41B1_8EC107ECF1E8_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5); this.setComponentVisibility(this.Image_82D03E84_923C_DB71_41D5_F59C5FE2AAED, true, 0, this.effect_BAD71FD0_9243_7890_41C2_C6C735C5F9CA, 'showEffect', false)"
   },
   {
    "media": "this.panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_camera"
   },
   {
    "media": "this.panorama_6E41768D_6460_7FFB_41B8_BECD361802CC",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6E41768D_6460_7FFB_41B8_BECD361802CC_camera"
   },
   {
    "media": "this.panorama_6E4180B4_6460_9329_41D5_D2E67711ED96",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6E4180B4_6460_9329_41D5_D2E67711ED96_camera"
   },
   {
    "media": "this.panorama_6E419ACC_6460_9779_41C9_4EFA8552AE7C",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6E419ACC_6460_9779_41C9_4EFA8552AE7C_camera"
   },
   {
    "media": "this.panorama_A0D78D46_AAF2_252A_41E1_DA2823B073ED",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A0D78D46_AAF2_252A_41E1_DA2823B073ED_camera"
   },
   {
    "media": "this.panorama_A134FC60_AAF2_EBE6_41BE_1FDE12BD11F2",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A134FC60_AAF2_EBE6_41BE_1FDE12BD11F2_camera"
   },
   {
    "media": "this.panorama_A1328670_AAF2_67E5_41D9_FB677AF8ABD5",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A1328670_AAF2_67E5_41D9_FB677AF8ABD5_camera"
   },
   {
    "media": "this.panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5_camera"
   },
   {
    "media": "this.panorama_B9E01B04_A6EE_AEF6_41DB_0E71973BB561",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B9E01B04_A6EE_AEF6_41DB_0E71973BB561_camera"
   },
   {
    "media": "this.panorama_6E41BEEB_6460_AF3F_41D2_6E0C55A15528",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6E41BEEB_6460_AF3F_41D2_6E0C55A15528_camera"
   },
   {
    "media": "this.panorama_B98F35EC_A6EB_6537_41D2_B2F2A580AB82",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B98F35EC_A6EB_6537_41D2_B2F2A580AB82_camera"
   },
   {
    "media": "this.panorama_BAF873B6_A636_FD12_41C9_52C22CB7ED8F",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BAF873B6_A636_FD12_41C9_52C22CB7ED8F_camera"
   },
   {
    "media": "this.panorama_A18BF642_AAF2_672A_41E2_A9D27DF205BA",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A18BF642_AAF2_672A_41E2_A9D27DF205BA_camera"
   },
   {
    "media": "this.panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C_camera"
   },
   {
    "media": "this.panorama_6E41935B_6460_F51F_41D4_E597F889D564",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6E41935B_6460_F51F_41D4_E597F889D564_camera"
   },
   {
    "media": "this.panorama_6E41BDB5_6460_ED2B_41C1_6F922FDFCAF0",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6E41BDB5_6460_ED2B_41C1_6F922FDFCAF0_camera"
   },
   {
    "media": "this.panorama_6E41D7EE_6460_9D39_41B0_19E5CB13BB50",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6E41D7EE_6460_9D39_41B0_19E5CB13BB50_camera"
   },
   {
    "media": "this.panorama_A18120CB_AAF2_3B3A_41E0_A9B0761CFB34",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A18120CB_AAF2_3B3A_41E0_A9B0761CFB34_camera"
   },
   {
    "media": "this.panorama_6E41CC2D_6460_B33B_41B9_C966262CAA0F",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6E41CC2D_6460_B33B_41B9_C966262CAA0F_camera"
   },
   {
    "media": "this.panorama_6E41D226_6460_B729_41C5_12830EDF59FE",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6E41D226_6460_B729_41C5_12830EDF59FE_camera"
   },
   {
    "media": "this.panorama_A1FE7933_AAF2_2D6A_41DC_A6106B748B39",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A1FE7933_AAF2_2D6A_41DC_A6106B748B39_camera"
   },
   {
    "media": "this.panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763_camera"
   },
   {
    "media": "this.panorama_6E41C009_6460_72FB_41CB_F3A1D5D86867",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6E41C009_6460_72FB_41CB_F3A1D5D86867_camera"
   },
   {
    "media": "this.panorama_6E41DA52_6460_7769_41D4_BA5E308A7FCF",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6E41DA52_6460_7769_41D4_BA5E308A7FCF_camera"
   },
   {
    "media": "this.panorama_6E41F612_6460_9EE9_41BA_632B2281DFE7",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6E41F612_6460_9EE9_41BA_632B2281DFE7_camera"
   },
   {
    "media": "this.panorama_A1F859A1_AAF2_2D67_41E2_7A828B16DDEE",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A1F859A1_AAF2_2D67_41E2_7A828B16DDEE_camera"
   },
   {
    "media": "this.panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.Image_834E90F5_92C5_4890_41B3_1F18BA633A48, false, 0, this.effect_BAD76FD2_9243_7890_4199_E659A20D66AB, 'hideEffect', false); this.setComponentVisibility(this.Image_834E90F5_92C5_4890_41B3_1F18BA633A48, false, 0, this.effect_BAD76FD2_9243_7890_4199_E659A20D66AB, 'hideEffect', false)",
    "camera": "this.panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32); this.setComponentVisibility(this.Image_834E90F5_92C5_4890_41B3_1F18BA633A48, true, 0, this.effect_BAD77FD2_9243_7890_41E1_324C9A318973, 'showEffect', false)"
   },
   {
    "media": "this.panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_camera"
   },
   {
    "media": "this.panorama_59C3021B_535A_AAD7_41CE_A61BCE03CD40",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_59C3021B_535A_AAD7_41CE_A61BCE03CD40_camera"
   },
   {
    "media": "this.panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.Image_839F2153_92C3_4990_41DE_8BB8E5D909EE, false, 0, this.effect_BAD01FD4_9243_7890_41CC_A2FAFA5CDDA0, 'hideEffect', false); this.setComponentVisibility(this.Image_839F2153_92C3_4990_41DE_8BB8E5D909EE, false, 0, this.effect_BAD01FD4_9243_7890_41CC_A2FAFA5CDDA0, 'hideEffect', false)",
    "camera": "this.panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35); this.setComponentVisibility(this.Image_839F2153_92C3_4990_41DE_8BB8E5D909EE, true, 0, this.effect_BAD0EFD4_9243_7890_41E0_794CA45DA064, 'showEffect', false)"
   },
   {
    "media": "this.panorama_37C82571_3D8C_C9A5_41CC_C24F6C0B2854",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_37C82571_3D8C_C9A5_41CC_C24F6C0B2854_camera"
   },
   {
    "media": "this.panorama_37EAB33E_3D8D_C99F_417A_FF3FC97EEAA4",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_37EAB33E_3D8D_C99F_417A_FF3FC97EEAA4_camera"
   },
   {
    "media": "this.panorama_D8417219_D1DF_63E2_41D6_C0A2D1F29357",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D8417219_D1DF_63E2_41D6_C0A2D1F29357_camera"
   },
   {
    "media": "this.panorama_D84831E4_D1B8_E728_41DA_F6A150C811BE",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D84831E4_D1B8_E728_41DA_F6A150C811BE_camera"
   },
   {
    "media": "this.panorama_37A81EB9_3D8D_58A5_41AA_C4ACED0FBF57",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_37A81EB9_3D8D_58A5_41AA_C4ACED0FBF57_camera"
   },
   {
    "media": "this.panorama_37A859F3_3D8D_38A4_418C_5303DC82A478",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_camera"
   },
   {
    "media": "this.panorama_37A8244E_3D8D_4FFC_41B4_58B5B47F7D1E",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_37A8244E_3D8D_4FFC_41B4_58B5B47F7D1E_camera"
   },
   {
    "media": "this.panorama_37A82945_3D8D_79EC_41C5_0E9F64DED0AD",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_37A82945_3D8D_79EC_41C5_0E9F64DED0AD_camera"
   },
   {
    "media": "this.panorama_3767C48A_3D8C_CF67_41C3_F2694027A356",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_3767C48A_3D8C_CF67_41C3_F2694027A356_camera"
   },
   {
    "media": "this.panorama_37A91F68_3D8C_D9A3_41CA_B317408EB7FB",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_37A91F68_3D8C_D9A3_41CA_B317408EB7FB_camera"
   },
   {
    "media": "this.panorama_D85D1BBD_D1DF_E022_41BA_13361ABD752C",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D85D1BBD_D1DF_E022_41BA_13361ABD752C_camera"
   },
   {
    "media": "this.panorama_BB13D09B_A63A_DB12_41E2_F4BD3A49BA2A",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BB13D09B_A63A_DB12_41E2_F4BD3A49BA2A_camera"
   },
   {
    "media": "this.panorama_592967CF_5367_694E_41C0_DA66BBB02849",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 48)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_592967CF_5367_694E_41C0_DA66BBB02849_camera"
   },
   {
    "media": "this.panorama_59DDFCCD_5367_7FB3_41D2_CB17D6CFC750",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 48, 49)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_59DDFCCD_5367_7FB3_41D2_CB17D6CFC750_camera"
   },
   {
    "media": "this.panorama_59C51C81_5365_9FB2_41C4_9AA9FFF61575",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 49, 50)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_59C51C81_5365_9FB2_41C4_9AA9FFF61575_camera"
   },
   {
    "media": "this.panorama_59F93A57_5365_BB5F_41D1_0AA165E49833",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 50, 51)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_59F93A57_5365_BB5F_41D1_0AA165E49833_camera"
   },
   {
    "media": "this.panorama_59FAA04E_5366_A6B1_417E_A7CBC9158A99",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 51, 52)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_59FAA04E_5366_A6B1_417E_A7CBC9158A99_camera"
   },
   {
    "media": "this.panorama_D8F301A6_D1B8_A728_41AA_28BAC81AC047",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 52, 53)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D8F301A6_D1B8_A728_41AA_28BAC81AC047_camera"
   },
   {
    "media": "this.panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 53, 54)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_camera"
   },
   {
    "media": "this.panorama_D88C3123_D1D8_A026_41D2_B67731C56229",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 54, 55)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D88C3123_D1D8_A026_41D2_B67731C56229_camera"
   },
   {
    "media": "this.panorama_D88CA4DC_D1D8_E062_418A_B5733B4B6156",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 55, 56)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D88CA4DC_D1D8_E062_418A_B5733B4B6156_camera"
   },
   {
    "media": "this.panorama_D88C9EC2_D1D8_E066_41E4_C37A1E91A097",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 56, 57)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D88C9EC2_D1D8_E066_41E4_C37A1E91A097_camera"
   },
   {
    "media": "this.panorama_D85E86B9_D1D8_A022_41D1_303FEE34B957",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 57, 58)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D85E86B9_D1D8_A022_41D1_303FEE34B957_camera"
   },
   {
    "media": "this.panorama_D8F32A15_D1B8_E4E8_41D5_6C777187D535",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 58, 59)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D8F32A15_D1B8_E4E8_41D5_6C777187D535_camera"
   },
   {
    "media": "this.panorama_BAEBFE4F_A636_E772_41D2_BE9202296A07",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 59, 60)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BAEBFE4F_A636_E772_41D2_BE9202296A07_camera"
   },
   {
    "media": "this.album_ACE02BB6_A50D_E1B1_41D7_4CFB6D26A620",
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 60, 0)"
   }
  ],
  "id": "mainPlayList"
 },
 {
  "class": "PlayList",
  "items": [
   {
    "media": "this.panorama_B5B10CC0_AA92_2B25_4194_A02E4DA525DE",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B5B10CC0_AA92_2B25_4194_A02E4DA525DE_camera"
   },
   {
    "media": "this.panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.Image_9DBFF4C8_9223_DCFB_41B4_FC435007C476, false, 0, this.effect_BAD67FCE_9243_78F1_41DB_86AC561E5DF5, 'hideEffect', false); this.setComponentVisibility(this.Image_9DBFF4C8_9223_DCFB_41B4_FC435007C476, false, 0, this.effect_BAD67FCE_9243_78F1_41DB_86AC561E5DF5, 'hideEffect', false)",
    "camera": "this.panorama_8B01A7A6_AA9E_256A_41D2_D8D157FCE259_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2); this.setComponentVisibility(this.Image_9DBFF4C8_9223_DCFB_41B4_FC435007C476, true, 0, this.effect_BAD64FCE_9243_78F0_41DD_FFAEB204D688, 'showEffect', false)"
   },
   {
    "media": "this.panorama_8B05ECCC_AA92_2B3E_41E3_20EE07DC2942",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_8B05ECCC_AA92_2B3E_41E3_20EE07DC2942_camera"
   },
   {
    "media": "this.panorama_6FA625B7_6461_9D17_41D0_6D6DDB5A74A4",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6FA625B7_6461_9D17_41D0_6D6DDB5A74A4_camera"
   },
   {
    "media": "this.panorama_6EB2135E_6460_7519_41B1_8EC107ECF1E8",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.Image_82D03E84_923C_DB71_41D5_F59C5FE2AAED, false, 0, this.effect_BAD70FD0_9243_7891_41B7_24A43EF169A6, 'hideEffect', false); this.setComponentVisibility(this.Image_82D03E84_923C_DB71_41D5_F59C5FE2AAED, false, 0, this.effect_BAD70FD0_9243_7891_41B7_24A43EF169A6, 'hideEffect', false)",
    "camera": "this.panorama_6EB2135E_6460_7519_41B1_8EC107ECF1E8_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5); this.setComponentVisibility(this.Image_82D03E84_923C_DB71_41D5_F59C5FE2AAED, true, 0, this.effect_BAD71FD0_9243_7890_41C2_C6C735C5F9CA, 'showEffect', false)"
   },
   {
    "media": "this.panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 6)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A48D4388_AB72_7D25_41C9_88E184D57DE5_camera"
   },
   {
    "media": "this.panorama_6E41768D_6460_7FFB_41B8_BECD361802CC",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 6, 7)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6E41768D_6460_7FFB_41B8_BECD361802CC_camera"
   },
   {
    "media": "this.panorama_6E4180B4_6460_9329_41D5_D2E67711ED96",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 7, 8)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6E4180B4_6460_9329_41D5_D2E67711ED96_camera"
   },
   {
    "media": "this.panorama_6E419ACC_6460_9779_41C9_4EFA8552AE7C",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 8, 9)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6E419ACC_6460_9779_41C9_4EFA8552AE7C_camera"
   },
   {
    "media": "this.panorama_A0D78D46_AAF2_252A_41E1_DA2823B073ED",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 9, 10)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A0D78D46_AAF2_252A_41E1_DA2823B073ED_camera"
   },
   {
    "media": "this.panorama_A134FC60_AAF2_EBE6_41BE_1FDE12BD11F2",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 10, 11)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A134FC60_AAF2_EBE6_41BE_1FDE12BD11F2_camera"
   },
   {
    "media": "this.panorama_A1328670_AAF2_67E5_41D9_FB677AF8ABD5",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 11, 12)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A1328670_AAF2_67E5_41D9_FB677AF8ABD5_camera"
   },
   {
    "media": "this.panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 12, 13)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A4F4784F_AB72_6B3B_41CC_2ADA627094E5_camera"
   },
   {
    "media": "this.panorama_B9E01B04_A6EE_AEF6_41DB_0E71973BB561",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 13, 14)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B9E01B04_A6EE_AEF6_41DB_0E71973BB561_camera"
   },
   {
    "media": "this.panorama_6E41BEEB_6460_AF3F_41D2_6E0C55A15528",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 14, 15)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6E41BEEB_6460_AF3F_41D2_6E0C55A15528_camera"
   },
   {
    "media": "this.panorama_B98F35EC_A6EB_6537_41D2_B2F2A580AB82",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 15, 16)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_B98F35EC_A6EB_6537_41D2_B2F2A580AB82_camera"
   },
   {
    "media": "this.panorama_BAF873B6_A636_FD12_41C9_52C22CB7ED8F",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 16, 17)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BAF873B6_A636_FD12_41C9_52C22CB7ED8F_camera"
   },
   {
    "media": "this.panorama_A18BF642_AAF2_672A_41E2_A9D27DF205BA",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 17, 18)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A18BF642_AAF2_672A_41E2_A9D27DF205BA_camera"
   },
   {
    "media": "this.panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 18, 19)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A1EB0DA2_AAF2_256A_41CD_65E8B1CA8E9C_camera"
   },
   {
    "media": "this.panorama_6E41935B_6460_F51F_41D4_E597F889D564",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 19, 20)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6E41935B_6460_F51F_41D4_E597F889D564_camera"
   },
   {
    "media": "this.panorama_6E41BDB5_6460_ED2B_41C1_6F922FDFCAF0",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 20, 21)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6E41BDB5_6460_ED2B_41C1_6F922FDFCAF0_camera"
   },
   {
    "media": "this.panorama_6E41D7EE_6460_9D39_41B0_19E5CB13BB50",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 21, 22)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6E41D7EE_6460_9D39_41B0_19E5CB13BB50_camera"
   },
   {
    "media": "this.panorama_A18120CB_AAF2_3B3A_41E0_A9B0761CFB34",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 22, 23)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A18120CB_AAF2_3B3A_41E0_A9B0761CFB34_camera"
   },
   {
    "media": "this.panorama_6E41CC2D_6460_B33B_41B9_C966262CAA0F",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 23, 24)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6E41CC2D_6460_B33B_41B9_C966262CAA0F_camera"
   },
   {
    "media": "this.panorama_6E41D226_6460_B729_41C5_12830EDF59FE",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 24, 25)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6E41D226_6460_B729_41C5_12830EDF59FE_camera"
   },
   {
    "media": "this.panorama_A1FE7933_AAF2_2D6A_41DC_A6106B748B39",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 25, 26)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A1FE7933_AAF2_2D6A_41DC_A6106B748B39_camera"
   },
   {
    "media": "this.panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 26, 27)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A1F62EF1_AAF3_E4E6_41B4_690A804AA763_camera"
   },
   {
    "media": "this.panorama_6E41C009_6460_72FB_41CB_F3A1D5D86867",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 27, 28)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6E41C009_6460_72FB_41CB_F3A1D5D86867_camera"
   },
   {
    "media": "this.panorama_6E41DA52_6460_7769_41D4_BA5E308A7FCF",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 28, 29)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6E41DA52_6460_7769_41D4_BA5E308A7FCF_camera"
   },
   {
    "media": "this.panorama_6E41F612_6460_9EE9_41BA_632B2281DFE7",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 29, 30)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_6E41F612_6460_9EE9_41BA_632B2281DFE7_camera"
   },
   {
    "media": "this.panorama_A1F859A1_AAF2_2D67_41E2_7A828B16DDEE",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 30, 31)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_A1F859A1_AAF2_2D67_41E2_7A828B16DDEE_camera"
   },
   {
    "media": "this.panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.Image_834E90F5_92C5_4890_41B3_1F18BA633A48, false, 0, this.effect_BAD76FD2_9243_7890_4199_E659A20D66AB, 'hideEffect', false); this.setComponentVisibility(this.Image_834E90F5_92C5_4890_41B3_1F18BA633A48, false, 0, this.effect_BAD76FD2_9243_7890_4199_E659A20D66AB, 'hideEffect', false)",
    "camera": "this.panorama_59C2659A_535A_A9D1_41CA_B7B6697A4A7A_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 31, 32); this.setComponentVisibility(this.Image_834E90F5_92C5_4890_41B3_1F18BA633A48, true, 0, this.effect_BAD77FD2_9243_7890_41E1_324C9A318973, 'showEffect', false)"
   },
   {
    "media": "this.panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 32, 33)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_59E31907_535B_A6BF_41D1_8418E05BBBDB_camera"
   },
   {
    "media": "this.panorama_59C3021B_535A_AAD7_41CE_A61BCE03CD40",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 33, 34)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_59C3021B_535A_AAD7_41CE_A61BCE03CD40_camera"
   },
   {
    "media": "this.panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.setComponentVisibility(this.Image_839F2153_92C3_4990_41DE_8BB8E5D909EE, false, 0, this.effect_BAD01FD4_9243_7890_41CC_A2FAFA5CDDA0, 'hideEffect', false); this.setComponentVisibility(this.Image_839F2153_92C3_4990_41DE_8BB8E5D909EE, false, 0, this.effect_BAD01FD4_9243_7890_41CC_A2FAFA5CDDA0, 'hideEffect', false)",
    "camera": "this.panorama_36D3CC59_3D73_5FE5_41BB_58D6C0556FF5_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 34, 35); this.setComponentVisibility(this.Image_839F2153_92C3_4990_41DE_8BB8E5D909EE, true, 0, this.effect_BAD0EFD4_9243_7890_41E0_794CA45DA064, 'showEffect', false)"
   },
   {
    "media": "this.panorama_37C82571_3D8C_C9A5_41CC_C24F6C0B2854",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 35, 36)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_37C82571_3D8C_C9A5_41CC_C24F6C0B2854_camera"
   },
   {
    "media": "this.panorama_37EAB33E_3D8D_C99F_417A_FF3FC97EEAA4",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 36, 37)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_37EAB33E_3D8D_C99F_417A_FF3FC97EEAA4_camera"
   },
   {
    "media": "this.panorama_D8417219_D1DF_63E2_41D6_C0A2D1F29357",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 37, 38)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D8417219_D1DF_63E2_41D6_C0A2D1F29357_camera"
   },
   {
    "media": "this.panorama_D84831E4_D1B8_E728_41DA_F6A150C811BE",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 38, 39)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D84831E4_D1B8_E728_41DA_F6A150C811BE_camera"
   },
   {
    "media": "this.panorama_37A81EB9_3D8D_58A5_41AA_C4ACED0FBF57",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 39, 40)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_37A81EB9_3D8D_58A5_41AA_C4ACED0FBF57_camera"
   },
   {
    "media": "this.panorama_37A859F3_3D8D_38A4_418C_5303DC82A478",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 40, 41)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_37A859F3_3D8D_38A4_418C_5303DC82A478_camera"
   },
   {
    "media": "this.panorama_37A8244E_3D8D_4FFC_41B4_58B5B47F7D1E",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 41, 42)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_37A8244E_3D8D_4FFC_41B4_58B5B47F7D1E_camera"
   },
   {
    "media": "this.panorama_37A82945_3D8D_79EC_41C5_0E9F64DED0AD",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 42, 43)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_37A82945_3D8D_79EC_41C5_0E9F64DED0AD_camera"
   },
   {
    "media": "this.panorama_3767C48A_3D8C_CF67_41C3_F2694027A356",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 43, 44)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_3767C48A_3D8C_CF67_41C3_F2694027A356_camera"
   },
   {
    "media": "this.panorama_37A91F68_3D8C_D9A3_41CA_B317408EB7FB",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 44, 45)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_37A91F68_3D8C_D9A3_41CA_B317408EB7FB_camera"
   },
   {
    "media": "this.panorama_D85D1BBD_D1DF_E022_41BA_13361ABD752C",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 45, 46)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D85D1BBD_D1DF_E022_41BA_13361ABD752C_camera"
   },
   {
    "media": "this.panorama_BB13D09B_A63A_DB12_41E2_F4BD3A49BA2A",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 46, 47)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BB13D09B_A63A_DB12_41E2_F4BD3A49BA2A_camera"
   },
   {
    "media": "this.panorama_592967CF_5367_694E_41C0_DA66BBB02849",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 47, 48)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_592967CF_5367_694E_41C0_DA66BBB02849_camera"
   },
   {
    "media": "this.panorama_59DDFCCD_5367_7FB3_41D2_CB17D6CFC750",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 48, 49)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_59DDFCCD_5367_7FB3_41D2_CB17D6CFC750_camera"
   },
   {
    "media": "this.panorama_59C51C81_5365_9FB2_41C4_9AA9FFF61575",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 49, 50)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_59C51C81_5365_9FB2_41C4_9AA9FFF61575_camera"
   },
   {
    "media": "this.panorama_59F93A57_5365_BB5F_41D1_0AA165E49833",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 50, 51)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_59F93A57_5365_BB5F_41D1_0AA165E49833_camera"
   },
   {
    "media": "this.panorama_59FAA04E_5366_A6B1_417E_A7CBC9158A99",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 51, 52)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_59FAA04E_5366_A6B1_417E_A7CBC9158A99_camera"
   },
   {
    "media": "this.panorama_D8F301A6_D1B8_A728_41AA_28BAC81AC047",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 52, 53)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D8F301A6_D1B8_A728_41AA_28BAC81AC047_camera"
   },
   {
    "media": "this.panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 53, 54)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D88CEAE7_D1D8_A02E_41E1_FD9A9E2D851F_camera"
   },
   {
    "media": "this.panorama_D88C3123_D1D8_A026_41D2_B67731C56229",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 54, 55)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D88C3123_D1D8_A026_41D2_B67731C56229_camera"
   },
   {
    "media": "this.panorama_D88CA4DC_D1D8_E062_418A_B5733B4B6156",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 55, 56)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D88CA4DC_D1D8_E062_418A_B5733B4B6156_camera"
   },
   {
    "media": "this.panorama_D88C9EC2_D1D8_E066_41E4_C37A1E91A097",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 56, 57)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D88C9EC2_D1D8_E066_41E4_C37A1E91A097_camera"
   },
   {
    "media": "this.panorama_D85E86B9_D1D8_A022_41D1_303FEE34B957",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 57, 58)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D85E86B9_D1D8_A022_41D1_303FEE34B957_camera"
   },
   {
    "media": "this.panorama_D8F32A15_D1B8_E4E8_41D5_6C777187D535",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 58, 59)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D8F32A15_D1B8_E4E8_41D5_6C777187D535_camera"
   },
   {
    "media": "this.panorama_BAEBFE4F_A636_E772_41D2_BE9202296A07",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 59, 60)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_BAEBFE4F_A636_E772_41D2_BE9202296A07_camera"
   },
   {
    "media": "this.album_ACE02BB6_A50D_E1B1_41D7_4CFB6D26A620",
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 60, 0)"
   }
  ],
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist"
 },
 {
  "class": "ImageResource",
  "id": "ImageResource_B2E0F257_A6D7_FF12_41D7_748FA074DC50",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/zoomImage_8E47938C_96CD_F0DD_41E1_7A3E325FC5AB_0_0.png",
    "height": 624,
    "width": 959
   },
   {
    "class": "ImageResourceLevel",
    "url": "media/zoomImage_8E47938C_96CD_F0DD_41E1_7A3E325FC5AB_0_1.png",
    "height": 333,
    "width": 512
   }
  ]
 },
 {
  "easing": "cubic_in",
  "class": "FadeInEffect",
  "id": "FadeInEffect_8ED05F70_96C4_F045_41DC_2AB82A556F92",
  "duration": 500
 },
 {
  "easing": "cubic_out",
  "class": "FadeOutEffect",
  "id": "FadeOutEffect_8ED06F70_96C4_F045_41DA_C74400CF7B15",
  "duration": 500
 },
 {
  "easing": "quad_in",
  "class": "FadeInEffect",
  "id": "effect_85A2AAA4_9245_B8B0_41CE_5BE27798090E",
  "duration": 300
 },
 {
  "easing": "quad_out",
  "class": "FadeOutEffect",
  "id": "effect_85A28AA4_9245_B8B0_41A1_5761D51DA5D1",
  "duration": 300
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_CACBF85D_EED0_7261_41DB_A3B65ECE0D5D",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeOutEffect",
  "id": "effect_CACBC85D_EED0_7261_41BE_8CF4C3A8170C",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_CDD059FA_EED0_D223_41DB_70ACFBE986FE",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeOutEffect",
  "id": "effect_CDD049FB_EED0_D221_41EB_CA2134B978E0",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeInEffect",
  "id": "effect_CD2B8C48_EED0_726F_41E4_49557D18059C",
  "duration": 200
 },
 {
  "easing": "linear",
  "class": "FadeOutEffect",
  "id": "effect_CD2BEC48_EED0_726F_41DF_F342BE2B4EF0",
  "duration": 200
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D0795744_DE12_61B6_41D6_437939A8258E",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -99.54
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D07A974E_DE12_61B2_41EB_5762E755355E",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -152.34
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D0716757_DE12_6052_41D3_70F1736BE485",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 32.84
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D075D760_DE12_606E_41B6_D0AA6926471E",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 8.59
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D0699769_DE12_607E_41E9_914942F01E9E",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -50.27
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D06CC772_DE12_6052_41CB_B0E482D1EA4D",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -51.29
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D063277B_DE12_6052_41E2_2CBAE6B2C551",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 9.35
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D067D784_DE12_60B6_41EA_C149311FF536",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323000,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 161.67
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D09A278D_DE12_60B6_41C2_70E4933C3A2A",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -152.85
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D34A07B6_DE12_60D2_41E3_A1D27E3B6D2C",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 216,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -11.3,
     "targetYaw": 110.73,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 108
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -28.74,
     "targetYaw": 93.6,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 6.88,
     "targetYaw": -132.25,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -169.26
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D34027C8_DE12_60BE_41C6_54086DF90F09",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 78.69
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D34517D1_DE12_60AE_41D1_D7785B40F19A",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323000,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 134.65
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D346C7DA_DE12_6052_41D6_F1D3FDB2791F",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 133.01
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D37BF7E3_DE12_6072_41D2_F9B98D0C94E9",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 34.86
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D37F07EC_DE12_6076_41DC_BA8B152EAF78",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -32.59
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D370C7F5_DE12_6056_41D1_50B77BFF34EF",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -82.47
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D37537FE_DE12_6052_41D3_C8C5EEDFC883",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 77.18
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D3690807_DE12_6FB2_41DD_DCB18B2FFEE4",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -120.78
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D36AE810_DE12_6FAE_41E8_E1EDABDA5650",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 47.24
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D36EA819_DE12_6FDE_4157_056270EFFFD4",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -19.58
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D362C822_DE12_6FF2_41E3_A28E7D581D45",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323000,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 22.6
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D366A82A_DE12_6FF3_41E8_C4E705962CB2",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -32.34
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D39D5833_DE12_6FD1_41DB_2ACDA28AD22F",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 29.56
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D391183C_DE12_6FD7_41D9_9BE4E8455C26",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -154.24
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D395F845_DE12_6FB1_417B_4598AF448EA2",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 12.63
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D389A84E_DE12_6FB3_41BF_DEE36AF766BC",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 101.98
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D38CC857_DE12_6052_41E8_E2D459FA2C13",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 58.67
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D3808861_DE12_606E_41EB_58A27FD98996",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323000,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 64.17
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D387486A_DE12_6072_41EA_96BB8F346E43",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -113.43
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D3BBD873_DE12_6052_41EA_8D8B997AD221",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 177.44
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D3BFF87C_DE12_6056_41DD_09879D713290",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 25.71,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -18.34,
     "targetYaw": 163.57,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 13.3
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -8.78,
     "targetYaw": -56.46,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -17.62,
     "targetYaw": -147.92,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "hfov": 90,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -4.17
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D3B6E88E_DE12_60B2_41D7_2E38663CA3C7",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 173.23,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -7.9,
     "targetYaw": 91.46,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 86.72
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -27.73,
     "targetYaw": 83.49,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -41.12,
     "targetYaw": 8.21,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 21.28,
     "targetYaw": -80.21,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -22.36
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D3A168A0_DE12_60EE_41E8_EABBF93C25AE",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 101.05
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D3A5A8A9_DE12_60FE_41B3_6C9F496A8B93",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 112.16
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D3D8B8B2_DE12_60D2_41E7_1876E0CBC083",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 13.39
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D3D138BB_DE12_60D2_41C0_F3ACF6379C49",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -178.11
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D3D7F8C4_DE12_60B6_41DC_4B7C0821E459",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 13.39
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D3CC78CD_DE12_60B6_41D2_38BD360F6ACE",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 154.36
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D3C2F8D6_DE12_6052_41B0_A66722CC58A0",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -52.58
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D3FB68DF_DE12_6052_41E6_DAE8025B7042",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -16.93
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D3F1B8E8_DE12_607E_41E1_53F49B921D26",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -107.87
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D3F638F1_DE12_606E_41D9_EA8D678D6778",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -109.39
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D3ECD8FA_DE12_6052_41CF_A5BA9DB02345",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 34.86
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D3E56903_DE12_61B2_41E7_BD74D40C505B",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323000,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 122.68
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D01B890C_DE12_61B6_41E4_BCC0F0E85220",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 107.78,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -13.43,
     "targetYaw": 11.49,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 54.23
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -24.04,
     "targetYaw": -41.05,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.08
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -33.89,
     "targetYaw": 54.69,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.08
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -165.49
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D009992F_DE12_61F2_41E3_A2ABF1FF6FE2",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 182.79,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -18.19,
     "targetYaw": 77.56,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 91.47
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -14.84,
     "targetYaw": 46.11,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -15.85,
     "targetYaw": 112.55,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -99.81
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D004E946_DE12_61B2_41EA_4F8492D77681",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323000,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 123.34
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D03AF955_DE12_6056_41EA_F87ED41CC549",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 26.89,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -40.93,
     "targetYaw": 83.62,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 13.89
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -50.97,
     "targetYaw": -7.2,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 20.27,
     "targetYaw": -80.46,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": 23.05,
     "targetYaw": 83.49,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 22.74
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D029396C_DE12_6076_41EA_5A818E67B720",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 95,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": -77.56
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D02FE97A_DE12_6052_41DF_A0CD01BE560F",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 66.95
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D0241988_DE12_60BE_41D8_12F6C25FAEA9",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "easing": "cubic_out"
    }
   ]
  },
  "initialPosition": {
   "hfov": 110,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 173.56
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_D05AA997_DE12_60D2_41D9_4E6D3A5CB71B",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 5.74,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -18.34,
     "targetYaw": 163.57,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 3.36
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -8.78,
     "targetYaw": -56.46,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    },
    {
     "yawSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetPitch": -17.62,
     "targetYaw": -147.92,
     "easing": "cubic_in_out",
     "path": "shortest",
     "pitchSpeed": 17.05
    }
   ]
  },
  "initialPosition": {
   "hfov": 90,
   "class": "PanoramaCameraPosition",
   "pitch": 0,
   "yaw": 136.9
  }
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_BAD64FCE_9243_78F0_41DD_FFAEB204D688",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_BAD67FCE_9243_78F1_41DB_86AC561E5DF5",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_BAD71FD0_9243_7890_41C2_C6C735C5F9CA",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_BAD70FD0_9243_7891_41B7_24A43EF169A6",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_BAD77FD2_9243_7890_41E1_324C9A318973",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_BAD76FD2_9243_7890_4199_E659A20D66AB",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "id": "effect_BAD0EFD4_9243_7890_41E0_794CA45DA064",
  "duration": 1000
 },
 {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "id": "effect_BAD01FD4_9243_7890_41CC_A2FAFA5CDDA0",
  "duration": 1000
 },
 "this.effect_BAD64FCE_9243_78F0_41DD_FFAEB204D688",
 "this.effect_BAD67FCE_9243_78F1_41DB_86AC561E5DF5",
 "this.effect_BAD71FD0_9243_7890_41C2_C6C735C5F9CA",
 "this.effect_BAD70FD0_9243_7891_41B7_24A43EF169A6",
 "this.effect_BAD77FD2_9243_7890_41E1_324C9A318973",
 "this.effect_BAD76FD2_9243_7890_4199_E659A20D66AB",
 "this.effect_BAD0EFD4_9243_7890_41E0_794CA45DA064",
 "this.effect_BAD01FD4_9243_7890_41CC_A2FAFA5CDDA0",
 {
  "class": "DirectionalPanoramaAudio",
  "id": "audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE",
  "maximumAngle": 61.89,
  "yaw": -10.86,
  "loop": true,
  "pitch": -0.76,
  "autoplay": true,
  "audio": {
   "mp3Url": "media/audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE.mp3",
   "class": "AudioResource",
   "id": "audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577",
   "oggUrl": "media/audio_A87513BA_B273_E04A_41AA_0102CD2EF1BE.ogg"
  }
 },
 {
  "class": "PanoramaAudio",
  "id": "audio_A83165F4_B270_23DF_41DC_E385B4E6556E",
  "autoplay": true,
  "audio": "this.audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577"
 },
 {
  "class": "DirectionalPanoramaAudio",
  "id": "audio_A8213A22_B270_E07A_41D5_F14349BD0E04",
  "maximumAngle": 222.06,
  "yaw": 0,
  "loop": true,
  "pitch": 0,
  "autoplay": true,
  "audio": "this.audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577"
 },
 {
  "class": "DirectionalPanoramaAudio",
  "id": "audio_A8284F56_B270_60DB_41E0_27608EB2E0B9",
  "maximumAngle": 265.52,
  "yaw": -40.93,
  "loop": true,
  "pitch": 0.51,
  "autoplay": true,
  "audio": "this.audioresource_A83107F8_B270_2FD6_41E2_DAE1F661A577"
 },
 {
  "class": "Photo",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_401B85E0_4C63_7E98_41BB_6A16C31E31A2.png"
    }
   ]
  },
  "label": "01",
  "thumbnailUrl": "media/photo_401B85E0_4C63_7E98_41BB_6A16C31E31A2_t.png",
  "width": 1920,
  "height": 1080,
  "id": "photo_401B85E0_4C63_7E98_41BB_6A16C31E31A2",
  "duration": 5000
 },
 {
  "class": "Photo",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_47509739_4C63_7BE8_41AB_2F19E7831FE9.png"
    }
   ]
  },
  "label": "02",
  "thumbnailUrl": "media/photo_47509739_4C63_7BE8_41AB_2F19E7831FE9_t.png",
  "width": 1920,
  "height": 1080,
  "id": "photo_47509739_4C63_7BE8_41AB_2F19E7831FE9",
  "duration": 5000
 },
 {
  "class": "Photo",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_4752CBB1_4C63_6AF8_41D3_0C33DB863547.png"
    }
   ]
  },
  "label": "03",
  "thumbnailUrl": "media/photo_4752CBB1_4C63_6AF8_41D3_0C33DB863547_t.png",
  "width": 1920,
  "height": 1080,
  "id": "photo_4752CBB1_4C63_6AF8_41D3_0C33DB863547",
  "duration": 5000
 },
 {
  "class": "Photo",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_47513F79_4C63_6A68_41B0_4316512EE82D.png"
    }
   ]
  },
  "label": "04",
  "thumbnailUrl": "media/photo_47513F79_4C63_6A68_41B0_4316512EE82D_t.png",
  "width": 1920,
  "height": 1080,
  "id": "photo_47513F79_4C63_6A68_41B0_4316512EE82D",
  "duration": 5000
 },
 {
  "class": "Photo",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_4752B0C7_4C63_1698_4184_60EBB2677E81.png"
    }
   ]
  },
  "label": "05",
  "thumbnailUrl": "media/photo_4752B0C7_4C63_1698_4184_60EBB2677E81_t.png",
  "width": 1920,
  "height": 1080,
  "id": "photo_4752B0C7_4C63_1698_4184_60EBB2677E81",
  "duration": 5000
 },
 {
  "class": "Photo",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_475141B6_4C63_16F8_41BC_1C591B53C229.png"
    }
   ]
  },
  "label": "06",
  "thumbnailUrl": "media/photo_475141B6_4C63_16F8_41BC_1C591B53C229_t.png",
  "width": 1920,
  "height": 1080,
  "id": "photo_475141B6_4C63_16F8_41BC_1C591B53C229",
  "duration": 5000
 },
 {
  "class": "Photo",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_4752B2F9_4C63_1A68_41B9_3E355723AF71.png"
    }
   ]
  },
  "label": "07",
  "thumbnailUrl": "media/photo_4752B2F9_4C63_1A68_41B9_3E355723AF71_t.png",
  "width": 1920,
  "height": 1080,
  "id": "photo_4752B2F9_4C63_1A68_41B9_3E355723AF71",
  "duration": 5000
 },
 {
  "class": "Photo",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_4752B432_4C63_1DF8_41D0_5E704EDA328E.png"
    }
   ]
  },
  "label": "08",
  "thumbnailUrl": "media/photo_4752B432_4C63_1DF8_41D0_5E704EDA328E_t.png",
  "width": 1920,
  "height": 1080,
  "id": "photo_4752B432_4C63_1DF8_41D0_5E704EDA328E",
  "duration": 5000
 },
 {
  "class": "Photo",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_4752B84C_4C63_15A8_41B8_79815C3443D9.png"
    }
   ]
  },
  "label": "09",
  "thumbnailUrl": "media/photo_4752B84C_4C63_15A8_41B8_79815C3443D9_t.png",
  "width": 1920,
  "height": 1080,
  "id": "photo_4752B84C_4C63_15A8_41B8_79815C3443D9",
  "duration": 5000
 },
 {
  "class": "Photo",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_F2EC65EE_FD2D_CC1F_41E9_D41F24CB0693.JPG"
    }
   ]
  },
  "label": "10",
  "thumbnailUrl": "media/photo_F2EC65EE_FD2D_CC1F_41E9_D41F24CB0693_t.jpg",
  "width": 1263,
  "height": 809,
  "id": "photo_F2EC65EE_FD2D_CC1F_41E9_D41F24CB0693",
  "duration": 5000
 },
 {
  "class": "Photo",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_ACCECF8C_A50C_2251_41DD_ACCE5465B487.jpg"
    }
   ]
  },
  "label": "Banquet",
  "thumbnailUrl": "media/photo_ACCECF8C_A50C_2251_41DD_ACCE5465B487_t.jpg",
  "width": 3500,
  "height": 2574,
  "id": "photo_ACCECF8C_A50C_2251_41DD_ACCE5465B487",
  "duration": 5000
 },
 {
  "class": "Photo",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_AC6577F1_A50C_21B3_41C4_6E9EEA8E793D.jpg"
    }
   ]
  },
  "label": "Banquet2",
  "thumbnailUrl": "media/photo_AC6577F1_A50C_21B3_41C4_6E9EEA8E793D_t.jpg",
  "width": 1024,
  "height": 576,
  "id": "photo_AC6577F1_A50C_21B3_41C4_6E9EEA8E793D",
  "duration": 5000
 },
 {
  "class": "Photo",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_AC65B95E_A50C_2EF0_41BD_84E884B7CF79.jpg"
    }
   ]
  },
  "label": "Gym",
  "thumbnailUrl": "media/photo_AC65B95E_A50C_2EF0_41BD_84E884B7CF79_t.jpg",
  "width": 1024,
  "height": 768,
  "id": "photo_AC65B95E_A50C_2EF0_41BD_84E884B7CF79",
  "duration": 5000
 },
 {
  "class": "Photo",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_AC658AD7_A50C_23FF_41DC_9DFE2E280CB1.jpg"
    }
   ]
  },
  "label": "MiniTheatre",
  "thumbnailUrl": "media/photo_AC658AD7_A50C_23FF_41DC_9DFE2E280CB1_t.jpg",
  "width": 400,
  "height": 400,
  "id": "photo_AC658AD7_A50C_23FF_41DC_9DFE2E280CB1",
  "duration": 5000
 },
 {
  "class": "Photo",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_AC65BC12_A50C_2671_41D6_47452F0CB39B.jpg"
    }
   ]
  },
  "label": "MiniTheatrse",
  "thumbnailUrl": "media/photo_AC65BC12_A50C_2671_41D6_47452F0CB39B_t.jpg",
  "width": 830,
  "height": 715,
  "id": "photo_AC65BC12_A50C_2671_41D6_47452F0CB39B",
  "duration": 5000
 },
 {
  "class": "MediaAudio",
  "id": "audio_D559A845_DE12_6FB6_41DF_116C4220382B",
  "autoplay": true,
  "audio": {
   "mp3Url": "media/audio_D559A845_DE12_6FB6_41DF_116C4220382B.mp3",
   "class": "AudioResource",
   "oggUrl": "media/audio_D559A845_DE12_6FB6_41DF_116C4220382B.ogg"
  }
 }
], "children": [
 {
  "progressRight": 0,
  "borderSize": 0,
  "progressOpacity": 1,
  "toolTipShadowSpread": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadow": true,
  "top": 0,
  "toolTipPaddingLeft": 14,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBackgroundOpacity": 1,
  "toolTipTextShadowHorizontalLength": 0,
  "progressBarBorderColor": "#000000",
  "playbackBarOpacity": 1,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "shadow": false,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadOpacity": 1,
  "toolTipFontColor": "#FFFFFF",
  "progressBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "progressBarOpacity": 1,
  "progressHeight": 10,
  "class": "ViewerArea",
  "progressBorderColor": "#000000",
  "minWidth": 100,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBottom": 0,
  "progressBorderSize": 0,
  "minHeight": 50,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBottom": 5,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeight": 10,
  "toolTipFontStyle": "normal",
  "width": "100%",
  "height": "100%",
  "id": "MainViewer",
  "playbackBarHeadWidth": 6,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "toolTipPaddingBottom": 9,
  "paddingLeft": 0,
  "toolTipPaddingTop": 9,
  "progressBarBorderRadius": 0,
  "toolTipBorderSize": 0,
  "progressBarBorderSize": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarProgressBorderRadius": 0,
  "transitionMode": "blending",
  "borderRadius": 0,
  "toolTipShadowColor": "#333333",
  "toolTipTextShadowOpacity": 1,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBorderRadius": 0,
  "toolTipBorderColor": "#767676",
  "toolTipFontFamily": "Arial",
  "toolTipFontWeight": "normal",
  "toolTipBorderRadius": 1,
  "toolTipFontSize": 13,
  "playbackBarHeadBorderRadius": 0,
  "paddingBottom": 0,
  "toolTipOpacity": 0.7,
  "left": 0,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressOpacity": 1,
  "progressLeft": 0,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipShadowOpacity": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarBorderSize": 0,
  "paddingRight": 0,
  "playbackBarLeft": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipBackgroundColor": "#000000",
  "toolTipTextShadowVerticalLength": 0,
  "toolTipPaddingRight": 14,
  "playbackBarHeadHeight": 15,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadBorderSize": 0
 },
 {
  "borderSize": 0,
  "scrollBarColor": "#000000",
  "paddingLeft": 0,
  "scrollBarOpacity": 0.5,
  "backgroundColorDirection": "vertical",
  "children": [
   {
    "toolTipTextShadowVerticalLength": 0,
    "height": "76.75%",
    "maxHeight": 70,
    "paddingLeft": 0,
    "toolTipPaddingTop": 9,
    "toolTipShadowSpread": 0,
    "toolTipBorderSize": 0,
    "toolTipFontStyle": "normal",
    "toolTipShadowBlurRadius": 3,
    "rollOverIconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED_rollover.png",
    "toolTipTextShadowColor": "#000000",
    "toolTipPaddingLeft": 14,
    "toolTipTextShadowHorizontalLength": 0,
    "borderRadius": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "toolTipFontColor": "#FFFFFF",
    "toolTipShadowColor": "#333333",
    "toolTipTextShadowOpacity": 1,
    "paddingTop": 0,
    "mode": "push",
    "class": "IconButton",
    "iconURL": "skin/IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED.png",
    "minWidth": 1,
    "toolTipBorderColor": "#767676",
    "toolTipFontFamily": "Arial",
    "toolTipFontWeight": "normal",
    "toolTipBorderRadius": 1,
    "toolTipFontSize": 13,
    "minHeight": 1,
    "paddingBottom": 0,
    "toolTipOpacity": 0.7,
    "click": "this.showPopupImage(this.ImageResource_B2E0F257_A6D7_FF12_41D7_748FA074DC50, null, '85%', '85%', this.FadeInEffect_8ED05F70_96C4_F045_41DC_2AB82A556F92, this.FadeOutEffect_8ED06F70_96C4_F045_41DA_C74400CF7B15, {'rollOverBackgroundColorDirection':'vertical','pressedIconColor':'#CCCCCC','pressedBackgroundOpacity':0.3,'paddingLeft':10,'rollOverIconLineWidth':3,'pressedIconLineWidth':3,'paddingTop':10,'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':10,'pressedBackgroundColor':['#000000','#000000','#000000'],'rollOverBackgroundOpacity':0.5,'pressedIconWidth':25,'iconHeight':25,'rollOverIconColor':'#52B7EF','iconLineWidth':3,'rollOverIconHeight':25,'rollOverBackgroundColor':['#000000','#000000','#000000'],'borderColor':'#000000','rollOverBorderSize':0,'pressedBorderSize':0,'backgroundColor':['#000000','#000000','#000000'],'rollOverIconWidth':25,'paddingRight':10,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','rollOverBorderColor':'#000000','iconWidth':25,'backgroundOpacity':0.15,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconColor':'#FFFFFF','pressedIconHeight':25,'borderSize':0}, null, null, false)",
    "cursor": "hand",
    "toolTipTextShadowBlurRadius": 3,
    "toolTipShadowOpacity": 0,
    "horizontalAlign": "center",
    "paddingRight": 0,
    "transparencyActive": true,
    "toolTipPaddingRight": 14,
    "toolTipBackgroundColor": "#000000",
    "borderSize": 0,
    "id": "IconButton_87577B8F_8E22_AF1B_41CC_79EB87AE6DED",
    "width": "15.82%",
    "toolTip": "About the Project",
    "visible": false,
    "toolTipPaddingBottom": 9,
    "maxWidth": 70,
    "backgroundOpacity": 0
   },
   {
    "transparencyActive": true,
    "height": 58,
    "maxHeight": 70,
    "paddingLeft": 0,
    "toolTipPaddingTop": 9,
    "toolTipShadowSpread": 0,
    "toolTipBorderSize": 0,
    "toolTipFontStyle": "normal",
    "toolTipShadowBlurRadius": 3,
    "rollOverIconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED_rollover.png",
    "toolTipTextShadowColor": "#000000",
    "toolTipPaddingLeft": 14,
    "toolTipTextShadowHorizontalLength": 0,
    "borderRadius": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "toolTipFontColor": "#FFFFFF",
    "toolTipShadowColor": "#333333",
    "toolTipTextShadowOpacity": 1,
    "paddingTop": 0,
    "mode": "push",
    "class": "IconButton",
    "iconURL": "skin/IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED.png",
    "minWidth": 1,
    "toolTipBorderColor": "#767676",
    "toolTipFontFamily": "Arial",
    "toolTipFontWeight": "normal",
    "toolTipBorderRadius": 1,
    "toolTipFontSize": 13,
    "minHeight": 1,
    "paddingBottom": 0,
    "toolTipOpacity": 0.7,
    "click": "this.mainPlayList.set('selectedIndex', 1); this.setComponentVisibility(this.Container_AA902B2C_A63E_AD36_41C2_0F9433A88998, false, 0, null, null, false)",
    "cursor": "hand",
    "toolTipTextShadowBlurRadius": 3,
    "toolTipShadowOpacity": 0,
    "horizontalAlign": "center",
    "paddingRight": 0,
    "width": 40,
    "toolTipPaddingRight": 14,
    "toolTip": "Home",
    "borderSize": 0,
    "id": "IconButton_87D69DC5_8E23_AB0F_41C9_0743A2FA3EED",
    "toolTipTextShadowVerticalLength": 0,
    "toolTipBackgroundColor": "#000000",
    "toolTipPaddingBottom": 9,
    "maxWidth": 70,
    "backgroundOpacity": 0
   },
   {
    "height": "75.384%",
    "maxHeight": 70,
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "paddingTop": 0,
    "scaleMode": "fit_inside",
    "class": "Image",
    "minWidth": 1,
    "minHeight": 1,
    "paddingBottom": 0,
    "click": "this.mainPlayList.set('selectedIndex', 60)",
    "horizontalAlign": "center",
    "paddingRight": 0,
    "width": "20.539%",
    "borderSize": 0,
    "id": "Image_AC5C719D_A51C_1E73_41E1_CC46C234B200",
    "url": "skin/Image_AC5C719D_A51C_1E73_41E1_CC46C234B200.png",
    "maxWidth": 85,
    "backgroundOpacity": 0
   },
   {
    "toolTipTextShadowVerticalLength": 0,
    "height": "76.75%",
    "maxHeight": 70,
    "paddingLeft": 0,
    "toolTipPaddingTop": 9,
    "toolTipShadowSpread": 0,
    "toolTipBorderSize": 0,
    "toolTipFontStyle": "normal",
    "toolTipShadowBlurRadius": 3,
    "toolTipTextShadowColor": "#000000",
    "toolTipPaddingLeft": 14,
    "toolTipTextShadowHorizontalLength": 0,
    "borderRadius": 0,
    "shadow": false,
    "verticalAlign": "middle",
    "pressedIconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC_pressed.png",
    "toolTipFontColor": "#FFFFFF",
    "toolTipShadowColor": "#333333",
    "toolTipTextShadowOpacity": 1,
    "paddingTop": 0,
    "mode": "toggle",
    "class": "IconButton",
    "iconURL": "skin/IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC.png",
    "minWidth": 1,
    "toolTipBorderColor": "#767676",
    "toolTipFontFamily": "Arial",
    "toolTipFontWeight": "normal",
    "toolTipBorderRadius": 1,
    "toolTipFontSize": 13,
    "minHeight": 1,
    "paddingBottom": 0,
    "toolTipOpacity": 0.7,
    "click": "if(!this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')){ this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, true, 0, this.effect_85A2AAA4_9245_B8B0_41CE_5BE27798090E, 'showEffect', false) } else if(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472.get('visible')){ this.setComponentVisibility(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472, false, 0, this.effect_85A28AA4_9245_B8B0_41A1_5761D51DA5D1, 'hideEffect', false) }",
    "cursor": "hand",
    "toolTipTextShadowBlurRadius": 3,
    "toolTipShadowOpacity": 0,
    "horizontalAlign": "center",
    "paddingRight": 0,
    "transparencyActive": true,
    "toolTipPaddingRight": 14,
    "toolTipBackgroundColor": "#000000",
    "borderSize": 0,
    "id": "IconButton_843BBEF5_8E22_690F_419D_28CBDD771ACC",
    "width": "15.82%",
    "toolTip": "Panorama List",
    "toolTipPaddingBottom": 9,
    "maxWidth": 70,
    "backgroundOpacity": 0
   }
  ],
  "top": "89%",
  "bottom": "3%",
  "contentOpaque": false,
  "backgroundColorRatios": [
   0,
   1
  ],
  "borderRadius": 5,
  "verticalAlign": "middle",
  "paddingTop": 0,
  "shadow": false,
  "class": "Container",
  "minWidth": 240,
  "scrollBarVisible": "rollOver",
  "minHeight": 50,
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "layout": "horizontal",
  "left": "45%",
  "scrollBarMargin": 2,
  "right": "40.46%",
  "horizontalAlign": "center",
  "gap": 20,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingRight": 0,
  "id": "Container_86F3A56C_8E22_5B1D_41CA_9CE53436FE56",
  "backgroundOpacity": 0.25,
  "overflow": "visible"
 },
 {
  "scrollBarColor": "#000000",
  "paddingLeft": 0,
  "scrollBarOpacity": 0.5,
  "children": [
   {
    "scrollBarColor": "#000000",
    "scrollBarOpacity": 0.5,
    "paddingLeft": 0,
    "children": [
     "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
     {
      "toolTipTextShadowVerticalLength": 0,
      "height": "76.75%",
      "maxHeight": 70,
      "paddingLeft": 0,
      "toolTipPaddingTop": 9,
      "toolTipShadowSpread": 0,
      "toolTipBorderSize": 0,
      "toolTipFontStyle": "normal",
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingLeft": 14,
      "toolTipTextShadowHorizontalLength": 0,
      "borderRadius": 0,
      "shadow": false,
      "verticalAlign": "middle",
      "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
      "toolTipFontColor": "#FFFFFF",
      "toolTipShadowColor": "#333333",
      "toolTipTextShadowOpacity": 1,
      "paddingTop": 0,
      "mode": "toggle",
      "class": "IconButton",
      "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
      "minWidth": 1,
      "toolTipBorderColor": "#767676",
      "toolTipFontFamily": "Arial",
      "toolTipFontWeight": "normal",
      "toolTipBorderRadius": 1,
      "toolTipFontSize": 13,
      "minHeight": 1,
      "paddingBottom": 0,
      "toolTipOpacity": 0.7,
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, null, null, false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, null, null, false) }",
      "cursor": "hand",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipShadowOpacity": 0,
      "horizontalAlign": "center",
      "paddingRight": 0,
      "transparencyActive": true,
      "toolTipPaddingRight": 14,
      "toolTipBackgroundColor": "#000000",
      "borderSize": 0,
      "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
      "width": "17.48%",
      "toolTip": "Full Screen",
      "toolTipPaddingBottom": 9,
      "maxWidth": 70,
      "backgroundOpacity": 0
     },
     {
      "toolTipTextShadowVerticalLength": 0,
      "height": "76.75%",
      "maxHeight": 70,
      "paddingLeft": 0,
      "toolTipPaddingTop": 9,
      "toolTipShadowSpread": 0,
      "toolTipBorderSize": 0,
      "toolTipFontStyle": "normal",
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingLeft": 14,
      "toolTipTextShadowHorizontalLength": 0,
      "borderRadius": 0,
      "shadow": false,
      "verticalAlign": "middle",
      "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
      "toolTipFontColor": "#FFFFFF",
      "toolTipShadowColor": "#333333",
      "toolTipTextShadowOpacity": 1,
      "paddingTop": 0,
      "mode": "toggle",
      "class": "IconButton",
      "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
      "minWidth": 1,
      "toolTipBorderColor": "#767676",
      "toolTipFontFamily": "Arial",
      "toolTipFontWeight": "normal",
      "toolTipBorderRadius": 1,
      "toolTipFontSize": 13,
      "minHeight": 1,
      "paddingBottom": 0,
      "toolTipOpacity": 0.7,
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CACBF85D_EED0_7261_41DB_A3B65ECE0D5D, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CACBC85D_EED0_7261_41BE_8CF4C3A8170C, 'hideEffect', false) }",
      "cursor": "hand",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipShadowOpacity": 0,
      "horizontalAlign": "center",
      "paddingRight": 0,
      "transparencyActive": true,
      "toolTipPaddingRight": 14,
      "toolTipBackgroundColor": "#000000",
      "borderSize": 0,
      "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
      "width": "17.15%",
      "toolTip": "Audio On/Off",
      "toolTipPaddingBottom": 9,
      "maxWidth": 70,
      "backgroundOpacity": 0
     },
     "this.IconButton_80E5955A_8E23_BB05_41CA_43DD61DBAEE9"
    ],
    "borderRadius": 0,
    "contentOpaque": false,
    "shadow": false,
    "verticalAlign": "middle",
    "paddingTop": 0,
    "class": "Container",
    "minWidth": 1,
    "scrollBarVisible": "rollOver",
    "minHeight": 1,
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "horizontalAlign": "right",
    "gap": 10,
    "paddingRight": 0,
    "width": "75.269%",
    "borderSize": 0,
    "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
    "backgroundOpacity": 0,
    "overflow": "visible",
    "height": "100%",
    "visible": false
   },
   {
    "scrollBarColor": "#000000",
    "scrollBarOpacity": 0.5,
    "paddingLeft": 0,
    "children": [
     {
      "toolTipTextShadowVerticalLength": 0,
      "height": "76.75%",
      "maxHeight": 70,
      "paddingLeft": 0,
      "toolTipPaddingTop": 9,
      "toolTipShadowSpread": 0,
      "toolTipBorderSize": 0,
      "toolTipFontStyle": "normal",
      "toolTipShadowBlurRadius": 3,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingLeft": 14,
      "toolTipTextShadowHorizontalLength": 0,
      "borderRadius": 0,
      "shadow": false,
      "verticalAlign": "middle",
      "toolTipFontColor": "#FFFFFF",
      "toolTipShadowColor": "#333333",
      "toolTipTextShadowOpacity": 1,
      "paddingTop": 0,
      "mode": "toggle",
      "class": "IconButton",
      "iconURL": "skin/IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF.png",
      "minWidth": 1,
      "toolTipBorderColor": "#767676",
      "toolTipFontFamily": "Arial",
      "toolTipFontWeight": "normal",
      "toolTipBorderRadius": 1,
      "toolTipFontSize": 13,
      "minHeight": 1,
      "paddingBottom": 0,
      "toolTipOpacity": 0.7,
      "click": "if(!this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, true, 0, this.effect_CD2B8C48_EED0_726F_41E4_49557D18059C, 'showEffect', false) } else if(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106.get('visible')){ this.setComponentVisibility(this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106, false, 0, this.effect_CD2BEC48_EED0_726F_41DF_F342BE2B4EF0, 'hideEffect', false) }",
      "cursor": "hand",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipShadowOpacity": 0,
      "horizontalAlign": "center",
      "paddingRight": 0,
      "transparencyActive": true,
      "toolTipPaddingRight": 14,
      "toolTipBackgroundColor": "#000000",
      "borderSize": 0,
      "id": "IconButton_811D89E1_8E3D_AB07_4191_94003C90B2FF",
      "width": "82.76%",
      "toolTip": "Settings",
      "toolTipPaddingBottom": 9,
      "maxWidth": 70,
      "backgroundOpacity": 0
     }
    ],
    "borderRadius": 0,
    "contentOpaque": false,
    "shadow": false,
    "verticalAlign": "middle",
    "paddingTop": 0,
    "class": "Container",
    "minWidth": 1,
    "scrollBarVisible": "rollOver",
    "minHeight": 1,
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "horizontalAlign": "center",
    "gap": 10,
    "paddingRight": 0,
    "width": "15.59%",
    "borderSize": 0,
    "id": "Container_80B2155B_8E3F_DB3B_41A1_77496D90E2FB",
    "backgroundOpacity": 0,
    "overflow": "visible",
    "height": "100%"
   }
  ],
  "top": "89%",
  "bottom": "3%",
  "borderRadius": 5,
  "contentOpaque": false,
  "shadow": false,
  "verticalAlign": "middle",
  "paddingTop": 0,
  "class": "Container",
  "minWidth": 265,
  "scrollBarVisible": "rollOver",
  "minHeight": 50,
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "layout": "horizontal",
  "scrollBarMargin": 2,
  "right": 25,
  "horizontalAlign": "right",
  "gap": 1,
  "paddingRight": 0,
  "width": "22.545%",
  "borderSize": 0,
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
  "overflow": "visible",
  "backgroundOpacity": 0
 },
 {
  "scrollBarColor": "#000000",
  "scrollBarOpacity": 0.5,
  "paddingLeft": 0,
  "children": [
   {
    "height": "100%",
    "maxHeight": 237,
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "verticalAlign": "top",
    "paddingTop": 0,
    "scaleMode": "fit_inside",
    "class": "Image",
    "minWidth": 1,
    "minHeight": 1,
    "paddingBottom": 0,
    "horizontalAlign": "center",
    "paddingRight": 0,
    "width": "100%",
    "borderSize": 0,
    "id": "Image_839F2153_92C3_4990_41DE_8BB8E5D909EE",
    "maxWidth": 504,
    "url": "skin/Image_839F2153_92C3_4990_41DE_8BB8E5D909EE.png",
    "visible": false,
    "backgroundOpacity": 0
   },
   {
    "height": "100%",
    "maxHeight": 200,
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "verticalAlign": "top",
    "paddingTop": 0,
    "scaleMode": "fit_inside",
    "class": "Image",
    "minWidth": 1,
    "minHeight": 1,
    "paddingBottom": 0,
    "horizontalAlign": "center",
    "paddingRight": 0,
    "width": "100%",
    "borderSize": 0,
    "id": "Image_834E90F5_92C5_4890_41B3_1F18BA633A48",
    "maxWidth": 504,
    "url": "skin/Image_834E90F5_92C5_4890_41B3_1F18BA633A48.png",
    "visible": false,
    "backgroundOpacity": 0
   },
   {
    "height": "100%",
    "maxHeight": 200,
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "verticalAlign": "top",
    "paddingTop": 0,
    "scaleMode": "fit_inside",
    "class": "Image",
    "minWidth": 1,
    "minHeight": 1,
    "paddingBottom": 0,
    "horizontalAlign": "center",
    "paddingRight": 0,
    "width": "100%",
    "borderSize": 0,
    "id": "Image_82D03E84_923C_DB71_41D5_F59C5FE2AAED",
    "maxWidth": 504,
    "url": "skin/Image_82D03E84_923C_DB71_41D5_F59C5FE2AAED.png",
    "visible": false,
    "backgroundOpacity": 0
   },
   {
    "height": "87.72%",
    "maxHeight": 200,
    "paddingLeft": 0,
    "borderRadius": 0,
    "shadow": false,
    "verticalAlign": "top",
    "paddingTop": 0,
    "scaleMode": "fit_inside",
    "class": "Image",
    "minWidth": 1,
    "minHeight": 1,
    "paddingBottom": 0,
    "horizontalAlign": "center",
    "paddingRight": 0,
    "width": "94.59%",
    "borderSize": 0,
    "id": "Image_9DBFF4C8_9223_DCFB_41B4_FC435007C476",
    "maxWidth": 504,
    "url": "skin/Image_9DBFF4C8_9223_DCFB_41B4_FC435007C476.png",
    "visible": false,
    "backgroundOpacity": 0
   }
  ],
  "top": "3.5%",
  "borderRadius": 0,
  "contentOpaque": false,
  "shadow": false,
  "verticalAlign": "top",
  "paddingTop": 0,
  "class": "Container",
  "minWidth": 300,
  "scrollBarVisible": "rollOver",
  "minHeight": 120,
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "layout": "vertical",
  "left": "2.14%",
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "gap": 10,
  "paddingRight": 0,
  "width": "21%",
  "borderSize": 0,
  "id": "Container_82CEEC30_9220_D3AB_41D9_A91DB817BCCC",
  "overflow": "visible",
  "height": "25%",
  "visible": false,
  "backgroundOpacity": 0
 },
 {
  "scrollBarColor": "#52B7EF",
  "itemThumbnailShadow": false,
  "backgroundColorDirection": "vertical",
  "itemThumbnailWidth": 80,
  "itemMode": "normal",
  "selectedItemBackgroundColorRatios": [],
  "top": "3.5%",
  "itemLabelFontWeight": "normal",
  "itemBackgroundColor": [],
  "selectedItemBackgroundOpacity": 0,
  "selectedItemLabelTextDecoration": "underline",
  "rollOverItemLabelTextDecoration": "underline",
  "shadow": false,
  "selectedItemBackgroundColor": [],
  "rollOverItemLabelFontWeight": "bold",
  "itemLabelPosition": "bottom",
  "itemThumbnailScaleMode": "fit_outside",
  "paddingTop": 20,
  "itemPaddingTop": 3,
  "class": "ThumbnailList",
  "itemThumbnailBorderRadius": 50,
  "minWidth": 1,
  "itemBorderRadius": 0,
  "minHeight": 1,
  "itemLabelFontSize": 12,
  "itemPaddingRight": 3,
  "itemBackgroundColorRatios": [],
  "horizontalAlign": "left",
  "gap": 10,
  "selectedItemLabelFontStyle": "italic",
  "itemLabelGap": 9,
  "itemHorizontalAlign": "center",
  "itemBackgroundColorDirection": "vertical",
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
  "maxWidth": 150,
  "selectedItemThumbnailShadowHorizontalLength": 0,
  "itemBackgroundOpacity": 0,
  "height": "82.127%",
  "visible": false,
  "itemOpacity": 1,
  "itemLabelFontColor": "#FFFFFF",
  "itemLabelFontFamily": "Arial",
  "selectedItemThumbnailShadowVerticalLength": 0,
  "itemThumbnailOpacity": 1,
  "paddingLeft": 15,
  "scrollBarOpacity": 1,
  "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "itemVerticalAlign": "middle",
  "selectedItemLabelFontColor": "#FFFFFF",
  "selectedItemThumbnailShadowBlurRadius": 10,
  "backgroundOpacity": 0.25,
  "itemLabelHorizontalAlign": "center",
  "selectedItemLabelFontSize": 12,
  "borderRadius": 3,
  "selectedItemBorderRadius": 0,
  "rollOverItemLabelFontColor": "#FFFFFF",
  "backgroundColorRatios": [
   0
  ],
  "verticalAlign": "top",
  "itemPaddingBottom": 3,
  "selectedItemThumbnailShadowOpacity": 0.73,
  "scrollBarVisible": "rollOver",
  "itemLabelTextDecoration": "none",
  "scrollBarWidth": 7,
  "paddingBottom": 20,
  "selectedItemLabelFontWeight": "bold",
  "itemThumbnailHeight": 80,
  "scrollBarMargin": 4,
  "layout": "vertical",
  "right": "2%",
  "itemPaddingLeft": 3,
  "backgroundColor": [
   "#000000"
  ],
  "paddingRight": 15,
  "selectedItemBorderSize": 0,
  "itemLabelFontStyle": "normal",
  "borderSize": 0,
  "selectedItemThumbnailShadow": true
 },
 {
  "scrollBarColor": "#000000",
  "scrollBarOpacity": 0.5,
  "paddingLeft": 0,
  "children": [
   {
    "visible": false,
    "scrollBarColor": "#000000",
    "paddingLeft": 0,
    "scrollBarOpacity": 0.5,
    "backgroundColorDirection": "vertical",
    "children": [
     {
      "height": "95.89%",
      "maxHeight": 70,
      "paddingLeft": 0,
      "borderRadius": 0,
      "shadow": false,
      "verticalAlign": "middle",
      "paddingTop": 0,
      "scaleMode": "fit_inside",
      "class": "Image",
      "minWidth": 1,
      "minHeight": 1,
      "paddingBottom": 0,
      "click": "this.mainPlayList.set('selectedIndex', 31)",
      "horizontalAlign": "center",
      "paddingRight": 0,
      "width": "21.07%",
      "borderSize": 0,
      "id": "Image_AAC62CE8_A675_6B3E_41DF_0D9E35BBB087",
      "url": "skin/Image_AAC62CE8_A675_6B3E_41DF_0D9E35BBB087.png",
      "maxWidth": 130,
      "backgroundOpacity": 0
     },
     {
      "height": "95.89%",
      "maxHeight": 70,
      "paddingLeft": 0,
      "borderRadius": 0,
      "shadow": false,
      "verticalAlign": "middle",
      "paddingTop": 0,
      "scaleMode": "fit_inside",
      "class": "Image",
      "minWidth": 1,
      "minHeight": 1,
      "paddingBottom": 0,
      "click": "this.mainPlayList.set('selectedIndex', 39)",
      "horizontalAlign": "center",
      "paddingRight": 0,
      "width": "21.07%",
      "borderSize": 0,
      "id": "Image_AAFE9800_A66A_AAEF_41DD_A80C12F57C98",
      "url": "skin/Image_AAFE9800_A66A_AAEF_41DD_A80C12F57C98.png",
      "maxWidth": 130,
      "backgroundOpacity": 0
     },
     {
      "height": "95.89%",
      "maxHeight": 70,
      "paddingLeft": 0,
      "borderRadius": 0,
      "shadow": false,
      "verticalAlign": "middle",
      "paddingTop": 0,
      "scaleMode": "fit_inside",
      "class": "Image",
      "minWidth": 1,
      "minHeight": 1,
      "paddingBottom": 0,
      "click": "this.mainPlayList.set('selectedIndex', 47)",
      "horizontalAlign": "center",
      "paddingRight": 0,
      "width": "21.07%",
      "borderSize": 0,
      "id": "Image_AA894F55_A66B_E511_41D4_A21060106E75",
      "url": "skin/Image_AA894F55_A66B_E511_41D4_A21060106E75.png",
      "maxWidth": 130,
      "backgroundOpacity": 0
     },
     {
      "height": "95.89%",
      "maxHeight": 70,
      "paddingLeft": 0,
      "borderRadius": 0,
      "shadow": false,
      "verticalAlign": "middle",
      "paddingTop": 0,
      "scaleMode": "fit_inside",
      "class": "Image",
      "minWidth": 1,
      "minHeight": 1,
      "paddingBottom": 0,
      "click": "this.mainPlayList.set('selectedIndex', 53)",
      "horizontalAlign": "center",
      "paddingRight": 0,
      "width": "21.07%",
      "borderSize": 0,
      "id": "Image_C89AA640_D268_A062_41D0_4EBE08E2550F",
      "url": "skin/Image_C89AA640_D268_A062_41D0_4EBE08E2550F.png",
      "maxWidth": 130,
      "backgroundOpacity": 0
     }
    ],
    "borderRadius": 5,
    "contentOpaque": false,
    "shadow": false,
    "backgroundColorRatios": [
     0,
     1
    ],
    "verticalAlign": "middle",
    "paddingTop": 0,
    "class": "Container",
    "minWidth": 1,
    "scrollBarVisible": "rollOver",
    "minHeight": 1,
    "scrollBarWidth": 10,
    "paddingBottom": 0,
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "horizontalAlign": "center",
    "gap": 10,
    "backgroundColor": [
     "#000000",
     "#000000"
    ],
    "paddingRight": 0,
    "width": "85%",
    "id": "Container_AA902B2C_A63E_AD36_41C2_0F9433A88998",
    "overflow": "visible",
    "height": "79.348%",
    "borderSize": 0,
    "backgroundOpacity": 0.25
   }
  ],
  "bottom": "3%",
  "borderRadius": 0,
  "contentOpaque": false,
  "shadow": false,
  "verticalAlign": "bottom",
  "paddingTop": 0,
  "class": "Container",
  "minWidth": 1,
  "scrollBarVisible": "rollOver",
  "minHeight": 1,
  "scrollBarWidth": 10,
  "paddingBottom": 0,
  "layout": "vertical",
  "left": "2%",
  "scrollBarMargin": 2,
  "horizontalAlign": "left",
  "gap": 1,
  "paddingRight": 0,
  "width": "37.394%",
  "height": 92,
  "borderSize": 0,
  "id": "Container_8A3F064F_9747_905B_41D4_9169FB3EB41E",
  "overflow": "visible",
  "backgroundOpacity": 0
 },
 {
  "maxHeight": 50,
  "paddingLeft": 0,
  "top": "2%",
  "rollOverIconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB_rollover.png",
  "borderRadius": 0,
  "shadow": false,
  "verticalAlign": "middle",
  "paddingTop": 0,
  "mode": "push",
  "class": "IconButton",
  "iconURL": "skin/IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB.png",
  "minWidth": 40,
  "minHeight": 40,
  "paddingBottom": 0,
  "cursor": "hand",
  "right": "1%",
  "horizontalAlign": "center",
  "paddingRight": 0,
  "transparencyActive": true,
  "borderSize": 0,
  "id": "IconButton_AF1EA938_BF1B_7043_41E3_6C338E6745CB",
  "width": "3.03%",
  "height": "5.482%",
  "visible": false,
  "maxWidth": 50,
  "backgroundOpacity": 0
 },
 {
  "transparencyActive": true,
  "paddingLeft": 0,
  "top": "45%",
  "rollOverIconURL": "skin/IconButton_7B26BED7_6420_EF17_41D5_10441E0B3F54_rollover.png",
  "borderRadius": 0,
  "shadow": false,
  "verticalAlign": "middle",
  "pressedIconURL": "skin/IconButton_7B26BED7_6420_EF17_41D5_10441E0B3F54_pressed.png",
  "paddingTop": 0,
  "mode": "push",
  "class": "IconButton",
  "iconURL": "skin/IconButton_7B26BED7_6420_EF17_41D5_10441E0B3F54.png",
  "minWidth": 0,
  "minHeight": 0,
  "paddingBottom": 0,
  "click": "this.loadFromCurrentMediaPlayList(this.mainPlayList, 1)",
  "right": "2%",
  "cursor": "hand",
  "horizontalAlign": "center",
  "paddingRight": 0,
  "width": 50,
  "height": 50,
  "borderSize": 0,
  "id": "IconButton_7B26BED7_6420_EF17_41D5_10441E0B3F54",
  "backgroundOpacity": 0
 },
 {
  "transparencyActive": true,
  "paddingLeft": 0,
  "top": "45%",
  "rollOverIconURL": "skin/IconButton_7B3528C5_6420_936B_41D8_2FD04FED9038_rollover.png",
  "borderRadius": 0,
  "shadow": false,
  "verticalAlign": "middle",
  "pressedIconURL": "skin/IconButton_7B3528C5_6420_936B_41D8_2FD04FED9038_pressed.png",
  "paddingTop": 0,
  "mode": "push",
  "class": "IconButton",
  "iconURL": "skin/IconButton_7B3528C5_6420_936B_41D8_2FD04FED9038.png",
  "minWidth": 0,
  "minHeight": 0,
  "paddingBottom": 0,
  "click": "this.loadFromCurrentMediaPlayList(this.mainPlayList, -1)",
  "cursor": "hand",
  "horizontalAlign": "center",
  "left": "2%",
  "width": 50,
  "height": 50,
  "borderSize": 0,
  "id": "IconButton_7B3528C5_6420_936B_41D8_2FD04FED9038",
  "paddingRight": 0,
  "backgroundOpacity": 0
 },
 {
  "borderSize": 0,
  "paddingLeft": 0,
  "backgroundColorDirection": "vertical",
  "top": 0,
  "bottom": 0,
  "borderRadius": 0,
  "shadow": false,
  "backgroundColorRatios": [
   0
  ],
  "paddingTop": 0,
  "class": "UIComponent",
  "minWidth": 0,
  "minHeight": 0,
  "paddingBottom": 0,
  "left": 0,
  "right": 0,
  "backgroundColor": [
   "#000000"
  ],
  "paddingRight": 0,
  "id": "veilPopupPanorama",
  "showEffect": {
   "duration": 350,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "visible": false,
  "backgroundOpacity": 0.55
 },
 {
  "borderSize": 0,
  "paddingLeft": 0,
  "backgroundColorDirection": "vertical",
  "top": 0,
  "bottom": 0,
  "borderRadius": 0,
  "shadow": false,
  "backgroundColorRatios": [],
  "paddingTop": 0,
  "scaleMode": "custom",
  "class": "ZoomImage",
  "minWidth": 0,
  "minHeight": 0,
  "paddingBottom": 0,
  "left": 0,
  "right": 0,
  "backgroundColor": [],
  "paddingRight": 0,
  "id": "zoomImagePopupPanorama",
  "visible": false,
  "backgroundOpacity": 1
 },
 {
  "fontFamily": "Arial",
  "borderSize": 0,
  "fontSize": 12,
  "shadowColor": "#000000",
  "paddingLeft": 5,
  "fontColor": "#FFFFFF",
  "backgroundColorDirection": "vertical",
  "label": "",
  "top": 10,
  "iconLineWidth": 5,
  "iconWidth": 20,
  "fontStyle": "normal",
  "shadowBlurRadius": 6,
  "borderRadius": 0,
  "iconHeight": 20,
  "shadow": false,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "verticalAlign": "middle",
  "borderColor": "#000000",
  "paddingTop": 5,
  "mode": "push",
  "class": "CloseButton",
  "pressedIconColor": "#888888",
  "minWidth": 0,
  "minHeight": 0,
  "paddingBottom": 5,
  "layout": "horizontal",
  "fontWeight": "normal",
  "cursor": "hand",
  "shadowSpread": 1,
  "iconBeforeLabel": true,
  "right": 10,
  "horizontalAlign": "center",
  "gap": 5,
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "iconColor": "#000000",
  "paddingRight": 5,
  "textDecoration": "none",
  "rollOverIconColor": "#666666",
  "id": "closeButtonPopupPanorama",
  "showEffect": {
   "duration": 350,
   "class": "FadeInEffect",
   "easing": "cubic_in_out"
  },
  "visible": false,
  "backgroundOpacity": 0.3
 }
], 
 "scrollBarColor": "#000000",
 "scripts": {
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "unregisterKey": function(key){    delete window[key]; },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "registerKey": function(key, value){    window[key] = value; },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){    var self = this;   this.MainViewer.set('toolTipEnabled', false);   var cardboardEnabled = this.isCardboardViewMode();   if(!cardboardEnabled) {       var zoomImage = this.zoomImagePopupPanorama;       var showDuration = popupPanoramaOverlay.get('showDuration');       var hideDuration = popupPanoramaOverlay.get('hideDuration');       var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);       var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth');       var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight');       var showEndFunction = function() {           var loadedFunction = function(){               if(!self.isCardboardViewMode())                   popupPanoramaOverlay.set('visible', false);           };           popupPanoramaOverlay.unbind('showEnd', showEndFunction, self);           popupPanoramaOverlay.set('showDuration', 1);           popupPanoramaOverlay.set('hideDuration', 1);           self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null,            closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction);       };       var hideFunction = function() {           var restoreShowDurationFunction = function(){                popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self);                popupPanoramaOverlay.set('visible', false);               popupPanoramaOverlay.set('showDuration', showDuration);               popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup);               popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup);           };           self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio);           var currentWidth = zoomImage.get('imageWidth');           var currentHeight = zoomImage.get('imageHeight');           popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true);           popupPanoramaOverlay.set('showDuration', 1);           popupPanoramaOverlay.set('hideDuration', hideDuration);           popupPanoramaOverlay.set('popupMaxWidth', currentWidth);           popupPanoramaOverlay.set('popupMaxHeight', currentHeight);          if(popupPanoramaOverlay.get('visible'))              restoreShowDurationFunction();          else              popupPanoramaOverlay.set('visible', true);           self.MainViewer.set('toolTipEnabled', true);       };       if(!imageHD){           imageHD = popupPanoramaOverlay.get('image');       }       if(!toggleImageHD && toggleImage){           toggleImageHD = toggleImage;       }       popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   } else {       var hideEndFunction = function() {           self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);           if(audio){               if(stopBackgroundAudio){                   self.resumeGlobalAudios();               }               self.stopGlobalAudio(audio);           }           popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self);           self.MainViewer.set('toolTipEnabled', true);       };       var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               this.pauseGlobalAudios();           }           this.playGlobalAudio(audio);       }       popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true);   }   popupPanoramaOverlay.set('visible', true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "getKey": function(key){    return window[key]; },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "existsKey": function(key){    return key in window; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; }
 },
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "start": "this.playAudioList([this.audio_D559A845_DE12_6FB6_41DF_116C4220382B]); this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "borderRadius": 0,
 "contentOpaque": false,
 "shadow": false,
 "verticalAlign": "top",
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "paddingTop": 0,
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "class": "Player",
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "layout": "absolute",
 "mouseWheelEnabled": true,
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "gap": 10,
 "paddingRight": 0,
 "width": "100%",
 "id": "rootPlayer",
 "overflow": "visible",
 "height": "100%",
 "borderSize": 0
})