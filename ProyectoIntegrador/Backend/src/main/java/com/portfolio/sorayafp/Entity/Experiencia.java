
package com.portfolio.sorayafp.Entity;



import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;



@Entity
@Getter @Setter


@Table(name="Experiencia")
public class Experiencia implements Serializable  {

@Id
@GeneratedValue (strategy = GenerationType.IDENTITY)
private int idExp;
private String nombreExp ;
private String lugarExp;
private String fechaExp;
private String descripcionExp;


    public Experiencia(String nombreExp, String lugarExp, String fechaExp, String descripcionExp) {
       
        this.nombreExp = nombreExp;
        this.lugarExp = lugarExp;
        this.fechaExp = fechaExp;
        this.descripcionExp = descripcionExp;
    }

    public Experiencia() {
    }

}

    

   







