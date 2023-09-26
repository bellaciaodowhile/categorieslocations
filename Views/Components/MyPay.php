<div class="my-pay">
    <div class="content-my-pay">
        <div class="cards-pay-methods">
            <div class="title">Recarga de créditos</div>
            <div class="cursive-subtitle">¿Cuánto quieres invertir?</div>
            <div class="card-pay">
                <div class="d-flex credit-payments">
                    <div class="input-number">
                        <div class="title-input">Euros</div>
                        <div class="input-form user-data ads price">
                            <label class="txt-field">
                                <div></div>
                                <input type="number" name="price" maxLength="3" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"/>
                                <div class="currency">€</div>
                            </label>
                        </div>
                    </div>
                    <i class="arrow_forward material-icons">arrow_forward</i>
                    <div class="my-credits-pay">
                        <div class="title">Créditos</div>
                        <div class="count">
                            <span>0</span>
                        </div>
                    </div>
                </div>
                <div class="price-credit">
                    1 crédito cuesta <span>0,10 €</span>
                </div>
            </div>
            <div class="title payments">Elige un método de pago</div>
            <div class="cursive-subtitle">Puedes comprar créditos cómo te resulte más fácil.</div>
            <div class="card-pay method">
                <div class="main-method credit">
                    <div class="d-flex">
                        <div class="ratio"></div>
                        <div class="title-method">Tarjeta de crédito</div>
                    </div>
                    <i class="material-icons">credit_card</i>
                </div>
                <div class="content-method card-payment">
                    <div class="input-simple">
                        <label for="simple">Número de tarjeta</label>
                        <input type="text" placeholder="1234 5678 9012 3456" class="input-card-credit" maxLength ="19" oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength)"; value="">
                    </div>
                    <div class="grid-2">
                        <div class="input-simple">
                            <label for="simple">Fecha de expiración</label>
                            <input type="text" class="input-exp-credit" placeholder="MM/AA" max="5" oninput="if(this.value.length > this.max) this.value = this.value.slice(0, this.max)";>
                        </div>
                        <div class="input-simple">
                            <label for="simple">CVC / CVV</label>
                            <input type="text" placeholder="123" min="0" max="3" oninput="if(this.value.length > this.max) this.value = this.value.slice(0, this.max);">
                        </div>
                    </div>
                    <div class="input-simple">
                        <label for="simple">Nombre en la tarjeta</label>
                        <input type="text" placeholder="Juan Antonio García López">
                    </div>
                </div>
            </div>

            <div class="card-pay method">
                <div class="main-method transfer">
                    <div class="d-flex">
                        <div class="ratio"></div>
                        <div class="title-method">Transferencia bancaria</div>
                    </div>
                    <i class="material-icons">account_balance</i>
                </div>
                <div class="content-method card-transfer">
                    <div class="data-transfer">
                        <div class="title-cursive">Datos para la transferencia bancaria.</div>
                        <div class="item-inline">Nombre: <span>gloobal infinity productions ltd.</span></div>
                        <div class="item-inline">Número de cuenta: <span>IE00 0000 0000 0000 0000 0000</span></div>
                        <div class="item-inline">Concepto: <span>2293310427</span></div>
                        <div class="btn-white">
                            Imprimir datos bancarios
                        </div>
                    </div>
                    <p>El importe que tú decidas teniendo en cuenta que cada crédito cuesta 0,10 € impuestos aplicables
                        incluidos.</p>
                    <p>Los créditos comprados por transferencia suelen tardar entre <strong>24 y 48 horas</strong> en
                        estar disponibles en tu cuenta.</p>
                    <p>Si han pasado más de 72 horas y sigues sin verlos, ponte en contacto con nosotros indicando el
                        importe, la fecha y la hora de la recarga <a href="#" class="color-primary-light">aquí.</a></p>

                </div>
            </div>
            <div class="card-pay method">
                <div class="main-method crypto">
                    <div class="d-flex">
                        <div class="ratio"></div>
                        <div class="title-method">Pagos digitales</span></div>
                    </div>
                    <i class="material-icons">currency_bitcoin</i>
                </div>
                <div class="content-method card-crypto">
                  <div class="btn-socials-main">
                    <div class="btn-social">
                    <img src="<?php echo BASE_URL;?>Assets/img/icons/paypal.png">
                    </div>
                    <div class="btn-social">
                    <img src="<?php echo BASE_URL;?>Assets/img/icons/stripe.png">
                    </div>
                    <div class="btn-social">
                    <img src="<?php echo BASE_URL;?>Assets/img/icons/bitcoin.png">
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <div class="summary-pay-main">
            <div class="summary-pay">
                <div class="title">Resumen de la compra</div>
                <div class="card-summary">
                    <div class="content-summary">
                        Compra de créditos <span class="credits">0</span>
                    </div>
                    <div class="content-summary">
                        Precio <span class="price">0 €</span>
                    </div>
                </div>
                <div class="total">
                    Total <span>0 €</span>
                </div>
                <div class="btn-pay-full">
                    Pagar <span></span>
                </div>
            </div>
            <div class="terms-pay">Al aceptar el pago, acepto las
                <a href="#" class="trigger-modal-simple" id="termsServices">condiciones generales del servicio.</a>
            </div>
        </div>

        <div class="modal-simple" id="termsServices">

            <div class="card-modal">
                <div class="content-modal">
                    <i class="close-modal material-icons">close</i>
                    <div class="title-normal">Condiciones generales del servicio.</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nihil cumque necessitatibus
                        commodi reiciendis placeat voluptatum quaerat sed! At ullam quaerat vero libero id molestiae
                        impedit aspernatur ea hic. Id, iusto adipisci odio hic impedit, reiciendis est ab voluptate
                        laborum consectetur labore culpa excepturi veniam! Animi at quam praesentium molestiae possimus
                        facere consequuntur accusantium alias sed repudiandae, fugit ad doloribus numquam cupiditate
                        optio totam maiores suscipit fuga dolores iste unde accusamus autem non harum. Aliquam deleniti
                        quo delectus maxime odit excepturi quam obcaecati, quia odio. Doloremque mollitia sint maxime,
                        aliquam sapiente doloribus iusto voluptatum fugiat magnam, dolore praesentium blanditiis quia
                        eos, hic animi minus suscipit pariatur explicabo beatae vitae rem enim. Deleniti dolore nulla
                        earum tenetur amet. Recusandae alias voluptate ipsam exercitationem sed iure expedita et cumque
                        totam autem qui molestias harum accusamus voluptatum voluptas nobis, repudiandae quibusdam
                        sequi, consectetur est. Facilis blanditiis saepe officiis maiores aliquam repellendus iste
                        porro, nobis ratione nesciunt? Obcaecati vero neque quas aut sit? Molestiae quidem voluptatum
                        recusandae soluta itaque tenetur excepturi inventore blanditiis architecto maxime aspernatur
                        quia consequuntur velit, molestias libero alias repellendus eos, ea odit ab deserunt! Animi,
                        totam exercitationem! Ratione, exercitationem ea? Dolorem sequi facere dolores autem nemo dolore
                        optio sit libero?</p>
                </div>
            </div>
        </div>


    </div>
</div>