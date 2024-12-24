var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


var icicle;

function init(){
  // left panel controls
  controls();
  $jit.id('max-levels').style.display = 'none';
  // init data
  var json = {
    
            "name": "User Info Priority",
            "id": "2150432080-homebrew",
            "children": [
              {
                "name": "병원정보",
                "id": "2150426340-sharea",
                "children": [

                  {
                    "name": "병원이름",
                    "id": "2150144620-aclocl", 
                    "data": {
                      "$color": "#21ff59"
                    }
                  },
                  {
                    "name": "병원 진료과 명",
                    "id": "2150144620-accl", 
                    "children" : [
                      {
                        "name": "정신건강의학과",
                        "id": "2150149120-acloal1",
                        "data": {
                          "$color": "#21ffc8"
                        }
                      },
                      {
                        "name": "소아정신과",
                        "id": "2150149120-acloal2",
                        "data": {
                          "$color": "#21ffc8"
                        }
                      },
                      {
                        "name": "종양정신건강의학과",
                        "id": "2150149120-acloal3",
                        "data": {
                          "$color": "#21ffc8"
                        }
                      },
                    ],
                    "data": {
                      "$color": "#21ff59"
                    }
                  },
                  {
                    "name": "주소",
                    "id": "21501462-aclocl", 
                    "data": {
                      "$color": "#21ff59"
                    }
                  },
                      {
                    "name": "지하철역",
                    "id": "21504462-aclol", 
                    "data": {
                      "$color": "#21ff59"
                    }
                  },    {
                    "name": "유선전화",
                    "id": "21501462-acocl", 
                    "data": {
                      "$color": "#21ff59"
                    }
                  },    {
                    "name": "담당자명",
                    "id": "21016092-aclocl", 
                    "data": {
                      "$color": "#21ff59"
                    }
                  }
                  ,    {
                    "name": "담당자연락처",
                    "id": "21504628-aclocl", 
                    "data": {
                      "$color": "#21ff59"
                    }
                  }
                  ,    {
                    "name": "이메일",
                    "id": "21501468-aclocl", 
                    "data": {
                      "$color": "#21ff59"
                    }
                  },    {
                    "name": "로그인아이디",
                    "id": "2501462-aclcl", 
                    "data": {
                      "$color": "#21ff59"
                    }
                  }
                  ,    {
                    "name": "비밀번호",
                    "id": "2151462-acocl", 
                    "data": {
                      "$color": "#21ff59"
                    }
                  }
                 ],
            
                "data": {
                  "$color": "#59ff21"
                }
              },
            
                {
                  "name": "검사자 개인정보",
                  "id": "2150426340-share",
                  "children": [
                      {
                        "name": "계정생성시 수집되는 일반정보",
                        "id": "2150144620-aclocal",
                        "children": [
                          {
                            "name": "이름",
                            "id": "2150149120-aclocal",
                            "data": {
                              "$color": "#21ffc8"
                            }
                          }, {
                            "name": "나이",
                            "id": "2150149120-asd",
                            "data": {
                              "$color": "#21ffc8"
                            }
                          }, {
                            "name": "성별",
                            "id": "2150148340-aclocal",
                            "data": {
                              "$color": "#21ffc8"
                            }
                          }, {
                            "name": "임상심리 자격증 정보",
                            "id": "2150148340-acloc",
                            "data": {
                              "$color": "#21ffc8"
                            }
                          }
                      ],
                        "data": {
                          "$color": "#21ff59"
                        }
                      },  {
                        "name": "커뮤니티 웹사이트에 저장되는 정보",
                        "id": "2150151840-dol",
                        "children": [
                            {
                              "name": "아이디",
                              "id": "2150146780-1",
                              "data": {
                                "$color": "#21ffc8"
                              }
                            }, {
                              "name": "비밀번호",
                              "id": "2150151840-web",
                              "data": {
                                "$color": "#21ffc8"
                              }
                            }, {
                              "name": "접속로그",
                              "id": "2150151840-3",
                              "data": {
                                "$color": "#21ffc8"
                              }
                            }, {
                              "name": "license 정보",
                              "id": "2150151840-4",
                              "data": {
                                "$color": "#21ffc8"
                              }
                            }, {
                              "name": "GPS 위치정보",
                              "id": "2150151840-5",
                              "data": {
                                "$color": "#21ffc8"
                              }
                              
                            }
                        ],
                        "data": {
                          "$color": "#21ff59"
                        }
                      },  {
                        "name": "본인확인 절차에 필요한 개인정보",
                        "id": "2150177860-gtk-doc",
                        "children": [
                          {
                            "name": "인증서",
                            "id": "2150176980-html",
                      
                            "data": {
                              "$color": "#21ffc8"
                            }
                          },{
                            "name": "보안토큰",
                            "id": "2150176980-gtk",
                      
                            "data": {
                              "$color": "#21ffc8"
                            }
                          }

                        ],
                        "data": {
                          "$color": "#21ff59"
                        }
                      }
                  ],
                  "data": {
                    "$color": "#59ff21"
                  }
                },
              
                {
                  "name": "환자 (엔드유저) 정보",
                  "id": "2150670420-lib",
                  "children": [
                      {
                        "name": "병원에서 입력되는 정보",
                        "id": "2150556780-pip",
                        "children": [
                          
                            {
                              "name": "이름",
                              "id": "2150556780-1",
                              "data": {
                                "$color": "#21ffc8"
                              }
                            }, {
                              "name": "주소",
                              "id": "2150556780-2",
                              "data": {
                                "$color": "#21ffc8"
                              }
                            }, {
                              "name": "전화번호",
                              "id": "2150556780-3",
                              "data": {
                                "$color": "#21ffc8"
                              }
                            }, {
                              "name": "정신적.신체적 증상",
                              "id": "2150556780-4",
                              "data": {
                                "$color": "#21ffc8"
                              }
                            }
                        ],
                        "data": {
                          "$color": "#21ff59"
                        }
                      },
                      {
                        "name": "검사도중에 수집되는 정보",
                        "id": "2150506480-dtest",
                        "children": [
                          
                            {
                              "name": "검사중 수집되는 정보",
                              "id": "2150146780-ll",
                              "data": {
                                "$color": "#21ffc8"
                              }
                            }, {
                              "name": "사상·신념",
                              "id": "2150146780-geeqie-1.0",
                              "data": {
                                "$color": "#21ffc8"
                              }
                            }, {
                              "name": "정치적 견해 정보",
                              "id": "2150148340-ImageMagick",
                              "data": {
                                "$color": "#21ffc8"
                              }
                            }, {
                              "name": "건강, 성생활 등에 관한 정보",
                              "id": "2150147560-git-doc",
                              "data": {
                                "$color": "#21ffc8"
                              }
                            }, {
                              "name": "가족 관계 및 유전정보",
                              "id": "2150149900-tiff-3.9.2",
                              "data": {
                                "$color": "#21ffc8"
                              }
                              
                            }
                        ],
                        "data": {
                          "$color": "#21ff59"
                        }
                      },
                       
                    
                      
                      {
                        "name": "검사 결과 보고서에 저장되는 정보",
                        "id": "2150556120-perl5",
                        "children": [
                          {
                            "name": "인지 검사 결과",
                            "id": "2150553740-site_perl",
                            "children": [
                              {
                                "name": "기억 영역",
                                "id": "2150553740-1",
                                "children": [
                                  {
                                    "name": "비언어 기억 평가 결과",
                                    "id": "2150540260-1",
                                   
                                    "data": {
                                      "$color": "#2159ff"
                                    }
                                  },
                                  {
                                    "name": "단기 청각 기억 평가 결과",
                                    "id": "2150540260-2",
                                   
                                    "data": {
                                      "$color": "#2159ff"
                                    }
                                  },
                                  {
                                    "name": "단기 시각 기억 평가 결과",
                                    "id": "2150540260-3",
                                   
                                    "data": {
                                      "$color": "#2159ff"
                                    }
                                  },
                                  {
                                    "name": "명명하기 능력 평가 결과",
                                    "id": "2150540260-4",
                                   
                                    "data": {
                                      "$color": "#2159ff"
                                    }
                                  } ,    {
                                    "name": "작업 기억과 전후 관계상 기억 결과",
                                    "id": "2150540260-5",
                                   
                                    "data": {
                                      "$color": "#2159ff"
                                    }
                                  },
                        
                                ],
                                "data": {
                                  "$color": "#21c8ff"
                                }
                              },
                              {
                                "name": "주의 영역",
                                "id": "2150553740-2",
                                "children": [
                                  {
                                    "name": "분할주의 평가 결과",
                                    "id": "2150540260-11",
                             
                                    "data": {
                                      "$color": "#2159ff"
                                    }
                                  },
                                  {
                                    "name": "초점 평가 결과",
                                    "id": "2150553740-22",
                             
                                    "data": {
                                      "$color": "#2159ff"
                                    }
                                  },
                                  {
                                    "name": "억제 및 갱신 평가 결과",
                                    "id": "2150553740-33",
                             
                                    "data": {
                                      "$color": "#2159ff"
                                    }
                                  }
                                ],
                                "data": {
                                  "$color": "#21c8ff"
                                }
                              },
                              {
                                "name": "지각 영역",
                                "id": "2150553740-3",
                                "children": [
                                  {
                                    "name": "공각 지각 평가 결과",
                                    "id": "215054026-11",
                             
                                    "data": {
                                      "$color": "#2159ff"
                                    }
                                  },
                                  {
                                    "name": "시각 주사 평가 결과",
                                    "id": "215055374-22",
                             
                                    "data": {
                                      "$color": "#2159ff"
                                    }
                                  },
                                  {
                                    "name": "시각적 지각 및 추정 평가 결과",
                                    "id": "215055374-33",
                             
                                    "data": {
                                      "$color": "#2159ff"
                                    }
                                  }
                                ],
                                "data": {
                                  "$color": "#21c8ff"
                                }
                              },
                              {
                                "name": "협응 영역",
                                "id": "2150553740-4",
                                "children": [
                                  {
                                    "name": "눈-손 협응력 및 응답시간 결과",
                                    "id": "21505402-11",
                             
                                    "data": {
                                      "$color": "#2159ff"
                                    }
                                  },
                             
                               
                                ],
                                "data": {
                                  "$color": "#21c8ff"
                                }
                              },
                              {
                                "name": "추론 영역",
                                "id": "2150553740-5",
                                "children": [
                                  {
                                    "name": "처리 속도 결과",
                                    "id": "2150540-11",
                             
                                    "data": {
                                      "$color": "#2159ff"
                                    }
                                  },
                                  {
                                    "name": "계획 및 재맥락화 평가 결과",
                                    "id": "2150553-22",
                             
                                    "data": {
                                      "$color": "#2159ff"
                                    }
                                  }
                                  
                                ],
                                "data": {
                                  "$color": "#21c8ff"
                                }
                              }
                            ],
                            "data": {
                              "$color": "#21ffc8"
                            }
                          },
                          {
                            "name": "로샤 검사 결과",
                            "id": "2150553740-site_perl2",
                            "children": [
                              {
                                "name": "작업 기억 평가 결과",
                                "id": "2150544560-5.10.0",
                                "children": [
                                  {
                                    "name": "darwin-thread-multi-2level",
                                    "id": "2150540260-darwin-thread-multi-2level",
                                    "children": [
                                      {
                                        "name": "auto",
                                        "id": "2150535500-auto",
                                        "children": [
                                          {
                                            "name": "Git",
                                            "id": "2150531160-Git",
                                            "data": {
                                              "$color": "#c821ff"
                                            }
                                          }
                                        ],
                                        "data": {
                                          "$color": "#5921ff"
                                        }
                                      }
                                    ],
                                    "data": {
                                      "$color": "#2159ff"
                                    }
                                  }
                                ],
                                "data": {
                                  "$color": "#21c8ff"
                                }
                              }
                            ],
                            "data": {
                              "$color": "#21ffc8"
                            }
                          },

                          {
                            "name": "웩슬러 지능 검사",
                            "id": "2150553740-site_taskam",
                            "children": [
                              {
                                "name": "언어 이해",
                                "id": "2150544560-5.0",
                                "children": [
                                  {
                                    "name": "기본지식",
                                    "id": "2150540260-darwin-thread-multi1evel",
                                    "children": [
                                      {
                                        "name": "",
                                        "id": "2150535500-auto",
                                        "children": [
                                          {
                                            "name": "Git",
                                            "id": "2150531160-Git",
                                            "data": {
                                              "$color": "#c821ff"
                                            }
                                          }
                                        ],
                                        "data": {
                                          "$color": "#2159ff"
                                        }
                                      }
                                    ],
                                    "data": {
                                      "$color": "#2159ff"
                                    }
                                  },   {
                                    "name": "숫자외우기",
                                    "id": "2150540260-darwin-thread-multi-3level",
                                    "children": [
                                      {
                                        "name": "",
                                        "id": "2150535500-auto",
                                    
                                        "data": {
                                          "$color": "#2159ff"
                                        }
                                      }
                                    ],
                                    "data": {
                                      "$color": "#2159ff"
                                    }
                                  }, {
                                    "name": "어휘이해",
                                    "id": "2150540260-darwin-thread-multi-4level",
                                    "children": [
                                      {
                                        "name": "",
                                        "id": "2150535500-auto",
                                    
                                        "data": {
                                          "$color": "#2159ff"
                                        }
                                      }
                                    ],
                                    "data": {
                                      "$color": "#2159ff"
                                    }
                                  },
                                       {
                                    "name": "지각추론",
                                    "id": "2150540260-darwin-thread-multi-2level",
                                    "children": [
                                      {
                                        "name": "auto",
                                        "id": "2150535500-auto",
                                        "children": [
                                          {
                                            "name": "Git",
                                            "id": "2150531160-Git",
                                            "data": {
                                              "$color": "#c821ff"
                                            }
                                          }
                                        ],
                                        "data": {
                                          "$color": "#5921ff"
                                        }
                                      }
                                    ],
                                    "data": {
                                      "$color": "#2159ff"
                                    }
                                  }
                                ],
                                "data": {
                                  "$color": "#21c8ff"
                                }
                              } ,{
                                "name": "작업 기억",
                                "id": "2150540260-darwin-thread-multi-2",
                                "children": [
                                  {
                                    "name": "auto",
                                    "id": "2150535500-auto",
                                    "children": [
                                      {
                                        "name": "Git",
                                        "id": "2150531160-Git",
                                        "data": {
                                          "$color": "#c821ff"
                                        }
                                      }
                                    ],
                                    "data": {
                                      "$color": "#21c8ff"
                                    }
                                  }
                                ],
                                "data": {
                                  "$color": "#21c8ff"
                                }
                              },   {
                                "name": "처리 속도",
                                "id": "2150540260-darwin-thread-multi-3",
                                "children": [
                                  {
                                    "name": "auto",
                                    "id": "2150535500-auto",
                                    "children": [
                                      {
                                        "name": "Git",
                                        "id": "2150531160-Git",
                                        "data": {
                                          "$color": "#c821ff"
                                        }
                                      }
                                    ],
                                    "data": {
                                      "$color": "#21c8ff"
                                    }
                                  }
                                ],
                                "data": {
                                  "$color": "#21c8ff"
                                }
                              }
                            ],
                            "data": {
                              "$color": "#21ffc8"
                            }
                          }
                        ],
                        "data": {
                          "$color": "#21ff59"
                        }
                      }
                      
          
                     
                     
                  
                  ],
                  "data": {
                    "$color": "#59ff21"
                  }
                },
               
             
              
                {
                  "name": "빅데이터 도입시 가명화될 개인정보",
                  "id": "2150411540-etc",
                  "children": [
                      {
                        "name": "식별자(Identifiers) ",
                        "id": "21504103-pana",
                   
                            "children": [
                              
                                {
                                  "name": "고유식별정보(주민등록번호, 여권번호, 운전면허번호 등) ",
                                  "id": "2150410-1",
                                  "data": {
                                    "$color": "#21ffc8"
                                  }
                                }, {
                                  "name": "성명",
                                  "id": "2150556-2",
                                  "data": {
                                    "$color": "#21ffc8"
                                  }
                                }, {
                                  "name": "전화번호",
                                  "id": "2150556-3",
                                  "data": {
                                    "$color": "#21ffc8"
                                  }
                                }, {
                                  "name": "상세주소",
                                  "id": "2150556-4",
                                  "data": {
                                    "$color": "#21ffc8"
                                  }
                                }
                                ,{
                                  "name": "계좌 및 신용카드 번호",
                                  "id": "2150556-5",
                                  "data": {
                                    "$color": "#21ffc8"
                                  }
                                }
                                  ,{
                                    "name": "의료기록번호",
                                    "id": "2150556-6",
                                    "data": {
                                      "$color": "#21ffc8"
                                    }
                                  }
                                      
                                  ,{
                                    "name": "자동차 및 각종 기기의 등록 번호",
                                    "id": "2150556-7",
                                    "data": {
                                      "$color": "#21ffc8"
                                    }
                                }
                            ],
                        "data": {
                          "$color": "#21ff59"
                        }
                      }, {
                        "name": "속성자 (Attribute Value)",
                        "id": "2150407380-bash_completion.d",
                        "children": [
                              
                          {
                            "name": "개인 특성",
                            "id": "21504103-panga",
                            "children": [
                              {
                                "name": "성별, 연령(나이), 국적, 고향",
                                "id": "2150535-1",
                                "children": [
                                  {
                                    "name": "Git",
                                    "id": "2150531160-Git",
                                    "data": {
                                      "$color": "#21c8ff"
                                    }
                                  }
                                ],
                                "data": {
                                  "$color": "#21c8ff"
                                }
                              },
                              {
                                "name": "흡연/음주여부, 채식여부, 관심사항 등",
                                "id": "2150535-2",
                                "children": [
                                  {
                                    "name": "Git",
                                    "id": "2150531160-Git",
                                    "data": {
                                      "$color": "#21c8ff"
                                    }
                                  }
                                ],
                                "data": {
                                  "$color": "#21c8ff"
                                }
                              },
                              {
                                "name": "우편번호, 결혼여부, 종교, 취미, 동호회, 클럽",
                                "id": "2150535-3",
                          
                                "data": {
                                  "$color": "#21c8ff"
                                }
                              }
                            ],
                            "data": {
                              "$color": "#21ffc8"
                            }
                          },
                          {
                            "name": "신체특성",
                            "id": "21505-1",
                            "children": [
                              {
                                "name": "혈핵형, 신장, 몸무게, 허리둘레, 혈압, 눈동자 색 등",
                                "id": "215053-1",
                                "children": [
                                  {
                                    "name": "Git",
                                    "id": "2150531160-Git",
                                    "data": {
                                      "$color": "#21c8ff"
                                    }
                                  }
                                ],
                                "data": {
                                  "$color": "#21c8ff"
                                }
                              },
                              {
                                "name": "신체검사 결과, 장애유형, 장애등급 등",
                                "id": "215053-2",
                                "children": [
                                  {
                                    "name": "Git",
                                    "id": "2150531160-Git",
                                    "data": {
                                      "$color": "#21c8ff"
                                    }
                                  }
                                ],
                                "data": {
                                  "$color": "#21c8ff"
                                }
                              },
                              {
                                "name": "병명, 상병코드, 투약코드, 진료내역 등",
                                "id": "215053-3",
                                "children": [
                                  {
                                    "name": "Git",
                                    "id": "2150531160-Git",
                                    "data": {
                                      "$color": "#21c8ff"
                                    }
                                  }
                                ],
                                "data": {
                                  "$color": "#21c8ff"
                                }
                              }
                            ],
                            "data": {
                              "$color": "#21ffc8"
                            }
                          }, {
                            "name": "신용 특성",
                            "id": "2150510-1",
                            "children": [
                              {
                                "name": "세금 납부액, 신용등급, 기부금 등",
                                "id": "215051-1",
                                "children": [
                                  {
                                    "name": "Git",
                                    "id": "2150531160-Git",
                                    "data": {
                                      "$color": "#21c8ff"
                                    }
                                  }
                                ],
                                "data": {
                                  "$color": "#21c8ff"
                                }
                              },
                              {
                                "name": "건강보험료 납부액, 소득분위, 의료 급여자 등",
                                "id": "215051-2",
                                "children": [
                                  {
                                    "name": "Git",
                                    "id": "2150531160-Git",
                                    "data": {
                                      "$color": "#21c8ff"
                                    }
                                  }
                                ],
                                "data": {
                                  "$color": "#21c8ff"
                                }
                              },
                        
                            ],
                            "data": {
                              "$color": "#21ffc8"
                            }
                          }, {
                            "name": "경력 특성",
                            "id": "215056-4",
                            "children": [
                              {
                                "name": "학교명, 학과명, 학년, 성적, 학력 등",
                                "id": "215052-1",
                                "children": [
                                  {
                                    "name": "Git",
                                    "id": "2150531160-Git",
                                    "data": {
                                      "$color": "#21c8ff"
                                    }
                                  }
                                ],
                                "data": {
                                  "$color": "#21c8ff"
                                }
                              },
                              {
                                "name": "경력, 직업, 직종, 직장명, 부서명, 직급, 전직장명 등",
                                "id": "215052-2",
                                "children": [
                                  {
                                    "name": "Git",
                                    "id": "2150531160-Git",
                                    "data": {
                                      "$color": "#21c8ff"
                                    }
                                  }
                                ],
                                "data": {
                                  "$color": "#21c8ff"
                                }
                              },
                        
                            ],
                            "data": {
                              "$color": "#21ffc8"
                            }
                          }
                          
                            ,{
                              "name": "전자적 특성",
                              "id": "215056-5",

                              "children": [
                                {
                                  "name": "쿠키정보, 접속 일시, 방문일시, 서비스 이용 기록, 접속로그 등",
                                  "id": "2150534-1",
                                  "children": [
                                    {
                                      "name": "Git",
                                      "id": "2150531160-Git",
                                      "data": {
                                        "$color": "#21c8ff"
                                      }
                                    }
                                  ],
                                  "data": {
                                    "$color": "#21c8ff"
                                  }
                                },
                                {
                                  "name": "인터넷 접속기록, 휴대전화 사용 기록, GPS데이터 등",
                                  "id": "215054-2",
                                  "children": [
                                    {
                                      "name": "Git",
                                      "id": "2150531160-Git",
                                      "data": {
                                        "$color": "#21c8ff"
                                      }
                                    }
                                  ],
                                  "data": {
                                    "$color": "#21c8ff"
                                  }
                                },
                          
                              ],
                              "data": {
                                "$color": "#21ffc8"
                              }
                            }
                                
                            ,{
                              "name": "가족 특성",
                              "id": "215056-6",
                              "children": [
                                {
                                  "name": "배우자 자녀 부머 형제 등 가족 정보, 법정대리인 정보 등",
                                  "id": "2150536-9",
                                  "children": [
                                    {
                                      "name": "Git",
                                      "id": "215053116-Git",
                                      "data": {
                                        "$color": "#21c8ff"
                                      }
                                    }
                                  ],
                                  "data": {
                                    "$color": "#21c8ff"
                                  }
                                }
                              
                          
                              ],
                              "data": {
                                "$color": "#21ffc8"
                              }
                          }
                          
                        ],
                      
                        "data": {
                          "$color": "#21ff59"
                        }
                      }
                  ],
                  "data": {
                    "$color": "#59ff21"
                  }
                },
                
            ],
            "data": {
              "$color": "#c8ff21"
            }
          
        
      
   
  };
  // end
  // init Icicle
  icicle = new $jit.Icicle({
    // id of the visualization container
    injectInto: 'infovis',
    // whether to add transition animations
    animate: animate,
    // nodes offset
    offset: 1,
    // whether to add cushion type nodes
    cushion: false,
    // do not show all levels at once
    constrained: true,
    levelsToShow: 4,
    // enable tips
    Tips: {
      enable: true,
      type: 'Native',
      // add positioning offsets
      offsetX: 20,
      offsetY: 20,
      // implement the onShow method to
      // add content to the tooltip when a node
      // is hovered
      onShow: function(tip, node){
        // count children
        var count = 0;
        node.eachSubnode(function(){
          count++;
        });
        // add tooltip info
        tip.innerHTML = "<div class=\"tip-title\"><b>Name:</b> "
            + node.name + "</div><div class=\"tip-text\">" + count
            + " children</div>";
      }
    },
    // Add events to nodes
    Events: {
      enable: true,
      onClick: function(node){
        if (node) {
          //hide tips
          icicle.tips.hide();
          // perform the enter animation
          icicle.enter(node);
        }
      },
      onRightClick: function(){
        //hide tips
        icicle.tips.hide();
        // perform the out animation
        icicle.out();
      }
    },
    // Add canvas label styling
    Label: {
      type: labelType, // "Native" or "HTML"
      color: '#333',
      style: 'bold',
      size: 12
    },
    // Add the name of the node in the corresponding label
    // This method is called once, on label creation and only for DOM and
    // not
    // Native labels.
    onCreateLabel: function(domElement, node){
      domElement.innerHTML = node.name;
      var style = domElement.style;
      style.fontSize = '0.9em';
      style.display = '';
      style.cursor = 'pointer';
      style.color = '#333';
      style.overflow = 'hidden';
    },
    // Change some label dom properties.
    // This method is called each time a label is plotted.
    onPlaceLabel: function(domElement, node){
      var style = domElement.style, width = node.getData('width'), height = node
          .getData('height');
      if (width < 7 || height < 7) {
        style.display = 'none';
      } else {
        style.display = '';
        style.width = width + 'px';
        style.height = height + 'px';
      }
    }
  });
  // load data
  icicle.loadJSON(json);
  // compute positions and plot
  icicle.refresh();
  //end
}

//init controls
function controls() {
  var jit = $jit;
  var gotoparent = jit.id('update');
  jit.util.addEvent(gotoparent, 'click', function() {
    icicle.out();
  });
  var select = jit.id('s-orientation');
  jit.util.addEvent(select, 'change', function () {
    icicle.layout.orientation = select[select.selectedIndex].value;
    icicle.refresh();
  });
  var levelsToShowSelect = jit.id('i-levels-to-show');
  jit.util.addEvent(levelsToShowSelect, 'change', function () {
    var index = levelsToShowSelect.selectedIndex;
    if(index == 0) {
      icicle.config.constrained = false;
    } else {
      icicle.config.constrained = true;
      icicle.config.levelsToShow = index;
    }
    icicle.refresh();
  });
}
//end
