class CuentaBancaria {
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
        this.itf=0;
    }


    depositar() {
        let monto=parseInt(document.getElementById('monto').value);
        this.saldo += monto;

        document.getElementById('resultado').innerHTML = '';
        document.getElementById('resultado').innerHTML += `<br>Se han depositado: ${monto}.`;
        document.getElementById('resultado').innerHTML += `<br>Nuevo saldo: ${this.saldo}.`;
        this.itf=this.itf+(monto*0.00005);
    }

    retirar() {
       let monto=parseInt(document.getElementById('monto').value);
        if (monto <= this.saldo) {
            this.saldo-=monto;
            document.getElementById('resultado').innerHTML = '';
        document.getElementById('resultado').innerHTML += `<br>Se han retirado: ${monto}.`;
        document.getElementById('resultado').innerHTML += `<br>Nuevo saldo: ${this.saldo}.`;
        this.itf=this.itf+(monto*0.00005);
        } else{
            document.getElementById('resultado').innerHTML = '';
        document.getElementById('resultado').innerHTML += `<br>Fondo insufisientes.`;
        }
    }

    verSaldo(){
        document.getElementById('resultado').innerHTML = '';
        document.getElementById('resultado').innerHTML += `<br>Saldo actual de ${this.titular}: $${this.saldo}`;

    }

    verItf(){
        document.getElementById('resultado').innerHTML = '';
        document.getElementById('resultado').innerHTML += `<br>Los de banco te robaron: $${this.itf}`;
        
    }
}
    const cuenta= new CuentaBancaria('Kevin',0);


