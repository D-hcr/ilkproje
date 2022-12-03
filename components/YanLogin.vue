<template>
    
    <div>
                <span id="sp" style="font-size:30px;cursor:pointer" >
                  <a id="svg" href="#"  title="User Icon" class="icon-user" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    Üye Girişi          
                      <svg viewBox="0 0 32 32" width="23px" height="23px">
                        <path d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 
                        8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 
                        22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 16 8 C 13.25 8 11 10.25 11 13 C 11 14.515625 11.707031 15.863281 12.78125
                        16.78125 C 10.53125 17.949219 9 20.300781 9 23 L 11 23 C 11 20.226563 13.226563 18 16 18 C 18.773438 18 21 20.226563 21 
                        23 L 23 23 C 23 20.300781 21.46875 17.949219 19.21875 16.78125 C 20.292969 15.863281 21 14.515625 21 13 C 21 10.25 18.75 
                        8 16 8 Z M 16 10 C 17.667969 10 19 11.332031 19 13 C 19 14.667969 17.667969 16 16 16 C 14.332031 16 13 14.667969 13 13 C 
                        13 11.332031 14.332031 10 16 10 Z">
                        </path>
                      </svg>         
                  </a>              
                </span>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                  <div class="offcanvas-header">
                     <h5  class="offcanvas-title" id="offcanvasRightLabel">Oturum Aç</h5>
                     <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                   <div class="offcanvas-body">
                    <div class="ct-login">
                  <div class="form-group">
                    <label id="emaillabel" for="customer_email">
                      <span id="ep">
                        E-posta
                      </span>
                      <em id="yıldız1">*</em>
                    </label>
                    <input id="email" class="form-control" type="email" value="" name="customer[email]" placeholder="E-posta">
                  </div>
                  <div id="f2g" class="form-group">
                    <label for="customer_password">
                      <span >
                        Şifre
                      </span>
                      <em id="yıldız">*</em>
                    </label>
                    <input id="pswi" class="form-control" type="password" value="" placeholder="Şifre" name="customer[password]">
                  </div>
                    <div id="login" class="action-btn">
                      <input id="üyeg" type="submit" class="btn btn-login" value="Üye Girişi">
                        <a id="pswun" class="text-hover forgot-password" href="#">
                          Şifremi Unuttum
                        </a>
                    </div>
                    <div class="ct-register">
                      <a id="üyeol" href="#" class="btn btn-register">
                        Üye Olun
                      </a>
                    </div>
                  </div> 
                  </div>
                </div>
              </div>
              
</template>