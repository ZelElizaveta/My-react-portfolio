import { useForm } from "react-hook-form";
import { Checkbox } from '@mui/material';
import { pink } from '@mui/material/colors';
import React, { useRef } from 'react';
import emailjs, { init } from "@emailjs/browser";
import Swal from 'sweetalert2';
import Logo from '../../IMG/logo/color_logo_transparent.png';
import './ContactForm.css';
import { Link } from "react-router-dom";

const ContactForm = () => {

    const label = { inputProps: {} };

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    });

    init('nH8Xn0XkM8k0j5u95cqVp');
    const form = useRef();

    const onSubmit = (data) => {
        emailjs.sendForm("service_ul2e2aa", "template_3vly7wl", form.current, "u-8-oISB2ANmxZFG8").then(
          (data) => {
            Swal.fire(
                {   title: 'Ваше сообщение отправлено!',
                    imageUrl: `${Logo}`,
                    imageHeight: 200,
                    imageAlt: 'A tall image'
                }
            )
          },
          (error) => {
            Swal.fire({
                icon: 'error',
                title: 'Кажется что-то пошло не так',
                text: 'Всегда жду вас в соц.сетях',
            })
            console.log(error.text);
          }
        );
        reset();
      };

    return (
        <>
            <h1 className="heading-contact">Давайте общаться</h1>
            <form 
                ref={form}
                className="contact-form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="name">
                    <input  placeholder="Имя" {...register('firstName', 
                                {
                                    required: 'Пожалуйста введите ваше имя',
                                    minLength: {
                                        value: 2,
                                        message: 'Имя должно содержать не менее двух символов'
                                    },
                                    pattern: {
                                        value: /[А-Яа-я]/,
                                        message: 'Только русские буквы' 
                                    }
                                })
                            }/>
                    <label htmlFor="firstName" className="firstName">{errors?.firstName && <p>{errors?.firstName?.message || 'Что-то пошло не так'}</p>}</label> 

                    <input   placeholder="Фамилия" {...register('lastName', 
                                {
                                    required: 'Пожалуйста введите вашу фамилию',
                                    minLength: {
                                        value: 3,
                                        message: 'Фамилия не должна содержать менее трех символов'
                                    },
                                    pattern: {
                                        value: /[А-Яа-я]/,
                                        message: 'Только русские буквы' 
                                    }
                                })
                            }
                    />
                    <label htmlFor="lastName" className="lastName">{errors?.lastName && <p>{errors?.lastName?.message || 'Что-то пошло не так'}</p>}</label>
                </div>
                <input 
                    type="email" 
                    className="email" 
                    placeholder="email"
                    {...register('email', 
                        {
                            required: 'Пожалуйста введите ваш email',
                            pattern: {
                                value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/i,
                                message: 'Не корректный email' 
                            }
                        })
                    }
                />
                <label htmlFor="email" className="label-email">{errors?.email && <p>{errors?.email?.message || 'Что-то пошло не так'}</p>}</label>
                
                <textarea name="message" placeholder="Сообщение" className="message" {...register('message')}></textarea>

                <div className="check-box">
                    <Checkbox
                        {...register('checkBox', {required: 'Это поле является обязательным'})}
                        {...label}
                        defaultChecked
                        sx={{
                        color: pink[800],
                        '&.Mui-checked': {
                            color: pink[600],
                        },
                        }}
                    />
                    <p>я согласен на обработку <Link to='/privacy'>персональных данных</Link></p>
                </div>

                <label htmlFor="checkBox" className="checkBox">{errors?.checkBox && <p>{errors?.checkBox?.message || 'Что-то пошло не так'}</p>}</label>

                <button type="submit" className="btn contact-btn">Отправить</button>
            </form>
        </>
    )

}

export default ContactForm;
