import styled from 'styled-components';

const SearchStyled = styled.div`
  .anyclip-search-wrapper {
    display: flex !important;
    background-color: #fff !important;
    padding: 10px 20px !important;
    height: 52px !important;
    border: 2px solid #000 !important;
    border-radius: 10px !important;
    position: relative; !important;
    
    .anyclip-search-wrapper__spinner {
      position: absolute !important;
      right: 30px !important;
      top: 14px !important;
    }
    
    img {
      margin: 0 !important;
    }
    
    input {
      flex: 1 1 auto !important;
      box-sizing: border-box !important;
      color: #808080 !important;
      font-size: 14px !important;
      line-height: normal !important;
      width: 100% !important;
      height: 100% !important;
      margin-left: 14px !important;
      padding: 0 10px !important;
      border-radius: 8px !important;
      outline: none !important;
      -webkit-appearance: none !important;
      border: 2px solid #000 !important;
      &::placeholder {
        color: #808080 !important;
        font-size: 14px !important;
      }
    }
  }

  .anyclip-search-suggest {
    background-color: #fff !important;
    position: absolute !important;
    z-index: 100000 !important;
    top: 55px !important;
    left: 0 !important;
    right: 0 !important;
    border: 2px solid #000 !important;
    max-height: 400px !important;
    overflow-y: auto !important;
    overflow-x: hidden !important;
    
    .searchresultsnumber {
      font-size: 13px;
      color: #808080;
      margin: 10px 20px;
      padding: 0;
    }
    
    .anyclip-search-suggest__results {
      display: flex !important;
      .anyclip-search-suggest__left {
        margin-right: 30px !important;
        width: 45% !important;
        .anyclip-search-suggest__text {
          display: block !important;
          margin-left: 20px !important;
          text-decoration: none !important;
          max-width: 600px !important;
          h2 {
            font-size: 19px !important;
            line-height: 18px !important;
            font-weight: normal !important;
            color: rgb(29, 1, 189) !important;
            margin-bottom: 0px !important;
            margin-top: 20px !important;
          }

          a.title {
            font-size: 14px !important;
            line-height: 14px !important;
            color: green !important;
            margin-bottom: 0px !important;
            text-decoration: underline !important;
          }

          button {
            font-size: 10px !important;
            line-height: 14px !important;
            color: green !important;
            margin-bottom: 0px !important;
            padding: 0px !important;
            border-width: 0px !important;
            background-color: white !important;
          }

          p {
            font-size: 13px !important;
            margin-top: 0px !important;
            color: #525252 !important;
          }
          
          &:hover {
            h2 {
              text-decoration: underline !important;
            }
          }
        }
      }
      
      .anyclip-search-suggest__right {
        width: 50% !important;
        .anyclip-search-suggest__videos {
          margin-top: 15px !important;
          .anyclip-search-suggest__videos-category {
            h3 {
              margin: 10px 0 !important;
              color: #7d270c !important;
              font-size: 16px !important;
              line-height: 1.3 !important;
            }
          }
          .anyclip-search-suggest__videos-list {
            display: flex !important;
            flex-wrap: wrap !important;
            .anyclip-search-suggest__video {
              display: block !important;
              width: 190px !important;
              height: 100px !important;
              margin-right: 10px !important;
              margin-bottom: 60px !important;
              cursor: pointer !important;
              position: relative !important;
              text-decoration: none !important;
              .anyclip-search-suggest__video-img {
                width: 100% !important;
                height: 100% !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                position: relative !important;
                border-radius: 10px !important;
                overflow: hidden !important;
                img {
                  display: block !important;
                  max-width: 100% !important;
                  max-height: 100% !important;
                  width: 100% !important;
                  height: 100% !important;
                  object-fit: cover !important;
                }
                .anyclip-search-suggest__video-tags {
                  position: absolute !important;
                  display: none !important;
                }
                
                &:hover {
                  .anyclip-search-suggest__video-tags {
                    display: block !important;
                  }
                }
              }

              h3 {
                margin: 0 !important;
                padding: 0 !important;
                font-size: 12px !important;
                color: black !important;
                line-height: 1.3 !important;
                text-decoration: underline !important;
              }
              
              &:hover {
                h3 {
                  text-decoration: none;
                }
              } 
            } 
          }
        }
      }

      .anyclip-search-suggest__video-tags {
        bottom: 0 !important;
        left: 0 !important;
        right: 0 !important;
        background-color: #00000014 !important;
        padding: 5px !important;
        a {
          display: inline-block !important;
          border-radius: 5px !important;
          padding: 2px 11px !important;
          font-size: 10px !important;
          text-decoration: none !important;
          font-weight: bold !important;
          color: #fff !important;
          margin: 2px 2px !important;
          text-transform: uppercase !important;

          &.color-1 {
            background-color: #5475e6 !important;
          }

          &.color-2 {
            background-color: #1b8000 !important;
          }

          &.color-3 {
            background-color: #69adea !important;
          }

          //&:hover {
          //  box-shadow: 0px 0px 8px 2px #000000bd !important;
          //}
        }
      }
    }
  }
`;

export default SearchStyled;
