import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Filter } from 'lucide-react';

const skills = [
  {
    title: 'Right-Handed ◎ (Diestro ◎)',
    en: 'Increase performance on right-handed tracks.',
    es: 'Aumenta el rendimiento en pistas con curvas hacia la derecha.',
    color: 'green',
    icon: 'botas verdes.png',
    category: 'Técnica',
    votes: 0
  },
 {
    title: 'Right-Handed ○ (Diestro ○)',
    en: 'Moderately decrease performance on right-handed tracks.',
    es: 'Disminuye moderadamente el rendimiento en pistas con curvas hacia la derecha.',
    color: 'green',
    icon: 'botas verdes.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Left-Handed ◎ (Zurdo ◎)',
    en: 'Increase performance on left-handed tracks.',
    es: 'Aumenta el rendimiento en pistas con curvas hacia la izquierda.',
    color: 'green',
    icon: 'botas verdes.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Left-Handed ○ (Zurdo ○)',
    en: 'Moderately increase performance on left-handed tracks.',
    es: 'Mejora moderadamente el rendimiento en pistas con curvas hacia la izquierda.',
    color: 'green',
    icon: 'botas verdes.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Spring Runner ◎ (Corredor de Primavera ◎)',
    en: 'Increase performance in spring.',
    es: 'Aumenta el rendimiento en la temporada de primavera.',
    color: 'green',
    icon: 'botas verdes.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Spring Runner ○ (Corredor de Primavera ○)',
    en: 'Moderately increase performance in spring.',
    es: 'Mejora moderadamente el rendimiento en primavera.',
    color: 'green',
    icon: 'botas verdes.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Summer Runner ◎ (Corredor de Verano ◎)',
    en: 'Increase performance in summer.',
    es: 'Aumenta el rendimiento en la temporada de verano.',
    color: 'green',
    icon: 'botas verdes.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Summer Runner ○ (Corredor de Verano ○)',
    en: 'Moderately increase performance in summer.',
    es: 'Mejora moderadamente el rendimiento en verano.',
    color: 'green',
    icon: 'botas verdes.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Fall Runner ◎ (Corredor de Otoño ◎)',
    en: 'Increase performance in fall.',
    es: 'Aumenta el rendimiento en la temporada de otoño.',
    color: 'green',
    icon: 'botas verdes.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Fall Runner ○ (Corredor de Otoño ○)',
    en: 'Moderately increase performance in fall.',
    es: 'Mejora moderadamente el rendimiento en otoño.',
    color: 'green',
    icon: 'botas verdes.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Winter Runner ◎ (Corredor de Invierno ◎)',
    en: 'Increase performance in winter.',
    es: 'Aumenta el rendimiento en la temporada de invierno.',
    color: 'green',
    icon: 'botas verdes.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Winter Runner ○ (Corredor de Invierno ○)',
    en: 'Moderately increase performance in winter.',
    es: 'Mejora moderadamente el rendimiento en invierno.',
    color: 'green',
    icon: 'botas verdes.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Outer Post Proficiency ◎ (Dominio de Carril Exterior ◎)',
    en: 'Increase performance in brackets 6–8.',
    es: 'Aumenta el rendimiento cuando corres desde los puestos exteriores (6 al 8).',
    color: 'green',
    icon: 'botas verdes.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Outer Post Proficiency ○ (Dominio de Carril Exterior ○)',
    en: 'Moderately increase performance in brackets 6–8.',
    es: 'Mejora moderadamente el rendimiento desde los puestos exteriores (6 al 8).',
    color: 'green',
    icon: 'botas verdes.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Maverick ◎ (Solitario ◎)',
    en: 'Increase performance when no other runners are using the same strategy.',
    es: 'Aumenta el rendimiento cuando ningún otro corredor usa la misma estrategia.',
    color: 'green',
    icon: 'botas verdes.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Maverick ○ (Solitario ○)',
    en: 'Moderately increase performance when no other runners are using the same strategy.',
    es: 'Mejora moderadamente el rendimiento cuando ningún otro corredor usa la misma estrategia.',
    color: 'green',
    icon: 'botas verdes.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Long Shot ◎ (Apuesta Alta ◎)',
    en: 'Increase performance when 4th favorite or below.',
    es: 'Aumenta el rendimiento si eres el 4.º favorito o inferior.',
    color: 'green',
    icon: 'botas verdes.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Long Shot ○ (Apuesta Alta ○)',
    en: 'Moderately increase performance when 4th favorite or below.',
    es: 'Mejora moderadamente el rendimiento si eres el 4.º favorito o inferior.',
    color: 'green',
    icon: 'botas verdes.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Sympathy ○ (Simpatía ○)',
    en: 'Moderately increase performance when many runners share a sympathetic heart.',
    es: 'Mejora moderadamente el rendimiento cuando muchas corredoras comparten un corazón empático.',
    color: 'green',
    icon: 'botas verdes.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Lone Wolf ○ (Lobo Solitario ○)',
    en: 'Moderately increase performance when no other runners have the heart of a lone wolf.',
    es: 'Mejora moderadamente el rendimiento si ninguna otra corredora tiene la habilidad de lobo solitario.',
    color: 'green',
    icon: 'botas verdes.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Unchanging (Ambición Inmutable)',
    en: 'Greatly increase performance with the same ambition of days past.',
    es: 'Aumenta significativamente el rendimiento si tienes la misma ambición de antes.',
    color: 'green',
    icon: 'botas verdes doradas.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Right-Handed × (Diestro ×)',
    en: 'Moderately decrease performance on right-handed tracks.',
    es: 'Disminuye moderadamente el rendimiento en pistas con curvas hacia la derecha.',
    color: 'purple',
    icon: 'botas moradas.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Left-Handed × (Zurdo ×)',
    en: 'Moderately decrease performance on left-handed tracks.',
    es: 'Disminuye moderadamente el rendimiento en pistas con curvas hacia la izquierda.',
    color: 'purple',
    icon: 'botas moradas.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Spring Runner × (Corredor de Primavera ×)',
    en: 'Moderately decrease performance in spring.',
    es: 'Disminuye moderadamente el rendimiento durante la primavera.',
    color: 'purple',
    icon: 'botas moradas.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Summer Runner × (Corredor de Verano ×)',
    en: 'Moderately decrease performance in summer.',
    es: 'Disminuye moderadamente el rendimiento durante el verano.',
    color: 'purple',
    icon: 'botas moradas.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Fall Runner × (Corredor de Otoño ×)',
    en: 'Moderately decrease performance in fall.',
    es: 'Disminuye moderadamente el rendimiento durante el otoño.',
    color: 'purple',
    icon: 'botas moradas.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Winter Runner × (Corredor de Invierno ×)',
    en: 'Moderately decrease performance in winter.',
    es: 'Disminuye moderadamente el rendimiento durante el invierno.',
    color: 'purple',
    icon: 'botas moradas.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Outer Post Averseness (Incomodidad en Carril Exterior)',
    en: 'Moderately decrease performance in brackets 6–8.',
    es: 'Disminuye moderadamente el rendimiento cuando partes desde los puestos 6 al 8.',
    color: 'purple',
    icon: 'botas moradas.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'G1 Averseness (Aversión a G1)',
    en: 'Moderately decrease performance in G1 or otherwise important races.',
    es: 'Disminuye moderadamente el rendimiento en carreras de clase G1 u otras importantes.',
    color: 'purple',
    icon: 'botas moradas.png',
    category: 'Técnica',
    votes: 0
  },
 {
    title: 'Tokyo Racecourse ◎ (Hipódromo de Tokio ◎)',
    en: 'Increase performance at Tokyo Racecourse.',
    es: 'Aumenta el rendimiento en el Hipódromo de Tokio.',
    color: 'green',
    icon: 'corazón verde.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Tokyo Racecourse ○ (Hipódromo de Tokio ○)',
    en: 'Moderately increase performance at Tokyo Racecourse.',
    es: 'Aumenta moderadamente el rendimiento en el Hipódromo de Tokio.',
    color: 'green',
    icon: 'corazón verde.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Nakayama Racecourse ◎ (Hipódromo de Nakayama ◎)',
    en: 'Increase performance at Nakayama Racecourse.',
    es: 'Aumenta el rendimiento en el Hipódromo de Nakayama.',
    color: 'green',
    icon: 'corazón verde.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Nakayama Racecourse ○ (Hipódromo de Nakayama ○)',
    en: 'Moderately increase performance at Nakayama Racecourse.',
    es: 'Aumenta moderadamente el rendimiento en el Hipódromo de Nakayama.',
    color: 'green',
    icon: 'corazón verde.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Hanshin Racecourse ◎ (Hipódromo de Hanshin ◎)',
    en: 'Increase performance at Hanshin Racecourse.',
    es: 'Aumenta el rendimiento en el Hipódromo de Hanshin.',
    color: 'green',
    icon: 'corazón verde.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Hanshin Racecourse ○ (Hipódromo de Hanshin ○)',
    en: 'Moderately increase performance at Hanshin Racecourse.',
    es: 'Aumenta moderadamente el rendimiento en el Hipódromo de Hanshin.',
    color: 'green',
    icon: 'corazón verde.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Kyoto Racecourse ◎ (Hipódromo de Kioto ◎)',
    en: 'Increase performance at Kyoto Racecourse.',
    es: 'Aumenta el rendimiento en el Hipódromo de Kioto.',
    color: 'green',
    icon: 'corazón verde.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Kyoto Racecourse ○ (Hipódromo de Kioto ○)',
    en: 'Moderately increase performance at Kyoto Racecourse.',
    es: 'Aumenta moderadamente el rendimiento en el Hipódromo de Kioto.',
    color: 'green',
    icon: 'corazón verde.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Chukyo Racecourse ◎ (Hipódromo de Chukyo ◎)',
    en: 'Increase performance at Chukyo Racecourse.',
    es: 'Aumenta el rendimiento en el Hipódromo de Chukyo.',
    color: 'green',
    icon: 'corazón verde.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Chukyo Racecourse ○ (Hipódromo de Chukyo ○)',
    en: 'Moderately increase performance at Chukyo Racecourse.',
    es: 'Aumenta moderadamente el rendimiento en el Hipódromo de Chukyo.',
    color: 'green',
    icon: 'corazón verde.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Sapporo Racecourse ◎ (Hipódromo de Sapporo ◎)',
    en: 'Increase performance at Sapporo Racecourse.',
    es: 'Aumenta el rendimiento en el Hipódromo de Sapporo.',
    color: 'green',
    icon: 'corazón verde.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Sapporo Racecourse ○ (Hipódromo de Sapporo ○)',
    en: 'Moderately increase performance at Sapporo Racecourse.',
    es: 'Aumenta moderadamente el rendimiento en el Hipódromo de Sapporo.',
    color: 'green',
    icon: 'corazón verde.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Hakodate Racecourse ◎ (Hipódromo de Hakodate ◎)',
    en: 'Increase performance at Hakodate Racecourse.',
    es: 'Aumenta el rendimiento en el Hipódromo de Hakodate.',
    color: 'green',
    icon: 'corazón verde.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Hakodate Racecourse ○ (Hipódromo de Hakodate ○)',
    en: 'Moderately increase performance at Hakodate Racecourse.',
    es: 'Aumenta moderadamente el rendimiento en el Hipódromo de Hakodate.',
    color: 'green',
    icon: 'corazón verde.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Fukushima Racecourse ◎ (Hipódromo de Fukushima ◎)',
    en: 'Increase performance at Fukushima Racecourse.',
    es: 'Aumenta el rendimiento en el Hipódromo de Fukushima.',
    color: 'green',
    icon: 'corazón verde.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Fukushima Racecourse ○ (Hipódromo de Fukushima ○)',
    en: 'Moderately increase performance at Fukushima Racecourse.',
    es: 'Aumenta moderadamente el rendimiento en el Hipódromo de Fukushima.',
    color: 'green',
    icon: 'corazón verde.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Niigata Racecourse ◎ (Hipódromo de Niigata ◎)',
    en: 'Increase performance at Niigata Racecourse.',
    es: 'Aumenta el rendimiento en el Hipódromo de Niigata.',
    color: 'green',
    icon: 'corazón verde.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Niigata Racecourse ○ (Hipódromo de Niigata ○)',
    en: 'Moderately increase performance at Niigata Racecourse.',
    es: 'Aumenta moderadamente el rendimiento en el Hipódromo de Niigata.',
    color: 'green',
    icon: 'corazón verde.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Kokura Racecourse ◎ (Hipódromo de Kokura ◎)',
    en: 'Increase performance at Kokura Racecourse.',
    es: 'Aumenta el rendimiento en el Hipódromo de Kokura.',
    color: 'green',
    icon: 'corazón verde.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Kokura Racecourse ○ (Hipódromo de Kokura ○)',
    en: 'Moderately increase performance at Kokura Racecourse.',
    es: 'Aumenta moderadamente el rendimiento en el Hipódromo de Kokura.',
    color: 'green',
    icon: 'corazón verde.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Standard Distance ○ (Distancia Estándar ○)',
    en: 'Moderately increase performance over standard distances (multiples of 400m).',
    es: 'Aumenta moderadamente el rendimiento en distancias estándar (múltiplos de 400 m).',
    color: 'green',
    icon: 'corazón verde.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Non-Standard Distance ◎ (Distancia No Estándar ◎)',
    en: 'Increase performance over non-standard distances (non-multiples of 400m).',
    es: 'Aumenta el rendimiento en distancias no estándar (no múltiplos de 400 m).',
    color: 'green',
    icon: 'corazón verde.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Non-Standard Distance ○ (Distancia No Estándar ○)',
    en: 'Moderately increase performance over non-standard distances (non-multiples of 400m).',
    es: 'Aumenta moderadamente el rendimiento en distancias no estándar (no múltiplos de 400 m).',
    color: 'green',
    icon: 'corazón verde.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Oi Racecourse ○ (Hipódromo de Oi ○)',
    en: 'Moderately increase performance at Oi Racecourse.',
    es: 'Aumenta moderadamente el rendimiento en el Hipódromo de Oi.',
    color: 'green',
    icon: 'corazón verde.png',
    category: 'Técnica',
    votes: 0
  },
  {
    title: 'Unquenched Thirst (Sed Insaciable)',
    en: 'Increases performance when there is one race.',
    es: 'Aumenta el rendimiento si hay solo una carrera.',
    color: 'green',
    icon: 'corazón verde.png',
    category: 'Técnica',
    votes: 0
  },
  {
  title: 'Tokyo Racecourse × (Hipódromo de Tokio ×)',
  en: 'Moderately decrease performance at Tokyo Racecourse.',
  es: 'Disminuye moderadamente el rendimiento en el Hipódromo de Tokio.',
  color: 'purple',
  icon: 'corazón morado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Nakayama Racecourse × (Hipódromo de Nakayama ×)',
  en: 'Moderately decrease performance at Nakayama Racecourse.',
  es: 'Disminuye moderadamente el rendimiento en el Hipódromo de Nakayama.',
  color: 'purple',
  icon: 'corazón morado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Hanshin Racecourse × (Hipódromo de Hanshin ×)',
  en: 'Moderately decrease performance at Hanshin Racecourse.',
  es: 'Disminuye moderadamente el rendimiento en el Hipódromo de Hanshin.',
  color: 'purple',
  icon: 'corazón morado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Kyoto Racecourse × (Hipódromo de Kioto ×)',
  en: 'Moderately decrease performance at Kyoto Racecourse.',
  es: 'Disminuye moderadamente el rendimiento en el Hipódromo de Kioto.',
  color: 'purple',
  icon: 'corazón morado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Chukyo Racecourse × (Hipódromo de Chukyo ×)',
  en: 'Moderately decrease performance at Chukyo Racecourse.',
  es: 'Disminuye moderadamente el rendimiento en el Hipódromo de Chukyo.',
  color: 'purple',
  icon: 'corazón morado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Sapporo Racecourse × (Hipódromo de Sapporo ×)',
  en: 'Moderately decrease performance at Sapporo Racecourse.',
  es: 'Disminuye moderadamente el rendimiento en el Hipódromo de Sapporo.',
  color: 'purple',
  icon: 'corazón morado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Hakodate Racecourse × (Hipódromo de Hakodate ×)',
  en: 'Moderately decrease performance at Hakodate Racecourse.',
  es: 'Disminuye moderadamente el rendimiento en el Hipódromo de Hakodate.',
  color: 'purple',
  icon: 'corazón morado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Fukushima Racecourse × (Hipódromo de Fukushima ×)',
  en: 'Moderately decrease performance at Fukushima Racecourse.',
  es: 'Disminuye moderadamente el rendimiento en el Hipódromo de Fukushima.',
  color: 'purple',
  icon: 'corazón morado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Niigata Racecourse × (Hipódromo de Niigata ×)',
  en: 'Moderately decrease performance at Niigata Racecourse.',
  es: 'Disminuye moderadamente el rendimiento en el Hipódromo de Niigata.',
  color: 'purple',
  icon: 'corazón morado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Kokura Racecourse × (Hipódromo de Kokura ×)',
  en: 'Moderately decrease performance at Kokura Racecourse.',
  es: 'Disminuye moderadamente el rendimiento en el Hipódromo de Kokura.',
  color: 'purple',
  icon: 'corazón morado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Standard Distance × (Distancia Estándar ×)',
  en: 'Moderately decrease performance over standard distances (multiples of 400m).',
  es: 'Disminuye moderadamente el rendimiento en distancias estándar (múltiplos de 400 m).',
  color: 'purple',
  icon: 'corazón morado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Non-Standard Distance × (Distancia No Estándar ×)',
  en: 'Moderately decrease performance over non-standard distances (non-multiples of 400m).',
  es: 'Disminuye moderadamente el rendimiento en distancias no estándar (no múltiplos de 400 m).',
  color: 'purple',
  icon: 'corazón morado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Fainted Fright (Miedo Escénico)',
  en: 'Moderately decrease performance when the race is the only one.',
  es: 'Disminuye moderadamente el rendimiento si solo hay una carrera.',
  color: 'purple',
  icon: 'corazón morado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Oi Racecourse × (Hipódromo de Oi ×)',
  en: 'Moderately decrease performance at Oi Racecourse.',
  es: 'Disminuye moderadamente el rendimiento en el Hipódromo de Oi.',
  color: 'purple',
  icon: 'corazón morado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Firm Conditions ◎ (Terreno Firme ◎)',
  en: 'Increase performance on firm ground.',
  es: 'Aumenta el rendimiento en terreno firme.',
  color: 'green',
  icon: 'fuerza verde.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Firm Conditions ○ (Terreno Firme ○)',
  en: 'Moderately increase performance on firm ground.',
  es: 'Aumenta moderadamente el rendimiento en terreno firme.',
  color: 'green',
  icon: 'fuerza verde.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Wet Conditions ◎ (Terreno Mojado ◎)',
  en: 'Increase performance on good, soft, and heavy ground.',
  es: 'Aumenta el rendimiento en terreno bueno, blando y pesado.',
  color: 'green',
  icon: 'fuerza verde.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Wet Conditions ○ (Terreno Mojado ○)',
  en: 'Moderately increase performance on good, soft, and heavy ground.',
  es: 'Aumenta moderadamente el rendimiento en terreno bueno, blando y pesado.',
  color: 'green',
  icon: 'fuerza verde.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Competitive Spirit ◎ (Espíritu Competitivo ◎)',
  en: 'Increase performance when at least 5 other runners are using the same strategy.',
  es: 'Aumenta el rendimiento cuando al menos 5 corredoras usan la misma estrategia.',
  color: 'green',
  icon: 'fuerza verde.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Competitive Spirit ○ (Espíritu Competitivo ○)',
  en: 'Moderately increase performance when at least 5 other runners are using the same strategy.',
  es: 'Aumenta moderadamente el rendimiento cuando al menos 5 corredoras usan la misma estrategia.',
  color: 'green',
  icon: 'fuerza verde.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Firm Conditions × (Terreno Firme ×)',
  en: 'Moderately decrease performance on firm ground.',
  es: 'Disminuye moderadamente el rendimiento en terreno firme.',
  color: 'purple',
  icon: 'fuerza morada.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Wet Conditions × (Terreno Mojado ×)',
  en: 'Moderately decrease performance on good, soft, and heavy ground.',
  es: 'Disminuye moderadamente el rendimiento en terreno bueno, blando y pesado.',
  color: 'purple',
  icon: 'fuerza morada.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Wallflower (Flores del Muro)',
  en: 'Moderately decrease performance when at least 5 other runners are using the same strategy.',
  es: 'Disminuye moderadamente el rendimiento cuando al menos 5 corredoras usan la misma estrategia.',
  color: 'purple',
  icon: 'fuerza morada.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Sunny Days ◎ (Días Soleados ◎)',
  en: 'Increase performance in sunny weather.',
  es: 'Aumenta el rendimiento con clima soleado.',
  color: 'green',
  icon: 'fuego verde.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Sunny Days ○ (Días Soleados ○)',
  en: 'Moderately increase performance in sunny weather.',
  es: 'Aumenta moderadamente el rendimiento con clima soleado.',
  color: 'green',
  icon: 'fuego verde.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Cloudy Days ◎ (Días Nublados ◎)',
  en: 'Increase performance in cloudy weather.',
  es: 'Aumenta el rendimiento con clima nublado.',
  color: 'green',
  icon: 'fuego verde.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Cloudy Days ○ (Días Nublados ○)',
  en: 'Moderately increase performance in cloudy weather.',
  es: 'Aumenta moderadamente el rendimiento con clima nublado.',
  color: 'green',
  icon: 'fuego verde.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Rainy Days ◎ (Días Lluviosos ◎)',
  en: 'Increase performance in rainy weather.',
  es: 'Aumenta el rendimiento con clima lluvioso.',
  color: 'green',
  icon: 'fuego verde.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Rainy Days ○ (Días Lluviosos ○)',
  en: 'Moderately increase performance in rainy weather.',
  es: 'Aumenta moderadamente el rendimiento con clima lluvioso.',
  color: 'green',
  icon: 'fuego verde.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Snowy Days ◎ (Días Nevados ◎)',
  en: 'Increase performance in snowy weather.',
  es: 'Aumenta el rendimiento con clima nevado.',
  color: 'green',
  icon: 'fuego verde.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Snowy Days ○ (Días Nevados ○)',
  en: 'Moderately increase performance in snowy weather.',
  es: 'Aumenta moderadamente el rendimiento con clima nevado.',
  color: 'green',
  icon: 'fuego verde.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Target in Sight ◎ (Objetivo a la Vista ◎)',
  en: 'Increase performance when the favorite is using the same strategy.',
  es: 'Aumenta el rendimiento cuando la favorita usa la misma estrategia.',
  color: 'green',
  icon: 'fuego verde.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Target in Sight ○ (Objetivo a la Vista ○)',
  en: 'Moderately increase performance when the favorite is using the same strategy.',
  es: 'Aumenta moderadamente el rendimiento cuando la favorita usa la misma estrategia.',
  color: 'green',
  icon: 'fuego verde.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Rainy Days × (Días Lluviosos ×)',
  en: 'Moderately decrease performance in rainy weather.',
  es: 'Disminuye moderadamente el rendimiento con clima lluvioso.',
  color: 'purple',
  icon: 'fuego morado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Inner Post Proficiency ◎ (Dominio del Carril Interno ◎)',
  en: 'Increase performance in brackets 1–3.',
  es: 'Aumenta el rendimiento en carriles del 1 al 3.',
  color: 'green',
  icon: 'libro verde.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Inner Post Proficiency ○ (Dominio del Carril Interno ○)',
  en: 'Moderately increase performance in brackets 1–3.',
  es: 'Aumenta moderadamente el rendimiento en carriles del 1 al 3.',
  color: 'green',
  icon: 'libro verde.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Front Runner Savvy ◎ (Instinto de Lider ◎)',
  en: 'Increase ability to get into a good position. (Front Runner)',
  es: 'Aumenta la habilidad para lograr una buena posición. (Lider)',
  color: 'green',
  icon: 'libro verde.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Front Runner Savvy ○ (Instinto de Lider ○)',
  en: 'Moderately increase ability to get into a good position. (Front Runner)',
  es: 'Aumenta moderadamente la habilidad para lograr una buena posición. (Lider)',
  color: 'green',
  icon: 'libro verde.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Pace Chaser Savvy ◎ (Instinto de Perseguidor ◎)',
  en: 'Increase ability to get into a good position. (Pace Chaser)',
  es: 'Aumenta la habilidad para lograr una buena posición. (Perseguidor)',
  color: 'green',
  icon: 'libro verde.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Pace Chaser Savvy ○ (Instinto de Perseguidor ○)',
  en: 'Moderately increase ability to get into a good position. (Pace Chaser)',
  es: 'Aumenta moderadamente la habilidad para lograr una buena posición. (Perseguidor)',
  color: 'green',
  icon: 'libro verde.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Late Surger Savvy ◎ (Instinto de Rematador ◎)',
  en: 'Increase ability to get into a good position. (Late Surger)',
  es: 'Aumenta la habilidad para lograr una buena posición. (Rematador)',
  color: 'green',
  icon: 'libro verde.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Late Surger Savvy ○ (Instinto de Rematador ○)',
  en: 'Moderately increase ability to get into a good position. (Late Surger)',
  es: 'Aumenta moderadamente la habilidad para lograr una buena posición. (Rematador)',
  color: 'green',
  icon: 'libro verde.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'End Closer Savvy ◎ (Instinto de Cierre ◎)',
  en: 'Increase ability to get into a good position. (End Closer)',
  es: 'Aumenta la habilidad para lograr una buena posición. (Cierre Final)',
  color: 'green',
  icon: 'libro verde.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'End Closer Savvy ○ (Instinto de Cierre ○)',
  en: 'Moderately increase ability to get into a good position. (End Closer)',
  es: 'Aumenta moderadamente la habilidad para lograr una buena posición. (Cierre Final)',
  color: 'green',
  icon: 'libro verde.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Inner Post Awareness × (Desconcentración en Carriles Internos ×)',
  en: 'Moderately decrease performance in brackets 1–3.',
  es: 'Disminuye moderadamente el rendimiento en carriles del 1 al 3.',
  color: 'purple',
  icon: 'libro morado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Lucky Seven (Siete de la Suerte)',
  en: 'Moderately good things may happen when in bracket 7.',
  es: 'Pueden ocurrir cosas moderadamente buenas al salir en el carril 7.',
  color: 'green',
  icon: 'lucky verde.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Super Lucky Seven (Súper Siete de la Suerte)',
  en: 'Good things may happen when in bracket 7.',
  es: 'Pueden ocurrir cosas buenas al salir en el carril 7.',
  color: 'green',
  icon: 'lucky verde dorado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Corner Recovery + (Recuperación en Curva +)',
  en: 'Slightly recover endurance on a corner with efficient turning.',
  es: 'Recupera ligeramente resistencia en una curva con giro eficiente.',
  color: 'blue',
  icon: 'energia azul.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Straightaway Recovery (Recuperación en Recta)',
  en: 'Slightly recover endurance on a straight.',
  es: 'Recupera ligeramente resistencia en una recta.',
  color: 'blue',
  icon: 'energia azul.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Lay Low (Agacharse)',
  en: 'Slightly recover endurance when the way ahead is jammed mid-race.',
  es: 'Recupera ligeramente resistencia cuando el camino está bloqueado a mitad de carrera.',
  color: 'blue',
  icon: 'energia azul.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Pace Smarter (Ritmo Inteligente)',
  en: 'Slightly recover endurance when passed by another runner mid-race.',
  es: 'Recupera ligeramente resistencia al ser adelantado por otra corredora a mitad de carrera.',
  color: 'blue',
  icon: 'energia azul.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Calm in a Crowd (Calma en Multitud)',
  en: 'Slightly recover endurance when surrounded mid-race.',
  es: 'Recupera ligeramente resistencia cuando está rodeada a mitad de carrera.',
  color: 'blue',
  icon: 'energia azul.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Stamina to Spare (Energía de Sobra)',
  en: 'Slightly decrease fatigue early-race. (Pace Chaser)',
  es: 'Reduce ligeramente la fatiga al inicio de carrera. (Perseguidor)',
  color: 'blue',
  icon: 'energia azul.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Preferred Position (Posición Preferida)',
  en: 'Slightly decrease fatigue mid-race. (Pace Chaser)',
  es: 'Reduce ligeramente la fatiga a mitad de carrera. (Perseguidor)',
  color: 'blue',
  icon: 'energia azul.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Steady Pace (Ritmo Constante)',
  en: 'Slightly decrease fatigue mid-race. (Front Runner)',
  es: 'Reduce ligeramente la fatiga a mitad de carrera. (Líder)',
  color: 'blue',
  icon: 'energia azul.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Wait-and-See (Esperar y Ver)',
  en: 'Slightly decrease fatigue when positioned toward the back mid-race. (Spurt)',
  es: 'Reduce ligeramente la fatiga al estar en la parte trasera a mitad de carrera. (Sprinter)',
  color: 'blue',
  icon: 'energia azul.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Watchful Eye (Mirada Atenta)',
  en: 'Slightly decrease fatigue when positioned toward the back early-race. (Mile)',
  es: 'Reduce ligeramente la fatiga al estar en la parte trasera al inicio de la carrera. (Milla)',
  color: 'blue',
  icon: 'energia azul.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Vivid Outlook (Perspectiva Viva)',
  en: 'Slightly decrease fatigue when positioned toward the back mid-race. (Medium)',
  es: 'Reduce ligeramente la fatiga al estar en la parte trasera a mitad de carrera. (Media distancia)',
  color: 'blue',
  icon: 'energia azul.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Deep Breath (Respiración Profunda)',
  en: 'Slightly decrease fatigue by taking a breather upon entering a straight. (Long)',
  es: 'Reduce ligeramente la fatiga al tomar aire al entrar en una recta. (Larga distancia)',
  color: 'blue',
  icon: 'energia azul.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Extra Rest (Descanso Extra)',
  en: 'Slightly decrease fatigue when overtaken mid-race. (Medium)',
  es: 'Reduce ligeramente la fatiga al ser adelantada a mitad de carrera. (Media distancia)',
  color: 'blue',
  icon: 'energia azul.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Soft Step (Paso Suave)',
  en: 'Slightly decrease fatigue when moving sideways. (Medium)',
  es: 'Reduce ligeramente la fatiga al moverse lateralmente. (Media distancia)',
  color: 'blue',
  icon: 'energia azul.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Resting Fog (Niebla de Descanso)',
  en: 'Slightly decrease fatigue when determined to pass another runner. (Long)',
  es: 'Reduce ligeramente la fatiga al intentar adelantar a otra corredora. (Larga distancia)',
  color: 'blue',
  icon: 'energia azul.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Moss Rise (Ascenso Musgoso)',
  en: 'Slightly reduce fatigue on an uphill. (Front Runner)',
  es: 'Reduce ligeramente la fatiga en una subida. (Líder)',
  color: 'blue',
  icon: 'energia azul.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Hydrate (Hidratarse)',
  en: 'Slightly recover endurance mid-race. (Pace Chaser)',
  es: 'Recupera ligeramente resistencia a mitad de carrera. (Perseguidor)',
  color: 'blue',
  icon: 'energia azul.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'A Small Breather (Pequeño Respiro)',
  en: 'Slightly recover endurance mid-race. (Pace Chaser)',
  es: 'Recupera ligeramente resistencia a mitad de carrera. (Perseguidor)',
  color: 'blue',
  icon: 'energia azul.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'After-School Stroll (Paseo Después de Clases)',
  en: 'Slightly reduce fatigue on a downhill. (End Closer)',
  es: 'Reduce ligeramente la fatiga en una bajada. (Cierre Final)',
  color: 'blue',
  icon: 'energia azul.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Lovehacked (Hackeo de Amor)',
  en: 'Slightly regain composure by calming down when the way ahead is jammed. (End Closer)',
  es: 'Recupera ligeramente la compostura al calmarse cuando el camino está bloqueado. (Cierre Final)',
  color: 'blue',
  icon: 'energia azul.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Triple 7s (Triple 7)',
  en: 'Slightly gain energy with 777m remaining.',
  es: 'Recupera ligeramente energía al quedar 777 m de carrera.',
  color: 'blue',
  icon: 'energia azul.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Shake It Off (Sacúdelo)',
  en: 'Decrease fatigue after activating many skills late-race.',
  es: 'Reduce la fatiga tras activar muchas habilidades al final de la carrera.',
  color: 'blue',
  icon: 'energia azul.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Swinging Maestro (Maestro del Giro)',
  en: 'Recover endurance on a corner with efficient turning.',
  es: 'Recupera resistencia en una curva con giro eficiente.',
  color: 'blue',
  icon: 'energia azul dorado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Breath of Fresh Air (Aire Fresco)',
  en: 'Recover endurance on a straight.',
  es: 'Recupera resistencia en una recta.',
  color: 'blue',
  icon: 'energia azul dorado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Iron Will (Voluntad de Hierro)',
  en: 'Recover endurance when the way ahead is jammed early-race.',
  es: 'Recupera resistencia cuando el camino está bloqueado al inicio de carrera.',
  color: 'blue',
  icon: 'energia azul dorado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Unfazeable (Imperturbable)',
  en: 'Recover endurance when passed by another mid-race.',
  es: 'Recupera resistencia al ser adelantada a mitad de carrera.',
  color: 'blue',
  icon: 'energia azul dorado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Unfounded Resolve (Determinación Injustificada)',
  en: 'Recover endurance when surrounded mid-race.',
  es: 'Recupera resistencia al estar rodeada a mitad de carrera.',
  color: 'blue',
  icon: 'energia azul dorado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Calm and Collected (Calma y Control)',
  en: 'Decrease fatigue early-race. (Pace Chaser)',
  es: 'Reduce la fatiga al inicio de carrera. (Perseguidor)',
  color: 'blue',
  icon: 'energia azul dorado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Race Pioneer (Pionera de Carrera)',
  en: 'Decrease fatigue early-race. (Front Runner)',
  es: 'Reduce la fatiga al inicio de carrera. (Líder)',
  color: 'blue',
  icon: 'energia azul dorado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Sleeping Lion (León Dormido)',
  en: 'Decrease fatigue mid-race. (End Closer)',
  es: 'Reduce la fatiga a mitad de carrera. (Cierre Final)',
  color: 'blue',
  icon: 'energia azul dorado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Keen Eye (Ojo Agudo)',
  en: 'Decrease fatigue when jostled from the back early-race. (Mile)',
  es: 'Reduce la fatiga al ser empujada desde atrás al inicio de carrera. (Milla)',
  color: 'blue',
  icon: 'energia azul dorado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Trackbreaker (Rompedora de Carril)',
  en: 'Decrease fatigue when in the lead mid-race. (Leader)',
  es: 'Reduce la fatiga al ir liderando a mitad de carrera. (Líder)',
  color: 'blue',
  icon: 'energia azul dorado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Cooldown (Enfriamiento)',
  en: 'Decrease fatigue by taking a breather upon entering a straight. (Long)',
  es: 'Reduce la fatiga al tomar un respiro al entrar en una recta. (Larga distancia)',
  color: 'blue',
  icon: 'energia azul dorado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Adrenaline Rush (Subidón de Adrenalina)',
  en: 'Regain the energy to run after exhausting turning.',
  es: 'Recupera energía para correr tras un giro agotador.',
  color: 'blue',
  icon: 'energia azul dorado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Miraculous Step (Paso Milagroso)',
  en: 'Decrease fatigue when moving sideways. (Medium)',
  es: 'Reduce la fatiga al moverse lateralmente. (Media distancia)',
  color: 'blue',
  icon: 'energia azul dorado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Restless (Inquieta)',
  en: 'Recover endurance on a uphill. (Front Runner)',
  es: 'Recupera resistencia en una subida. (Líder)',
  color: 'blue',
  icon: 'energia azul dorado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Gourmet (Gourmet)',
  en: 'Recover endurance mid-race. (Pace Chaser)',
  es: 'Recupera resistencia a mitad de carrera. (Perseguidor)',
  color: 'blue',
  icon: 'energia azul dorado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Iron Resolve (Determinación de Hierro)',
  en: 'Recover endurance late race. (Late Surger)',
  es: 'Recupera resistencia al final de la carrera. (Rematador)',
  color: 'blue',
  icon: 'energia azul dorado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Go-Home Specialist (Especialista en Volver a Casa)',
  en: 'Recover endurance on a downhill. (End Closer)',
  es: 'Recupera resistencia en una bajada. (Cierre Final)',
  color: 'blue',
  icon: 'energia azul dorado.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Serenity (Serenidad)',
  en: 'Regain composure by calming down when the way ahead is jammed. (End Closer)',
  es: 'Recupera la compostura al calmarse cuando el camino está bloqueado. (Cierre Final)',
  color: 'blue',
  icon: 'energia azul dorado.png',
  category: 'Técnica',
  votes: 0
},
  {
    title: "Introduction to Physiology (Introducción a la Fisiología)",
    en: "Moderately recover endurance when conserving energy on a corner in the second half of the race.",
    es: "Recupera moderadamente resistencia al conservar energía en una curva durante la segunda mitad de la carrera.",
    color: "blue",
    icon: "energia azul colorado.png",
    category: "Recovery",
    votes: 0
  },
  {
    title: "Clear Heart (Corazón Transparente)",
    en: "Moderately recover endurance when well positioned mid-race.",
    es: "Recupera moderadamente resistencia al estar bien posicionada a mitad de carrera.",
    color: "blue",
    icon: "energia azul colorado.png",
    category: "Recovery",
    votes: 0
  },
  {
    title: "Super Duper Stoked (Súper Súper Emocionada)",
    en: "Moderately recover endurance with a glance at nearby runners when positioned toward the back on the final corner.",
    es: "Recupera moderadamente resistencia al observar a corredoras cercanas desde la retaguardia en la última curva.",
    color: "blue",
    icon: "energia azul colorado.png",
    category: "Recovery",
    votes: 0
  },
  {
    title: "U-ma2 (U-ma al Cuadrado)",
    en: "Recover endurance when conserving energy on a corner in the second half of the race.",
    es: "Recupera resistencia al conservar energía en una curva durante la segunda mitad de la carrera.",
    color: "blue",
    icon: "energia azul colorado.png",
    category: "Recovery",
    votes: 0
  },
  {
    title: "Pure Heart (Corazón Puro)",
    en: "Recover endurance when well positioned mid-race.",
    es: "Recupera resistencia al estar bien posicionada a mitad de carrera.",
    color: "blue",
    icon: "energia azul colorado.png",
    category: "Recovery",
    votes: 0
  },
  {
    title: "Super Duper Climax (Clímax Súper Súper)",
    en: "Recover endurance with a glance at nearby runners when positioned toward the back on the final corner.",
    es: "Recupera resistencia al observar a corredoras cercanas desde la retaguardia en la última curva.",
    color: "blue",
    icon: "energia azul colorado.png",
    category: "Recovery",
    votes: 0
  },
  {
    title: "Superior Heal (Curación Superior)",
    en: "Recover endurance with a gentle light when dropping down toward the back mid-race.",
    es: "Recupera resistencia con una luz suave al caer hacia la retaguardia a mitad de carrera.",
    color: "blue",
    icon: "energia azul colorado.png",
    category: "Recovery",
    votes: 0
  },
  {
    title: "Dazin' It Diver (Buceadora Somnolienta)",
    en: "Recover endurance by relaxing after activating 2 skills mid-race.",
    es: "Recupera resistencia relajándose tras activar 2 habilidades a mitad de carrera.",
    color: "blue",
    icon: "energia azul colorado.png",
    category: "Recovery",
    votes: 0
  },
{
  title: 'Corner Recovery × (Recuperación en Curva ×)',
  en: 'Moderately lose endurance on a corner with inefficient turning.',
  es: 'Pierde moderadamente resistencia en una curva con giro ineficiente.',
  color: 'purple',
  icon: 'energia morada.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Ramp Revulsion (Rechazo a las Subidas)',
  en: 'Moderately increase fatigue on an uphill.',
  es: 'Aumenta moderadamente la fatiga en una subida.',
  color: 'purple',
  icon: 'energia morada.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Packphobia (Fobia al Grupo)',
  en: 'Moderately lose endurance when surrounded.',
  es: 'Pierde moderadamente resistencia al estar rodeada.',
  color: 'purple',
  icon: 'energia morada.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Running Idle (Inactividad en Carrera)',
  en: 'Moderately increase fatigue when in the lead by too large of a margin.',
  es: 'Aumenta moderadamente la fatiga al liderar con demasiada ventaja.',
  color: 'purple',
  icon: 'energia morada.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Ignited Spirit STA (Espíritu Encendido STA)',
  en: 'Burn bright with team spirit, slightly receiving endurance in proportion to the total stamina of racing team members mid-race.',
  es: 'Brilla con espíritu de equipo, recuperando ligeramente resistencia en proporción a la resistencia total del equipo a mitad de carrera.',
  color: 'purple',
  icon: 'energia azul reloj.png',
  category: 'Técnica',
  votes: 0
},
{
  title: 'Burning Spirit STA (Espíritu Ardiente STA)',
  en: 'Burn bright with team spirit, recovering endurance in proportion to the total stamina of racing team members mid-race.',
  es: 'Brilla con espíritu de equipo, recuperando resistencia en proporción a la resistencia total del equipo a mitad de carrera.',
  color: 'purple',
  icon: 'energia azul reloj dorado.png',
  category: 'Técnica',
  votes: 0
},
  {
    title: 'Corner Adept (Experto en Curvas)',
    en: 'Slightly increase velocity on a corner with skilled turning.',
    es: 'Aumenta ligeramente la velocidad en las curvas con giros hábiles.',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Velocidad',
    votes: 0
  },
  {
    title: 'Straightaway Adept (Experto en Rectas)',
    en: 'Slightly increase velocity on a straight.',
    es: 'Aumenta ligeramente la velocidad en línea recta.',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Velocidad',
    votes: 0
  },
  {
    title: 'Ramp Up (Aceleración)',
    en: 'Slightly increase velocity when passing another runner mid-race.',
    es: 'Aumenta ligeramente la velocidad al adelantar a otro corredor a mitad de carrera.',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Velocidad',
    votes: 0
  },
  {
    title: 'Homestretch Haste (Impulso Final)',
    en: 'Slightly increase velocity in the last spurt.',
    es: 'Aumenta ligeramente la velocidad en el último impulso.',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Velocidad',
    votes: 0
  },
  {
    title: 'Fast-Paced (Ritmo Rápido)',
    en: 'Slightly increase ability to go to the front mid-race. (Front Runner)',
    es: 'Aumenta ligeramente la capacidad de ir al frente a mitad de carrera. (Líder)',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Estrategia',
    votes: 0
  },
  {
    title: 'Prepared to Pass (Listo para Adelantar)',
    en: 'Slightly increase ability to break out of the pack on the final corner. (Pace Chaser)',
    es: 'Aumenta ligeramente la capacidad de salir del grupo en la última curva. (Cazador de Ritmo)',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Estrategia',
    votes: 0
  },
  {
    title: 'Position Pilfer (Ladrón de Posición)',
    en: 'Slightly increase velocity mid-race. (Late Surger)',
    es: 'Aumenta ligeramente la velocidad a mitad de carrera. (Rematador Tardío)',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Velocidad',
    votes: 0
  },
  {
    title: 'Outer Swell (Oleada Exterior)',
    en: 'Slightly increase velocity when passing another runner on the outside on the final corner. (Late Surger)',
    es: 'Aumenta ligeramente la velocidad al adelantar por el exterior en la última curva. (Rematador Tardío)',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Velocidad',
    votes: 0
  },
  {
    title: 'Masterful Gambit (Apuesta Maestra)',
    en: 'Slightly move up in preparation to close the gap late-race. (End Closer)',
    es: 'Avanza ligeramente para cerrar la brecha al final de la carrera. (Finalizador)',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Estrategia',
    votes: 0
  },
  {
    title: 'Gap Closer (Cierra Brechas)',
    en: 'Slightly increase spurting ability when positioned toward the back late-race. (Sprint)',
    es: 'Aumenta ligeramente la capacidad de esprintar desde atrás al final de la carrera. (Sprinter)',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Velocidad',
    votes: 0
  },
  {
    title: 'Productive Plan (Plan Productivo)',
    en: 'Slightly widen the margin when in the lead early-race. (Mile)',
    es: 'Aumenta ligeramente la ventaja al liderar al inicio de la carrera. (Milla)',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Estrategia',
    votes: 0
  },
  {
    title: 'Up-Tempo (Ritmo Alto)',
    en: 'Slightly increase positioning ability when positioned toward the front mid-race. (Medium)',
    es: 'Aumenta ligeramente la capacidad de posicionarse al estar al frente a mitad de carrera. (Media distancia)',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Estrategia',
    votes: 0
  },
  {
    title: 'Steadfast (Firmeza)',
    en: 'Slightly increase ability to fight back when passed by another runner on the final corner. (Medium)',
    es: 'Aumenta ligeramente la capacidad para contraatacar cuando otro corredor te adelanta en la última curva. (Media distancia)',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Defensa',
    votes: 0
  },
  {
    title: 'Inside Scoop (Información Interna)',
    en: 'Slightly increase velocity when near the inner rail on the final corner. (Long)',
    es: 'Aumenta ligeramente la velocidad cerca del riel interior en la última curva. (Larga distancia)',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Velocidad',
    votes: 0
  },
  {
    title: 'Sprint Straightaways ◎ (Rectas de Sprint ◎)',
    en: 'Moderately increase velocity on a straight. (Sprint)',
    es: 'Aumenta moderadamente la velocidad en una recta. (Sprint)',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Sprint',
    votes: 0
  },
  {
    title: 'Sprint Straightaways ○ (Rectas de Sprint ○)',
    en: 'Slightly increase velocity on a straight. (Sprint)',
    es: 'Aumenta ligeramente la velocidad en una recta. (Sprint)',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Sprint',
    votes: 0
  },
  {
    title: 'Sprint Corners ◎ (Curvas de Sprint ◎)',
    en: 'Moderately increase velocity on a corner. (Sprint)',
    es: 'Aumenta moderadamente la velocidad en una curva. (Sprint)',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Sprint',
    votes: 0
  },
  {
    title: 'Sprint Corners ○ (Curvas de Sprint ○)',
    en: 'Slightly increase velocity on a corner. (Sprint)',
    es: 'Aumenta ligeramente la velocidad en una curva. (Sprint)',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Sprint',
    votes: 0
  },
  {
    title: 'Huge Lead (Gran Ventaja)',
    en: 'Slightly increase ability to maintain the lead when leading by a large margin mid-race. (Sprint)',
    es: 'Aumenta ligeramente la capacidad de mantener la delantera cuando lidera por gran margen a mitad de carrera. (Sprint)',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Sprint',
    votes: 0
  },
  {
    title: 'Mile Straightaways ◎ (Rectas de Milla ◎)',
    en: 'Moderately increase velocity on a straight. (Mile)',
    es: 'Aumenta moderadamente la velocidad en una recta. (Milla)',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Milla',
    votes: 0
  },
  {
    title: 'Mile Straightaways ○ (Rectas de Milla ○)',
    en: 'Slightly increase velocity on a straight. (Mile)',
    es: 'Aumenta ligeramente la velocidad en una recta. (Milla)',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Milla',
    votes: 0
  },
  {
    title: 'Mile Corners ◎ (Curvas de Milla ◎)',
    en: 'Moderately increase velocity on a corner. (Mile)',
    es: 'Aumenta moderadamente la velocidad en una curva. (Milla)',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Milla',
    votes: 0
  },
  {
    title: 'Mile Corners ○ (Curvas de Milla ○)',
    en: 'Slightly increase velocity on a corner. (Mile)',
    es: 'Aumenta ligeramente la velocidad en una curva. (Milla)',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Milla',
    votes: 0
  },
  {
    title: 'Shifting Gears (Cambio de Marcha)',
    en: 'Slightly increase passing ability when positioned toward the front mid-race. (Mile)',
    es: 'Aumenta ligeramente la capacidad de adelantar cuando está al frente a mitad de carrera. (Milla)',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Milla',
    votes: 0
  },
  {
    title: 'Unyielding Spirit (Espíritu Inquebrantable)',
    en: 'Slightly increase passing ability. (Mile)',
    es: 'Aumenta ligeramente la capacidad de adelantar. (Milla)',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Milla',
    votes: 0
  },
  {
    title: 'Medium Straightaways ◎ (Rectas Medias ◎)',
    en: 'Moderately increase velocity on a straight. (Medium)',
    es: 'Aumenta moderadamente la velocidad en una recta. (Media distancia)',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Media',
    votes: 0
  },
  {
    title: 'Medium Straightaways ○ (Rectas Medias ○)',
    en: 'Slightly increase velocity on a straight. (Medium)',
    es: 'Aumenta ligeramente la velocidad en una recta. (Media distancia)',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Media',
    votes: 0
  },
  {
    title: 'Medium Corners ◎ (Curvas Medias ◎)',
    en: 'Moderately increase velocity on a corner. (Medium)',
    es: 'Aumenta moderadamente la velocidad en una curva. (Media distancia)',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Media',
    votes: 0
  },
  {
    title: 'Medium Corners ○ (Curvas Medias ○)',
    en: 'Slightly increase velocity on a corner. (Medium)',
    es: 'Aumenta ligeramente la velocidad en una curva. (Media distancia)',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Media',
    votes: 0
  },
  {
    title: 'Long Straightaways ◎ (Rectas Largas ◎)',
    en: 'Moderately increase velocity on a straight. (Long)',
    es: 'Aumenta moderadamente la velocidad en una recta. (Larga distancia)',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Larga',
    votes: 0
  },
  {
    title: 'Long Straightaways ○ (Rectas Largas ○)',
    en: 'Slightly increase velocity on a straight. (Long)',
    es: 'Aumenta ligeramente la velocidad en una recta. (Larga distancia)',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Larga',
    votes: 0
  },
  {
    title: 'Long Corners ◎ (Curvas Largas ◎)',
    en: 'Moderately increase velocity on a corner. (Long)',
    es: 'Aumenta moderadamente la velocidad en una curva. (Larga distancia)',
    color: 'yellow',
    icon: 'amarillo corriendo.png',
    category: 'Larga',
    votes: 0
  },
  {
    title: 'Long Corners ○ (Curvas Largas ○)',
    en: 'Slightly increase velocity on a corner. (Long)',
    es: 'Aumenta ligeramente la velocidad en una curva. (Larga distancia)',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Velocidad',
    votes: 0
  },
  {
    title: 'Keeping the Lead (Mantener la Delantera)',
    en: 'Slightly increase ability to maintain the lead when leading by a large margin mid-race. (Long)',
    es: 'Aumenta ligeramente la capacidad de mantener la delantera si lideras por un amplio margen a mitad de carrera. (Larga distancia)',
    color: 'orange',
    icon: 'amarillo corriendo.png',
    category: 'Táctica',
    votes: 0
  },
  {
    title: "Pressure (Presión)",
    en: "Slightly increase velocity when passing another runner late-race. (Long)",
    es: "Aumenta ligeramente la velocidad al adelantar a otra corredora al final de la carrera. (Larga distancia)",
    color: "orange",
    icon: "amarillo corriendo.png",
    category: "Táctica",
    votes: 0
  },
  {
    title: "Front Runner Straightaways ◎ (Rectas Puntera ◎)",
    en: "Moderately increase velocity on a straight. (Front Runner)",
    es: "Aumenta moderadamente la velocidad en rectas. (Puntera)",
    color: "orange",
    icon: "amarillo corriendo.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "Front Runner Straightaways ≫ (Rectas Puntera ≫)",
    en: "Slightly increase velocity on a straight. (Front Runner)",
    es: "Aumenta ligeramente la velocidad en rectas. (Puntera)",
    color: "orange",
    icon: "amarillo corriendo.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "Front Runner Corners ◎ (Curvas Puntera ◎)",
    en: "Moderately increase velocity on a corner. (Front Runner)",
    es: "Aumenta moderadamente la velocidad en curvas. (Puntera)",
    color: "orange",
    icon: "amarillo corriendo.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "Front Runner Corners ≫ (Curvas Puntera ≫)",
    en: "Slightly increase velocity on a corner. (Front Runner)",
    es: "Aumenta ligeramente la velocidad en curvas. (Puntera)",
    color: "orange",
    icon: "amarillo corriendo.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "Leader's Pride (Orgullo de Líder)",
    en: "Slightly avoid being passed early-race. (Front Runner)",
    es: "Reduce ligeramente la probabilidad de ser adelantada al inicio de la carrera. (Puntera)",
    color: "orange",
    icon: "amarillo corriendo.png",
    category: "Táctica",
    votes: 0
  },
  {
    title: "Pace Chaser Straightaways ◎ (Rectas Perseguidora ◎)",
    en: "Moderately increase velocity on a straight. (Pace Chaser)",
    es: "Aumenta moderadamente la velocidad en rectas. (Perseguidora)",
    color: "orange",
    icon: "amarillo corriendo.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "Pace Chaser Straightaways ≫ (Rectas Perseguidora ≫)",
    en: "Slightly increase velocity on a straight. (Pace Chaser)",
    es: "Aumenta ligeramente la velocidad en rectas. (Perseguidora)",
    color: "orange",
    icon: "amarillo corriendo.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "Pace Chaser Corners ◎ (Curvas Perseguidora ◎)",
    en: "Moderately increase velocity on a corner. (Pace Chaser)",
    es: "Aumenta moderadamente la velocidad en curvas. (Perseguidora)",
    color: "orange",
    icon: "amarillo corriendo.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "Pace Chaser Corners ≫ (Curvas Perseguidora ≫)",
    en: "Slightly increase velocity on a corner. (Pace Chaser)",
    es: "Aumenta ligeramente la velocidad en curvas. (Perseguidora)",
    color: "orange",
    icon: "amarillo corriendo.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "Late Surger Straightaways ◎ (Rectas Rematadora ◎)",
    en: "Moderately increase velocity on a straight. (Late Surger)",
    es: "Aumenta moderadamente la velocidad en rectas. (Rematadora)",
    color: "orange",
    icon: "amarillo corriendo.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "Late Surger Straightaways ≫ (Rectas Rematadora ≫)",
    en: "Slightly increase velocity on a straight. (Late Surger)",
    es: "Aumenta ligeramente la velocidad en rectas. (Rematadora)",
    color: "orange",
    icon: "amarillo corriendo.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "Later Surger Corners ◎ (Curvas Rematadora ◎)",
    en: "Moderately increase velocity on a corner. (Late Surger)",
    es: "Aumenta moderadamente la velocidad en curvas. (Rematadora)",
    color: "orange",
    icon: "amarillo corriendo.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "Late Surger Corners ≫ (Curvas Rematadora ≫)",
    en: "Slightly increase velocity on a corner. (Late Surger)",
    es: "Aumenta ligeramente la velocidad en curvas. (Rematadora)",
    color: "orange",
    icon: "amarillo corriendo.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "1,500,000 CC (1,500,000 CC)",
    en: "Slightly increase velocity on an uphill. (Late Surger)",
    es: "Aumenta ligeramente la velocidad en subidas. (Rematadora)",
    color: "orange",
    icon: "amarillo corriendo.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "End Closer Straightaways ◎ (Rectas Cerradora ◎)",
    en: "Moderately increase velocity on a straight. (End Closer)",
    es: "Aumenta moderadamente la velocidad en rectas. (Cerradora)",
    color: "orange",
    icon: "amarillo corriendo.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "End Closer Straightaways ≫ (Rectas Cerradora ≫)",
    en: "Slightly increase velocity on a straight. (End Closer)",
    es: "Aumenta ligeramente la velocidad en rectas. (Cerradora)",
    color: "orange",
    icon: "amarillo corriendo.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "End Closer Corners ◎ (Curvas Cerradora ◎)",
    en: "Moderately increase velocity on a corner. (End Closer)",
    es: "Aumenta moderadamente la velocidad en curvas. (Cerradora)",
    color: "orange",
    icon: "amarillo corriendo.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "End Closer Corners ≫ (Curvas Cerradora ≫)",
    en: "Slightly increase velocity on a corner. (End Closer)",
    es: "Aumenta ligeramente la velocidad en curvas. (Cerradora)",
    color: "orange",
    icon: "amarillo corriendo.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "Uma Stan (Fan de Uma)",
    en: "Slightly increase velocity when close to many runners.",
    es: "Aumenta ligeramente la velocidad al estar cerca de muchas corredoras.",
    color: "orange",
    icon: "amarillo corriendo.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "Tail Held High (Cola en Alto)",
    en: "Slightly increase velocity after activating many skills mid-race.",
    es: "Aumenta ligeramente la velocidad tras activar varias habilidades durante la carrera.",
    color: "orange",
    icon: "amarillo corriendo.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "Slipstream (Rebufo)",
    en: "Slightly decrease wind resistance when following directly behind another runner.",
    es: "Reduce ligeramente la resistencia del viento al correr justo detrás de otra corredora.",
    color: "orange",
    icon: "amarillo corriendo.png",
    category: "Táctica",
    votes: 0
  },
  {
    title: "Playtime’s Over! (¡Se acabó el juego!)",
    en: "Slightly increase velocity when followed by another runner directly behind for a long time.",
    es: "Aumenta ligeramente la velocidad si otra corredora te sigue de cerca durante mucho tiempo.",
    color: "orange",
    icon: "amarillo corriendo.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "Top Pick (Favorita del Público)",
    en: "Slightly increase velocity when engaged in a challenge mid-race. (Dirt)",
    es: "Aumenta ligeramente la velocidad al enfrentar un reto a mitad de carrera. (Tierra)",
    color: "orange",
    icon: "amarillo corriendo.png",
    category: "Tierra",
    votes: 0
  },
  {
    title: "Professor of Curvature (Profesora de Curvas)",
    en: "Increase velocity on a corner with skilled turning.",
    es: "Aumenta la velocidad en curvas al girar con habilidad.",
    color: "orange",
    icon: "amarillo corriendo dorado.png",
    category: "Técnica",
    votes: 0
  },
  {
    title: "Beeline Burst (Explosión en Línea Recta)",
    en: "Increase velocity on a straight.",
    es: "Aumenta la velocidad en una recta.",
    color: "orange",
    icon: "amarillo corriendo dorado.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "It’s On! (¡Vamos con Todo!)",
    en: "Increase velocity when passing another runner mid-race.",
    es: "Aumenta la velocidad al adelantar a otra corredora a mitad de carrera.",
    color: "orange",
    icon: "amarillo corriendo dorado.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "In Body and Mind (Cuerpo y Mente)",
    en: "Increase velocity in the last spurt.",
    es: "Aumenta la velocidad en el último esfuerzo.",
    color: "orange",
    icon: "amarillo corriendo dorado.png",
    category: "Sprint final",
    votes: 0
  },
  {
    title: "Escape Artist (Escapista)",
    en: "Increase ability to go to the front mid-race. (Front Runner)",
    es: "Aumenta la capacidad de tomar la delantera a mitad de carrera. (Puntera)",
    color: "orange",
    icon: "amarillo corriendo dorado.png",
    category: "Táctica",
    votes: 0
  },
  {
    title: 'Speed Star (Estrella de Velocidad)',
    en: 'Increase ability to break out of the pack on the final corner. (Pace Chaser)',
    es: 'Aumenta la capacidad de salir del grupo en la última curva. (Cazador de Ritmo)',
    color: 'orange',
    icon: 'amarillo corriendo dorado.png',
    category: 'Velocidad',
    votes: 0
  },
  {
    title: 'Fast & Furious (Rápido y Furioso)',
    en: 'Increase velocity mid-race. (Late Surger)',
    es: 'Aumenta la velocidad a mitad de carrera. (Rematador Tardío)',
    color: 'orange',
    icon: 'amarillo corriendo dorado.png',
    category: 'Velocidad',
    votes: 0
  },
  {
    title: 'Rising Dragon (Dragón Ascendente)',
    en: 'Increase velocity when passing another runner on the outside on the final corner. (Late Surger)',
    es: 'Aumenta la velocidad al adelantar por el exterior en la última curva. (Rematador Tardío)',
    color: 'orange',
    icon: 'amarillo corriendo dorado.png',
    category: 'Velocidad',
    votes: 0
  },
  {
    title: 'Sturm und Drang (Tormenta e Ímpetu)',
    en: 'Move up in preparation to close the gap late-race. (End Closer)',
    es: 'Avanza en preparación para cerrar la brecha al final de la carrera. (Finalizador)',
    color: 'orange',
    icon: 'amarillo corriendo dorado.png',
    category: 'Estrategia',
    votes: 0
  },
  {
    title: 'Blinding Flash (Destello Cegador)',
    en: 'Increase spurting ability when positioned toward the back late-race. (Sprint)',
    es: 'Aumenta la capacidad de esprintar desde atrás al final de la carrera. (Sprint)',
    color: 'orange',
    icon: 'amarillo corriendo dorado.png',
    category: 'Sprint',
    votes: 0
  },
  {
    title: 'Mile Maven (Experto en Millas)',
    en: 'Widen the margin when in the lead early-race. (Mile)',
    es: 'Aumenta la ventaja al liderar al inicio de la carrera. (Milla)',
    color: 'orange',
    icon: 'amarillo corriendo dorado.png',
    category: 'Milla',
    votes: 0
  },
  {
    title: 'Killer Tunes (Ritmos Asesinos)',
    en: 'Increase positioning ability when positioned toward the front mid-race. (Medium)',
    es: 'Aumenta la capacidad de posicionarse al estar al frente a mitad de carrera. (Media distancia)',
    color: 'orange',
    icon: 'amarillo corriendo dorado.png',
    category: 'Media',
    votes: 0
  },
  {
    title: 'Unyielding (Inquebrantable)',
    en: 'Increase ability to fight back when passed by another runner on the final corner. (Medium)',
    es: 'Aumenta la capacidad de contraatacar al ser adelantado en la última curva. (Media distancia)',
    color: 'orange',
    icon: 'amarillo corriendo dorado.png',
    category: 'Defensa',
    votes: 0
  },
  {
    title: 'Innate Experience (Experiencia Innata)',
    en: 'Increase velocity when near the inner rail on the final corner. (Long)',
    es: 'Aumenta la velocidad al correr cerca del riel interior en la última curva. (Larga distancia)',
    color: 'orange',
    icon: 'amarillo corriendo dorado.png',
    category: 'Larga',
    votes: 0
  },
  {
    title: 'Staggering Lead (Ventaja Abrumadora)',
    en: 'Increase ability to maintain the lead when leading by a large margin mid-race. (Sprint)',
    es: 'Aumenta la capacidad de mantener la delantera con una gran ventaja a mitad de carrera. (Sprint)',
    color: 'orange',
    icon: 'amarillo corriendo dorado.png',
    category: 'Sprint',
    votes: 0
  },
  {
    title: 'Changing Gears (Cambio de Marcha)',
    en: 'Increase passing ability when positioned toward the front mid-race. (Mile)',
    es: 'Aumenta la capacidad de adelantar cuando está en el frente a mitad de carrera. (Milla)',
    color: 'orange',
    icon: 'amarillo corriendo dorado.png',
    category: 'Milla',
    votes: 0
  },
  {
    title: 'Big-Sisterly (Como una Hermana Mayor)',
    en: 'Increase passing ability. (Mile)',
    es: 'Aumenta la capacidad de adelantar. (Milla)',
    color: 'orange',
    icon: 'amarillo corriendo dorado.png',
    category: 'Milla',
    votes: 0
  },
  {
    title: 'Vanguard Spirit (Espíritu de Vanguardia)',
    en: 'Increase ability to maintain the lead when leading by a large margin mid-race. (Long)',
    es: 'Aumenta la capacidad de mantener la delantera con una gran ventaja a mitad de carrera. (Larga distancia)',
    color: 'orange',
    icon: 'amarillo corriendo dorado.png',
    category: 'Larga',
    votes: 0
  },
  {
    title: 'Overwhelming Pressure (Presión Abrumadora)',
    en: 'Increase velocity when passing another runner late-race. (Long)',
    es: 'Aumenta la velocidad al adelantar a otro corredor al final de la carrera. (Larga distancia)',
    color: 'orange',
    icon: 'amarillo corriendo dorado.png',
    category: 'Larga',
    votes: 0
  },
  {
    title: '15,000,000 CC (15,000,000 CC)',
    en: 'Increase velocity on an uphill. (Late Surger)',
    es: 'Aumenta la velocidad en una subida. (Rematador Tardío)',
    color: 'orange',
    icon: 'amarillo corriendo dorado.png',
    category: 'Terreno',
    votes: 0
  },
  {
    title: 'Trending in the Charts! (¡Tendencia en los Rankings!)',
    en: 'Increase velocity when engaged in a challenge mid-race. (Dirt)',
    es: 'Aumenta la velocidad al entrar en un duelo a mitad de carrera. (Tierra)',
    color: 'orange',
    icon: 'amarillo corriendo dorado.png',
    category: 'Tierra',
    votes: 0
  },
  {
    title: 'Certain Victory (Victoria Segura)',
    en: 'Increase velocity with an indomitable fighting spirit when on the heels of another runner toward the front on the final straight.',
    es: 'Aumenta la velocidad con un espíritu de lucha indomable al estar pisando los talones de otro corredor en la recta final.',
    color: 'orange',
    icon: 'amarillo corriendo colores.png',
    category: 'Única (Tokai Teio)',
    votes: 0
  },
  {
    title: 'Legacy of the Strong (Legado del Fuerte)',
    en: 'Increase velocity when pressured by another runner and running out of energy toward the front on the final corner or later.',
    es: 'Aumenta la velocidad al ser presionado por otro corredor y quedarse sin energía hacia el frente en la última curva o después.',
    color: 'orange',
    icon: 'amarillo corriendo colores.png',
    category: 'Única (Mejiro McQueen)',
    votes: 0
  },
  {
    title: 'Warming Shot (Disparo de Calentamiento)',
    en: 'Slightly increase velocity with a long spurt starting halfway through the race.',
    es: 'Aumenta ligeramente la velocidad con un largo esprint comenzando a mitad de carrera.',
    color: 'orange',
    icon: 'amarillo corriendo colores.png',
    category: 'Única (Gold Ship)',
    votes: 0
  },
  {
    title: 'Xceleration (Xceleración)',
    en: 'Become stronger at challenging rivals and moderately increase velocity when positioned toward the front with 200m or less remaining.',
    es: 'Se vuelve más fuerte ante rivales desafiantes y aumenta moderadamente la velocidad al estar en el frente con 200m o menos restantes.',
    color: 'orange',
    icon: 'amarillo corriendo colores.png',
    category: 'Única (Vodka)',
    votes: 0
  },
  {
    title: 'Red Ace (As Rojo)',
    en: 'Slightly swell with the determination to stay number one in the second half of the race.',
    es: 'Aumenta ligeramente la determinación para mantenerse como número uno en la segunda mitad de la carrera.',
    color: 'orange',
    icon: 'amarillo corriendo colores.png',
    category: 'Única (Daiwa Scarlet)',
    votes: 0
  },
  {
    title: 'Focused Mind (Mente Centrada)',
    en: 'Moderately increase velocity with a strong turn of foot when passing another runner toward the back on the final straight.',
    es: 'Aumenta moderadamente la velocidad con un fuerte remate al adelantar desde atrás en la recta final.',
    color: 'orange',
    icon: 'amarillo corriendo colores.png',
    category: 'Única (Grass Wonder)',
    votes: 0
  },
  {
    title: 'Corazón ✯ Ardiente (Corazón ✯ Ardiente)',
    en: 'Slightly hang on to the advantage when positioned toward the front with energy to spare on the final straight.',
    es: 'Mantiene ligeramente la ventaja con energía restante al estar al frente en la recta final.',
    color: 'orange',
    icon: 'amarillo corriendo colores.png',
    category: 'Única (El Condor Pasa)',
    votes: 0
  },
  {
    title: 'Empress\'s Pride (Orgullo de Emperatriz)',
    en: 'Moderately increase velocity with the stride of an empress when passing another runner toward the back on the final corner.',
    es: 'Aumenta moderadamente la velocidad con el paso de una emperatriz al adelantar desde atrás en la última curva.',
    color: 'orange',
    icon: 'amarillo corriendo colores.png',
    category: 'Única (Air Groove)',
    votes: 0
  },
  {
    title: '1st Place Kiss✯ (Beso de Primer Lugar ✯)',
    en: 'Slightly increase ability to break out of the pack on the straight after engaging in a challenge toward the front on the final corner.',
    es: 'Aumenta ligeramente la capacidad de salir del grupo en la recta después de un duelo en la última curva.',
    color: 'orange',
    icon: 'amarillo corriendo colores.png',
    category: 'Única (Mayano Top Gun)',
    votes: 0
  },
  {
    title: 'V is for Victory! (¡V de Victoria!)',
    en: 'Refuse to back down from a challenge, moderately increasing velocity on the final straight.',
    es: 'Se rehúsa a rendirse en un desafío, aumentando moderadamente la velocidad en la recta final.',
    color: 'orange',
    icon: 'amarillo corriendo colores.png',
    category: 'Única (Winning Ticket)',
    votes: 0
  },
  {
  title: 'Class Rep = Speed = Bakushin (Delegada = Velocidad = Bakushin)',
  en: 'Moderately increase velocity with BAKUSHIN power when engaged in a challenge toward the front in the second half of the race.',
  es: 'Aumenta moderadamente la velocidad con el poder BAKUSHIN al enfrentarse a un desafío por la delantera en la segunda mitad de la carrera.',
  color: 'yellow',
  icon: 'amarillo corriendo colores.png',
  category: 'Única',
  votes: 0
},
{
  title: 'Luck Be With Me! (¡Que la Suerte me Acompañe!)',
  en: 'Moderately clear a path forward with the power of divination when the way ahead is jammed late-race.',
  es: 'Despeja moderadamente el camino con el poder de la adivinación cuando está bloqueado en la parte final de la carrera.',
  color: 'yellow',
  icon: 'amarillo corriendo colores.png',
  category: 'Única',
  votes: 0
},
{
  title: 'I Can Win Sometimes, Right? (A veces puedo ganar, ¿verdad?)',
  en: 'Moderately increase velocity with an arousal of fighting spirit when positioned 3rd and about to lose late-race.',
  es: 'Aumenta moderadamente la velocidad con un despertar del espíritu de lucha al estar en 3.er lugar y a punto de perder al final de la carrera.',
  color: 'yellow',
  icon: 'amarillo corriendo colores.png',
  category: 'Única',
  votes: 0
},
{
  title: 'Call Me King (Llámame Rey)',
  en: 'Increase velocity in a true display of skill with 200m remaining after racing calmly.',
  es: 'Aumenta la velocidad con una verdadera demostración de habilidad con 200 m restantes tras correr con calma.',
  color: 'yellow',
  icon: 'amarillo corriendo colores.png',
  category: 'Única',
  votes: 0
},
{
  title: 'Shooting Star (Estrella Fugaz)',
  en: 'Ride the momentum and increase velocity after passing another runner toward the front late-race.',
  es: 'Aprovecha el impulso y aumenta la velocidad después de adelantar a otra corredora hacia la delantera al final de la carrera.',
  color: 'yellow',
  icon: 'amarillo corriendo colores.png',
  category: 'Única',
  votes: 0
},
{
  title: 'The View from the Lead Is Mine! (¡La Vista desde la Delantera es Mía!)',
  en: 'Increase velocity by drawing on all remaining strength when in the lead by a fair margin on the final straight.',
  es: 'Aumenta la velocidad usando toda la fuerza restante al tener una buena ventaja en la recta final.',
  color: 'yellow',
  icon: 'amarillo corriendo colores.png',
  category: 'Única',
  votes: 0
},
{
  title: 'Sky-High Teio Step (Paso Teio por los Cielos)',
  en: 'Greatly increase velocity with flashy footwork when closing the gap to runners ahead on the final straight.',
  es: 'Aumenta mucho la velocidad con pasos ágiles al cerrar la distancia con las corredoras en la recta final.',
  color: 'yellow',
  icon: 'amarillo corriendo colores.png',
  category: 'Única',
  votes: 0
},
{
  title: 'Triumphant Pulse (Pulso Triunfante)',
  en: 'Greatly increase ability to break out of the pack by opening up a path when positioned toward the front with 200m remaining.',
  es: 'Aumenta mucho la capacidad de salir del grupo abriendo camino al estar cerca del frente con 200 m restantes.',
  color: 'yellow',
  icon: 'amarillo corriendo colores.png',
  category: 'Única',
  votes: 0
},
{
  title: 'Anchors Aweigh! (¡Anclas Fuera!)',
  en: 'Moderately increase velocity steadily with a long spurt starting halfway through the race.',
  es: 'Aumenta moderadamente la velocidad con una aceleración prolongada desde la mitad de la carrera.',
  color: 'yellow',
  icon: 'amarillo corriendo colores.png',
  category: 'Única',
  votes: 0
},
{
  title: 'Cut and Drive! (¡Cortar y Avanzar!)',
  en: 'Become stronger at challenging rivals and increase velocity when positioned toward the front with 200m or less remaining.',
  es: 'Te vuelves mejor desafiando rivales y aumentas la velocidad al estar en la parte delantera con 200 m o menos restantes.',
  color: 'yellow',
  icon: 'amarillo corriendo colores.png',
  category: 'Única',
  votes: 0
},
{
  title: 'Resplendent Red Ace (As Rojo Resplandeciente)',
  en: 'Swell with the determination to stay number one in the second half of the race.',
  es: 'Te llenas de determinación para mantenerte en primer lugar durante la segunda mitad de la carrera.',
  color: 'yellow',
  icon: 'amarillo corriendo colores.png',
  category: 'Única',
  votes: 0
},
{
  title: 'Where There’s a Will, There’s a Way (Donde Hay Voluntad, Hay Camino)',
  en: 'Increase velocity with a strong turn of foot when passing another runner toward the back on the final straight.',
  es: 'Aumenta la velocidad con un fuerte impulso al adelantar a otra corredora en la parte trasera de la recta final.',
  color: 'yellow',
  icon: 'amarillo corriendo colores.png',
  category: 'Única',
  votes: 0
},
{
  title: 'The Duty of Dignity Calls (El Deber de la Dignidad Llama)',
  en: 'Increase velocity with the determination to not be overtaken when positioned toward the front on the final corner.',
  es: 'Aumenta la velocidad con la determinación de no ser superada al estar cerca del frente en la curva final.',
  color: 'yellow',
  icon: 'amarillo corriendo colores.png',
  category: 'Única',
  votes: 0
},
{
  title: 'Victoria por plancha ✯ (Victoria por Plancha ✯)',
  en: 'Hang onto the advantage when positioned toward the front with energy to spare on the final straight.',
  es: 'Mantén la ventaja al estar en la delantera con energía de sobra en la recta final.',
  color: 'yellow',
  icon: 'amarillo corriendo colores.png',
  category: 'Única',
  votes: 0
},
{
  title: 'This Dance Is for Vittoria! (¡Este Baile es para Vittoria!)',
  en: 'Increase velocity with royal brilliance when engaged in a challenge toward the front on the final corner.',
  es: 'Aumenta la velocidad con brillantez real al enfrentar un desafío por el frente en la curva final.',
  color: 'yellow',
  icon: 'amarillo corriendo colores.png',
  category: 'Única',
  votes: 0
},
{
  title: 'Behold Thine Emperor’s Divine Might (Contempla el Poder Divino de tu Emperador)',
  en: 'Greatly increase velocity on the final straight after passing another runner 3 times late-race.',
  es: 'Aumenta mucho la velocidad en la recta final tras adelantar a otra corredora 3 veces al final de la carrera.',
  color: 'yellow',
  icon: 'amarillo corriendo colores.png',
  category: 'Única',
  votes: 0
},
{
  title: 'Blazing Pride (Orgullo Ardiente)',
  en: 'Increase velocity with the stride of an empress when passing another runner toward the back on the final corner.',
  es: 'Aumenta la velocidad con paso imperial al adelantar a otra corredora desde atrás en la curva final.',
  color: 'yellow',
  icon: 'amarillo corriendo colores.png',
  category: 'Única',
  votes: 0
},
{
  title: '.win Q.E.D. (.win Q.E.D.)',
  en: 'Increase velocity by deriving the winning equation when passing another runner toward the front on the final corner.',
  es: 'Aumenta la velocidad al resolver la ecuación ganadora tras adelantar a otra corredora en la parte delantera en la curva final.',
  color: 'yellow',
  icon: 'amarillo corriendo colores.png',
  category: 'Única',
  votes: 0
},
{
  title: 'Flashy✯Landing (Aterrizaje✯Brillante)',
  en: 'Increase ability to break out of the pack on the straight after engaging in a challenge toward the front on the final corner.',
  es: 'Aumenta la capacidad de salir del grupo en la recta tras enfrentar un desafío en la curva final.',
  color: 'yellow',
  icon: 'amarillo corriendo colores.png',
  category: 'Única',
  votes: 0
},
{
  title: 'G00 1st. 𓃠⋆ (G00 Primera. 𓃠⋆)',
  en: 'Increase velocity when positioned toward the front after making it to the final straight without faltering.',
  es: 'Aumenta la velocidad al estar en la delantera tras llegar a la recta final sin fallar.',
  color: 'yellow',
  icon: 'amarillo corriendo colores.png',
  category: 'Única',
  votes: 0
},
{
  title: 'Blue Rose Closer (Rematadora Rosa Azul)',
  en: 'Increase velocity with strong willpower when breaking out of the pack on the final straight.',
  es: 'Aumenta la velocidad con fuerte voluntad al salir del grupo en la recta final.',
  color: 'yellow',
  icon: 'amarillo corriendo colores.png',
  category: 'Única',
  votes: 0
},
  {
    title: "Our Ticket to Win! (¡Nuestro Boleto a la Victoria!)",
    en: "Refuse to back down from a challenge, increasing velocity on the final straight.",
    es: "Se niega a rendirse ante un desafío, aumentando la velocidad en la recta final.",
    icon: "amarillo corriendo colores.png",
    category: "Habilidad Única",
    votes: 0
  },
  {
    title: "Genius × Bakushin = Victory (Genio × Bakushin = Victoria)",
    en: "Increase velocity with BAKUSHIN power when engaged in a challenge toward the front in the second half of the race.",
    es: "Aumenta la velocidad con el poder BAKUSHIN al enfrentarse a un desafío en la delantera durante la segunda mitad de la carrera.",
    icon: "amarillo corriendo colores.png",
    category: "Habilidad Única",
    votes: 0
  },
  {
    title: "I See Victory in My Future! (¡Veo la Victoria en mi Futuro!)",
    en: "Clear a path forward with the power of divination when the way ahead is jammed late-race.",
    es: "Abre camino con el poder de la adivinación cuando el frente está bloqueado al final de la carrera.",
    icon: "amarillo corriendo colores.png",
    category: "Habilidad Única",
    votes: 0
  },
  {
    title: "Just a Little Farther! (¡Solo un Poco Más!)",
    en: "Increase velocity with flaring fighting spirit when positioned 3rd and about to lose late-race.",
    es: "Aumenta la velocidad con espíritu de lucha encendido cuando vas 3.º y estás por perder al final de la carrera.",
    icon: "amarillo corriendo colores.png",
    category: "Habilidad Única",
    votes: 0
  },
  {
    title: "Prideful King (Rey Orgulloso)",
    en: "Greatly increase velocity in a true display of skill with 200m remaining after racing calmly.",
    es: "Aumenta enormemente la velocidad con una verdadera muestra de habilidad al quedar 200m si has corrido con calma.",
    icon: "amarillo corriendo colores.png",
    category: "Habilidad Única",
    votes: 0
  },
  {
    title: "#LookatCurren (#MiraACurren)",
    en: "Gain momentum and begin to advance when passing another runner while well-positioned around halfway through the race.",
    es: "Gana impulso y comienza a avanzar al adelantar a otro corredor estando bien posicionado hacia la mitad de la carrera.",
    icon: "amarillo corriendo colores.png",
    category: "Habilidad Única",
    votes: 0
  },
  {
    title: "Nemesis (Némesis)",
    en: "Increase velocity with smoldering ambition when moving up from a position toward the back of the pack on the final corner.",
    es: "Aumenta la velocidad con ambición ardiente al avanzar desde el fondo del grupo en la última curva.",
    icon: "amarillo corriendo colores.png",
    category: "Habilidad Única",
    votes: 0
  },
  {
    title: "SPARKLY☆STARDOM (☆FAMA BRILLANTE☆)",
    en: "Become empowered against ceding the spotlight when about to lose the lead on a straight mid-race.",
    es: "Se fortalece para no ceder el protagonismo cuando está por perder la delantera en una recta a mitad de carrera.",
    icon: "amarillo corriendo colores.png",
    category: "Habilidad Única",
    votes: 0
  },
  {
    title: "Shadow Break (Ruptura Sombría)",
    en: "Increase velocity with beastly strength when passing another runner on the outside on the final corner or later.",
    es: "Aumenta la velocidad con fuerza bestial al adelantar por fuera en la curva final o después.",
    icon: "amarillo corriendo colores.png",
    category: "Habilidad Única",
    votes: 0
  },
  {
    title: "Eternal Moments (Momentos Eternos)",
    en: "Increase velocity when starting to make a move from a position toward the front mid-race.",
    es: "Aumenta la velocidad al iniciar un avance desde una posición delantera en mitad de carrera.",
    icon: "amarillo corriendo colores.png",
    category: "Habilidad Única",
    votes: 0
  },
  {
    title: "Flowery☆Maneuver (☆Maniobra Florida☆)",
    en: "Increase velocity when passing another runner toward the front on the final corner. If passing toward the back, increase acceleration instead.",
    es: "Aumenta la velocidad al adelantar a otro corredor en la parte delantera en la última curva. Si es en la parte trasera, aumenta la aceleración.",
    icon: "amarillo corriendo colores.png",
    category: "Habilidad Única",
    votes: 0
  },
  {
    title: "You and Me! One-on-One! (¡Tú y Yo! ¡Uno a Uno!)",
    en: "Increase velocity when passing another runner on the outside toward the back on the final straight.",
    es: "Aumenta la velocidad al adelantar a otro corredor por fuera hacia el fondo en la recta final.",
    icon: "amarillo corriendo colores.png",
    category: "Habilidad Única",
    votes: 0
  },
  {
    title: "Lights of Vaudeville (Luces del Vaudeville)",
    en: "Greatly increase velocity with a dazzling display when just breaking out of the pack toward the front on the final straight.",
    es: "Aumenta enormemente la velocidad con un despliegue deslumbrante al salir del grupo hacia el frente en la recta final.",
    icon: "amarillo corriendo colores.png",
    category: "Habilidad Única",
    votes: 0
  },
  {
    title: "KEEP IT REAL. (SÉ REAL.)",
    en: "Moderately increase acceleration steadily with a captivating performance when starting to make a move from midpack in the second half of the race.",
    es: "Aumenta moderadamente la aceleración con una actuación cautivadora al avanzar desde la mitad del grupo en la segunda mitad.",
    icon: "amarillo corriendo colores.png",
    category: "Habilidad Única",
    votes: 0
  },
  {
    title: "A Kiss for Courage (Un Beso por Valentía)",
    en: "Increase velocity with an enthusiastic “Let’s go!” when positioned toward the front in the second half of the race after recovering endurance with a skill.",
    es: "Aumenta la velocidad con un entusiasta “¡Vamos!” cuando estás delante en la segunda mitad tras recuperar resistencia con una habilidad.",
    icon: "amarillo corriendo colores.png",
    category: "Habilidad Única",
    votes: 0
  },
  {
    title: "I Never Goof Up! (¡Nunca la Arruino!)",
    en: "Aim for the front with unwavering determination when passing another runner from midpack or further back on a corner late-race.",
    es: "Apunta al frente con determinación inquebrantable al adelantar desde la mitad o el fondo del grupo en una curva al final.",
    icon: "amarillo corriendo colores.png",
    category: "Habilidad Única",
    votes: 0
  },
  {
    title: "Schwarzes Schwert (Espada Negra)",
    en: "Increase velocity in a dash for the lead after running calmly and according to plan up until the final straight.",
    es: "Aumenta la velocidad en una carrera por el liderato tras correr con calma y según el plan hasta la recta final.",
    icon: "amarillo corriendo colores.png",
    category: "Habilidad Única",
    votes: 0
  },
  {
    title: "Bountiful Harvest (Cosecha Abundante)",
    en: "Increase velocity with a surge of great fortune when pressured by another runner toward the back in the second half of the race.",
    es: "Aumenta la velocidad con una oleada de buena fortuna al ser presionado por otro corredor desde atrás en la segunda mitad.",
    icon: "amarillo corriendo colores.png",
    category: "Habilidad Única",
    votes: 0
  },
  {
    title: "Corner Adept × (Torpeza en Curvas ×)",
    en: "Moderately decrease velocity on a corner with clumsy turning.",
    es: "Disminuye moderadamente la velocidad en curvas debido a giros torpes.",
    icon: "amarillo corriendo morado.png",
    category: "Debilidad",
    votes: 0
  },
  {
    title: "Defeatist (Derrotista)",
    en: "Moderately increase urge to give up when positioned around the very back on the final straight.",
    es: "Aumenta moderadamente la tendencia a rendirse al estar al final del grupo en la recta final.",
    icon: "amarillo corriendo morado.png",
    category: "Debilidad",
    votes: 0
  },
  {
    title: "Reckless (Imprudente)",
    en: "Moderately increase carelessness when in the lead with around 200m remaining.",
    es: "Aumenta moderadamente la imprudencia al estar en la delantera con unos 200 m restantes.",
    icon: "amarillo corriendo morado.png",
    category: "Debilidad",
    votes: 0
  },
  {
    title: "Ignited Spirit SPD (Espíritu Encendido VEL)",
    en: "Burn bright with team spirit, slightly increasing velocity in proportion to the total Speed of racing team members mid-race.",
    es: "Arde con el espíritu de equipo, aumentando ligeramente la velocidad según la Velocidad total de los miembros del equipo a mitad de carrera.",
    icon: "amarillo corriendo reloj.png",
    category: "Apoyo de Equipo",
    votes: 0
  },
  {
    title: "Ignited Spirit GUTS (Espíritu Encendido AGU)",
    en: "Burn bright with team spirit, very slightly increasing vigor in proportion to the total Guts of racing team members late-race.",
    es: "Arde con el espíritu de equipo, aumentando muy ligeramente el vigor según el Aguante total del equipo al final de la carrera.",
    icon: "amarillo corriendo reloj.png",
    category: "Apoyo de Equipo",
    votes: 0
  },
  {
    title: "Burning Spirit SPD (Espíritu Ardiente VEL)",
    en: "Burn bright with team spirit, increasing velocity in proportion to the total Speed of racing team members mid-race.",
    es: "Arde intensamente con espíritu de equipo, aumentando la velocidad según la Velocidad total del equipo a mitad de carrera.",
    icon: "amarillo corriendo reloj dorado.png",
    category: "Apoyo de Equipo",
    votes: 0
  },
  {
    title: "Burning Spirit GUTS (Espíritu Ardiente AGU)",
    en: "Burn bright with team spirit, increasing vigor in proportion to the total Guts of racing team members late-race.",
    es: "Arde intensamente con espíritu de equipo, aumentando el vigor según el Aguante total del equipo al final de la carrera.",
    icon: "amarillo corriendo reloj dorado.png",
    category: "Apoyo de Equipo",
    votes: 0
  },
  {
    title: "Corner Acceleration ○ (Aceleración en Curvas ○)",
    en: "Slightly increase acceleration on a corner with masterful turning.",
    es: "Aumenta ligeramente la aceleración en curvas con giros expertos.",
    color: "yellow",
    icon: "amarillo corriendo dash.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "Straightaway Acceleration (Aceleración en Recta)",
    en: "Slightly increase acceleration on a straight.",
    es: "Aumenta ligeramente la aceleración en línea recta.",
    color: "yellow",
    icon: "amarillo corriendo dash.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "Nimble Navigator (Navegante Ágil)",
    en: "Slightly increase maneuverability when the way ahead is blocked in the last spurt.",
    es: "Aumenta ligeramente la maniobrabilidad cuando el camino está bloqueado en el último tramo.",
    color: "yellow",
    icon: "amarillo corriendo dash.png",
    category: "Técnica",
    votes: 0
  },
  {
    title: "Early Lead (Liderazgo Temprano)",
    en: "Slightly increase ability to go to the front early-race. (Front Runner)",
    es: "Aumenta ligeramente la habilidad para liderar al inicio de la carrera. (Corredor Frontal)",
    color: "yellow",
    icon: "amarillo corriendo dash.png",
    category: "Estrategia",
    votes: 0
  },
  {
    title: "Final Push (Impulso Final)",
    en: "Slightly increase ability to keep the lead on the final corner. (Front Runner)",
    es: "Aumenta ligeramente la habilidad para mantener el liderazgo en la última curva. (Corredor Frontal)",
    color: "yellow",
    icon: "amarillo corriendo dash.png",
    category: "Estrategia",
    votes: 0
  },
  {
    title: "Slick Surge (Impulso Elegante)",
    en: "Slightly increase acceleration late-race. (Late Surger)",
    es: "Aumenta ligeramente la aceleración en la fase final de la carrera. (Remontador)",
    color: "yellow",
    icon: "amarillo corriendo dash.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "Straightaway Spurt (Esprintada en Recta)",
    en: "Slightly increase acceleration on a straight in the last spurt. (End Closer)",
    es: "Aumenta ligeramente la aceleración en línea recta durante el último tramo. (Rematador)",
    color: "yellow",
    icon: "amarillo corriendo dash.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "Sprinting Gear (Marcha de Sprint)",
    en: "Slightly increase acceleration on a straight. (Sprint)",
    es: "Aumenta ligeramente la aceleración en línea recta. (Sprinter)",
    color: "yellow",
    icon: "amarillo corriendo dash.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "Updaters (Actualizadores)",
    en: "Slightly increase passing ability when positioned toward the back late-race. (Mile)",
    es: "Aumenta ligeramente la habilidad de adelantamiento desde atrás en la fase final. (Milla)",
    color: "yellow",
    icon: "amarillo corriendo dash.png",
    category: "Adelantamiento",
    votes: 0
  },
  {
    title: "Countermeasure (Contramedida)",
    en: "Slightly increase passing ability when positioned toward the front mid-race. (Sprint)",
    es: "Aumenta ligeramente la habilidad de adelantamiento cuando estás en el frente a mitad de carrera. (Sprinter)",
    color: "yellow",
    icon: "amarillo corriendo dash.png",
    category: "Adelantamiento",
    votes: 0
  },
  {
    title: "Acceleration (Aceleración)",
    en: "Slightly increase acceleration when passing another runner mid-race. (Mile)",
    es: "Aumenta ligeramente la aceleración al adelantar a otro corredor en mitad de carrera. (Milla)",
    color: "yellow",
    icon: "amarillo corriendo dash.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "Second Wind (Segundo Aire)",
    en: "Slightly increase acceleration when positioned toward the back mid-race. (Front Runner)",
    es: "Aumenta ligeramente la aceleración desde la parte trasera a mitad de carrera. (Corredor Frontal)",
    color: "yellow",
    icon: "amarillo corriendo dash.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "Shrewd Step (Paso Astuto)",
    en: "Slightly increase ability to navigate smoothly. (Pace Chaser)",
    es: "Aumenta ligeramente la habilidad para moverse con fluidez. (Perseguidor de Ritmo)",
    color: "yellow",
    icon: "amarillo corriendo dash.png",
    category: "Técnica",
    votes: 0
  },
  {
    title: "Straight Descent (Descenso Recto)",
    en: "Slightly improve running on a downhill. (Pace Chaser)",
    es: "Mejora ligeramente el rendimiento en bajadas. (Perseguidor de Ritmo)",
    color: "yellow",
    icon: "amarillo corriendo dash.png",
    category: "Técnica",
    votes: 0
  },
  {
    title: "Tactical Tweak (Ajuste Táctico)",
    en: "Slightly increase acceleration when positioned toward the back mid-race. (Pace Chaser)",
    es: "Aumenta ligeramente la aceleración desde la parte trasera a mitad de carrera. (Perseguidor de Ritmo)",
    color: "yellow",
    icon: "amarillo corriendo dash.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "Fighter (Luchador)",
    en: "Slightly increase passing ability. (Late Surger)",
    es: "Aumenta ligeramente la habilidad para adelantar. (Remontador)",
    color: "yellow",
    icon: "amarillo corriendo dash.png",
    category: "Adelantamiento",
    votes: 0
  },
  {
    title: "Highlander (Montañés)",
    en: "Slightly improve running on an uphill.",
    es: "Mejora ligeramente el rendimiento en subidas.",
    color: "yellow",
    icon: "amarillo corriendo dash.png",
    category: "Técnica",
    votes: 0
  },
  {
    title: "Groundwork (Trabajo de Base)",
    en: "Slightly increase acceleration after activating many skills early-race.",
    es: "Aumenta ligeramente la aceleración tras activar muchas habilidades al inicio de la carrera.",
    color: "yellow",
    icon: "amarillo corriendo dash.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "Corner Connoisseur (Conocedor de Curvas)",
    en: "Increase acceleration on a corner with masterful turning.",
    es: "Aumenta la aceleración en curvas con giros expertos.",
    color: "orange",
    icon: "amarillo corriendo dash dorado.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "Rushing Gale! (¡Ráfaga Impetuosa!)",
    en: "Increase acceleration on a straight.",
    es: "Aumenta la aceleración en línea recta.",
    color: "orange",
    icon: "amarillo corriendo dash dorado.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "No Stopping Me! (¡Nadie me Detiene!)",
    en: "Increase maneuverability when the way ahead is blocked in the last spurt.",
    es: "Aumenta la maniobrabilidad cuando el camino está bloqueado en el tramo final.",
    color: "orange",
    icon: "amarillo corriendo dash dorado.png",
    category: "Técnica",
    votes: 0
  },
  {
    title: "Taking the Lead (Tomando la Delantera)",
    en: "Increase ability to go to the front early-race. (Front Runner)",
    es: "Aumenta la habilidad para liderar al inicio de la carrera. (Corredor Frontal)",
    color: "orange",
    icon: "amarillo corriendo dash dorado.png",
    category: "Estrategia",
    votes: 0
  },
  {
    title: "Unrestrained (Sin Restricciones)",
    en: "Increase ability to keep the lead on the final corner. (Front Runner)",
    es: "Aumenta la habilidad para mantener el liderazgo en la última curva. (Corredor Frontal)",
    color: "orange",
    icon: "amarillo corriendo dash dorado.png",
    category: "Estrategia",
    votes: 0
  },
  {
    title: "On Your Left! (¡A tu Izquierda!)",
    en: "Increase acceleration late-race. (Late Surger)",
    es: "Aumenta la aceleración en la fase final de la carrera. (Remontador)",
    color: "orange",
    icon: "amarillo corriendo dash dorado.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "Encroaching Shadow (Sombra Inminente)",
    en: "Increase acceleration on a straight in the last spurt. (End Closer)",
    es: "Aumenta la aceleración en línea recta en el tramo final. (Rematador)",
    color: "orange",
    icon: "amarillo corriendo dash dorado.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "Turbo Sprint (Esprintado Turbo)",
    en: "Increase acceleration on a straight. (Sprint)",
    es: "Aumenta la aceleración en línea recta. (Sprinter)",
    color: "orange",
    icon: "amarillo corriendo dash dorado.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "Furious Feat (Hazaña Furiosa)",
    en: "Increase passing ability when positioned toward the back late-race. (Mile)",
    es: "Aumenta la habilidad para adelantar desde atrás en la fase final. (Milla)",
    color: "orange",
    icon: "amarillo corriendo dash dorado.png",
    category: "Adelantamiento",
    votes: 0
  },
  {
    title: "Plan X (Plan X)",
    en: "Increase passing ability when positioned toward the front mid-race. (Sprint)",
    es: "Aumenta la habilidad para adelantar cuando estás al frente a mitad de carrera. (Sprinter)",
    color: "orange",
    icon: "amarillo corriendo dash dorado.png",
    category: "Adelantamiento",
    votes: 0
  },
  {
    title: "Step on the Gas! (¡Pisa el Acelerador!)",
    en: "Increase acceleration when passing another runner mid-race. (Mile)",
    es: "Aumenta la aceleración al adelantar a otro corredor en mitad de carrera. (Milla)",
    color: "orange",
    icon: "amarillo corriendo dash dorado.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "Reignition (Reencendido)",
    en: "Increase acceleration when positioned toward the back mid-race. (Front Runner)",
    es: "Aumenta la aceleración desde la parte trasera a mitad de carrera. (Corredor Frontal)",
    color: "orange",
    icon: "amarillo corriendo dash dorado.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "Technician (Técnico)",
    en: "Moderately increase ability to navigate smoothly. (Pace Chaser)",
    es: "Aumenta moderadamente la habilidad para moverse con fluidez. (Perseguidor de Ritmo)",
    icon: "amarillo corriendo dash dorado.png",
    category: "Técnica",
    votes: 0
  },
  {
    title: "Determined Descent (Descenso Decidido)",
    en: "Moderately improve running on a downhill. (Pace Chaser)",
    es: "Mejora moderadamente el rendimiento en bajadas. (Perseguidor de Ritmo)",
    icon: "amarillo corriendo dash dorado.png",
    category: "Técnica",
    votes: 0
  },
  {
    title: "Shatterproof (A Prueba de Rupturas)",
    en: "Moderately increase acceleration when positioned toward the back mid-race. (Pace Chaser)",
    es: "Aumenta moderadamente la aceleración desde la parte trasera a mitad de carrera. (Perseguidor de Ritmo)",
    icon: "amarillo corriendo dash dorado.png",
    category: "Velocidad",
    votes: 0
  },
  {
    title: "Hard Worker (Trabajador Incansable)",
    en: "Moderately increase passing ability. (Late Surger)",
    es: "Aumenta moderadamente la habilidad para adelantar. (Remontador)",
    icon: "amarillo corriendo dash dorado.png",
    category: "Adelantamiento",
    votes: 0
  },
  {
    title: "Feel the Burn! (¡Siente el Ardor!)",
    en: "Moderately increase acceleration in an attempt to move up on a corner late-race.",
    es: "Aumenta moderadamente la aceleración al intentar avanzar en una curva al final de la carrera.",
    icon: "amarillo corriendo dash colorado.png",
    category: "Habilidad Única",
    votes: 0
  },
  {
    title: "Red Shift/LP1211-M (Corrimiento Rojo/LP1211-M)",
    en: "Increase acceleration by shifting gears when positioned toward the front on the final corner or later.",
    es: "Aumenta la aceleración al cambiar de marcha cuando estás en la delantera en la curva final o después.",
    icon: "amarillo corriendo dash colorado.png",
    category: "Habilidad Única",
    votes: 0
  },
  {
    title: "Shooting for Victory! (¡Disparando a la Victoria!)",
    en: "Increase acceleration with a pow, a wow, and a bang when well-positioned on the final corner.",
    es: "Aumenta la aceleración con un ¡pum!, un ¡guau! y un ¡bang! cuando estás bien posicionado en la curva final.",
    icon: "amarillo corriendo dash colorado.png",
    category: "Habilidad Única",
    votes: 0
  },
  {
    title: "Let's Pump Some Iron! (¡A Fortalecer esos Músculos!)",
    en: "Increase acceleration in an attempt to move up on a corner late-race.",
    es: "Aumenta la aceleración al intentar avanzar en una curva al final de la carrera.",
    icon: "amarillo corriendo dash colorado.png",
    category: "Habilidad Única",
    votes: 0
  },
  {
    title: "Angling and Scheming (Maquinaciones y Estrategias)",
    en: "Increase acceleration at an opportune moment when in the lead on a corner late-race.",
    es: "Aumenta la aceleración en un momento oportuno cuando estás en la delantera en una curva al final de la carrera.",
    icon: "amarillo corriendo dash colorado.png",
    category: "Habilidad Única",
    votes: 0
  },
  {
    title: "Condor's Fury (Furia del Cóndor)",
    en: "Increase acceleration with blazing passion when aiming for the front from midpack on the final corner.",
    es: "Aumenta la aceleración con pasión ardiente al ir hacia el frente desde la mitad del grupo en la curva final.",
    icon: "amarillo corriendo dash colorado.png",
    category: "Habilidad Única",
    votes: 0
  },
  {
    title: "Corner Acceleration × (Aceleración en Curvas ×)",
    en: "Moderately decrease acceleration on a corner with awkward turning.",
    es: "Disminuye moderadamente la aceleración en curvas debido a giros torpes.",
    icon: "amarillo corriendo dash morado.png",
    category: "Debilidad",
    votes: 0
  },
  {
    title: "Ignited Spirit PWR (Espíritu Encendido POT)",
    en: "Burn bright with team spirit, slightly increasing acceleration in proportion to the total Power of racing team members late-race.",
    es: "Arde con el espíritu de equipo, aumentando ligeramente la aceleración según el Poder total del equipo al final de la carrera.",
    icon: "amarillo corriendo dash reloj.png",
    category: "Apoyo de Equipo",
    votes: 0
  },
  {
    title: "Burning Spirit PWR (Espíritu Ardiente POT)",
    en: "Burn bright with team spirit, increasing acceleration in proportion to the total Power of racing team members late-race.",
    es: "Arde intensamente con el espíritu de equipo, aumentando la aceleración según el Poder total del equipo al final de la carrera.",
    icon: "amarillo corriendo dash reloj dorado.png",
    category: "Apoyo de Equipo",
    votes: 0
  },
  {
    title: "Prudent Positioning (Posicionamiento Prudente)",
    en: "Moderately increase navigation early-race.",
    es: "Aumenta moderadamente la navegación al inicio de la carrera.",
    icon: "pies amarillo.png",
    category: "Técnica",
    votes: 0
  },
  {
    title: "Go with the Flow (Sigue la Corriente)",
    en: "Moderately increase navigation late-race.",
    es: "Aumenta moderadamente la navegación al final de la carrera.",
    icon: "pies amarillo.png",
    category: "Técnica",
    votes: 0
  },
  {
    title: "Meticulous Measures (Medidas Meticulosas)",
    en: "Moderately prepare to make for the finish line mid-race. (Sprint)",
    es: "Se prepara moderadamente para llegar a la meta a mitad de carrera. (Sprinter)",
    icon: "pies amarillo.png",
    category: "Estrategia",
    votes: 0
  },
  {
    title: "Thunderbolt Step (Paso Rayo)",
    en: "Moderately avoid becoming surrounded when positioned toward the back mid-race. (Medium)",
    es: "Evita moderadamente quedar rodeado desde la parte trasera a mitad de carrera. (Media Distancia)",
    icon: "pies amarillo.png",
    category: "Técnica",
    votes: 0
  },
  {
    title: "Dodging Danger (Evitando el Peligro)",
    en: "Moderately avoid becoming surrounded early-race. (Front Runner)",
    es: "Evita moderadamente quedar rodeado al inicio de la carrera. (Corredor Frontal)",
    icon: "pies amarillo.png",
    category: "Técnica",
    votes: 0
  },
  {
    title: "Center Stage (Centro del Escenario)",
    en: "Increase navigation early-race.",
    es: "Aumenta la navegación al inicio de la carrera.",
    icon: "pies amarillo dorado.png",
    category: "Técnica",
    votes: 0
  },
  {
    title: "Lane Legerdemain (Destreza en Carril)",
    en: "Increase navigation late-race.",
    es: "Aumenta la navegación al final de la carrera.",
    icon: "pies amarillo dorado.png",
    category: "Técnica",
    votes: 0
  },
  {
    title: "Perfect Prep! (¡Preparación Perfecta!)",
    en: "Prepare to make for the finish line mid-race. (Sprint)",
    es: "Se prepara para llegar a la meta a mitad de carrera. (Sprinter)",
    icon: "pies amarillo dorado.png",
    category: "Estrategia",
    votes: 0
  },
  {
    title: "Lightning Step (Paso Relámpago)",
    en: "Avoid becoming surrounded when positioned toward the back mid-race. (Medium)",
    es: "Evita quedar rodeado desde la parte trasera a mitad de carrera. (Media Distancia)",
    icon: "pies amarillo dorado.png",
    category: "Técnica",
    votes: 0
  },
  {
    title: "Sixth Sense (Sexto Sentido)",
    en: "Avoid becoming surrounded early-race. (Front Runner)",
    es: "Evita quedar rodeado al inicio de la carrera. (Corredor Frontal)",
    icon: "pies amarillo dorado.png",
    category: "Técnica",
    votes: 0
  },
  {
    title: "Ignited Spirit WIT (Espíritu Encendido INT)",
    en: "Burn bright with team spirit, slightly increasing strategic navigation in proportion to the total Wit of racing team members early-race.",
    es: "Arde con el espíritu de equipo, aumentando ligeramente la navegación estratégica según la Inteligencia total del equipo al inicio de la carrera.",
    icon: "pies amarillo reloj.png",
    category: "Apoyo de Equipo",
    votes: 0
  },
  {
    title: "Burning Spirit WIT (Espíritu Ardiente INT)",
    en: "Burn bright with team spirit, increasing strategic navigation in proportion to the total Wit of racing team members early-race.",
    es: "Arde intensamente con espíritu de equipo, aumentando la navegación estratégica según la Inteligencia total del equipo al inicio de la carrera.",
    icon: "pies amarillo reloj dorado.png",
    category: "Apoyo de Equipo",
    votes: 0
  },
  {
    title: "Focus (Enfoque)",
    en: "Slightly decrease time lost to slow starts.",
    es: "Disminuye ligeramente el tiempo perdido por salidas lentas.",
    icon: "carril amarillo.png",
    category: "Salida",
    votes: 0
  },
  {
    title: "Concentration (Concentración)",
    en: "Decrease time lost to slow starts.",
    es: "Disminuye el tiempo perdido por salidas lentas.",
    icon: "carril amarillo dorado.png",
    category: "Salida",
    votes: 0
  },
  {
    title: "Gatekept (Bloqueado en la Puerta)",
    en: "Moderately increase time lost to slow starts.",
    es: "Aumenta moderadamente el tiempo perdido por salidas lentas.",
    icon: "carril morado.png",
    category: "Debilidad",
    votes: 0
  },
  {
    title: "Hawkeye (Ojo de Halcón)",
    en: "Moderately widen field of view with heightened observation early-race. (Medium)",
    es: "Amplía moderadamente el campo de visión con una observación aguda al inicio de la carrera. (Medio)",
    color: "red",
    icon: "amarillo corriendo visión.png",
    category: "Visión",
    votes: 0
  },
  {
    title: "Studious (Estudioso)",
    en: "Slightly widen field of view with heightened observation mid-race. (Late Surger)",
    es: "Amplía ligeramente el campo de visión con observación aguda a mitad de carrera. (Remontador)",
    color: "red",
    icon: "amarillo corriendo visión.png",
    category: "Visión",
    votes: 0
  },
  {
    title: "I Can See Right Through You (Puedo Verte Claramente)",
    en: "Slightly widen field of view with situational awareness when moving sideways. (End Closer)",
    es: "Amplía ligeramente el campo de visión con conciencia situacional al moverse lateralmente. (Rematador)",
    color: "red",
    icon: "amarillo corriendo visión.png",
    category: "Visión",
    votes: 0
  },
  {
    title: "Strategist (Estratega)",
    en: "Slightly widen field of view when positioned toward the back late-race. (End Closer)",
    es: "Amplía ligeramente el campo de visión cuando estás en la parte trasera en la fase final. (Rematador)",
    color: "red",
    icon: "amarillo corriendo visión.png",
    category: "Visión",
    votes: 0
  },
  {
    title: "Clairvoyance (Clarividencia)",
    en: "Widen field of view with heightened observation early-race. (Medium)",
    es: "Amplía el campo de visión con observación aguda al inicio de la carrera. (Medio)",
    color: "red",
    icon: "amarillo corriendo visión dorado.png",
    category: "Visión",
    votes: 0
  },
  {
    title: "The Bigger Picture (La Imagen Completa)",
    en: "Widen field of view with heightened observation mid-race. (Late Surger)",
    es: "Amplía el campo de visión con observación aguda a mitad de carrera. (Remontador)",
    color: "red",
    icon: "amarillo corriendo visión dorado.png",
    category: "Visión",
    votes: 0
  },
  {
    title: "The Coast is Clear! (¡La Costa Está Despejada!)",
    en: "Moderately widen field of view with situational awareness when moving sideways. (End Closer)",
    es: "Amplía moderadamente el campo de visión con conciencia situacional al moverse lateralmente. (Rematador)",
    color: "red",
    icon: "amarillo corriendo visión dorado.png",
    category: "Visión",
    votes: 0
  },
  {
    title: "Crusader (Cruzado)",
    en: "Widen field of view when positioned toward the back late-race. (End Closer)",
    es: "Amplía el campo de visión cuando estás en la parte trasera en la fase final. (Rematador)",
    color: "red",
    icon: "amarillo corriendo visión dorado.png",
    category: "Visión",
    votes: 0
  },
  {
    title: "Hesitant Front Runners (Corredores Fronterizos Indecisos)",
    en: "Slightly decrease velocity of front runners late-race.",
    es: "Reduce ligeramente la velocidad de los corredores frontales en la fase final.",
    color: "red",
    icon: "cansado rojo.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Hesitant Pace Chasers (Perseguidores de Ritmo Indecisos)",
    en: "Slightly decrease velocity of pace chasers late-race.",
    es: "Reduce ligeramente la velocidad de los perseguidores de ritmo en la fase final.",
    color: "red",
    icon: "cansado rojo.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Hesitant Late Surgers (Remontadores Indecisos)",
    en: "Slightly decrease velocity of late surgers late-race.",
    es: "Reduce ligeramente la velocidad de los remontadores en la fase final.",
    color: "red",
    icon: "cansado rojo.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Hesitant End Closers (Rematadores Indecisos)",
    en: "Slightly decrease velocity of end closers late-race.",
    es: "Reduce ligeramente la velocidad de los rematadores en la fase final.",
    color: "red",
    icon: "cansado rojo.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Intimidate (Intimidar)",
    en: "Moderately intimidate runners behind when positioned toward the front early-race. (Sprint)",
    es: "Intimida moderadamente a los corredores que están detrás cuando estás al frente al inicio de la carrera. (Sprinter)",
    color: "red",
    icon: "cansado rojo.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Speed Eater (Devorador de Velocidad)",
    en: "Slightly steal velocity from runners behind when in the lead mid-race. (Mile)",
    es: "Roba ligeramente velocidad a los corredores que están detrás al ir liderando a mitad de carrera. (Milla)",
    color: "red",
    icon: "cansado rojo.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Tether (Lazo)",
    en: "Slightly decrease velocity of runners ahead when positioned toward the back late-race. (Medium)",
    es: "Reduce ligeramente la velocidad de los corredores que están delante cuando estás atrás en la fase final. (Media Distancia)",
    color: "red",
    icon: "cansado rojo.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Intense Gaze (Mirada Intensa)",
    en: "Slightly unnerve runners in focus late-race. (End Closer)",
    es: "Desestabiliza ligeramente a los corredores enfocados al final de la carrera. (Rematador)",
    color: "red",
    icon: "cansado rojo.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Greed for Speed (Avaricia por Velocidad)",
    en: "Moderately steal velocity from runners behind when in the lead mid-race. (Mile)",
    es: "Roba moderadamente velocidad a los corredores que están detrás al ir liderando a mitad de carrera. (Milla)",
    color: "red",
    icon: "cansado rojo dorado.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Dominator (Dominador)",
    en: "Decrease velocity of runners ahead when positioned toward the back late-race. (Medium)",
    es: "Reduce la velocidad de los corredores que están delante cuando estás atrás en la fase final. (Media Distancia)",
    color: "red",
    icon: "cansado rojo dorado.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Petrifying Gaze (Mirada Petrificante)",
    en: "Unnerve runners in focus late-race. (End Closer)",
    es: "Desestabiliza a los corredores enfocados al final de la carrera. (Rematador)",
    color: "red",
    icon: "cansado rojo dorado.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Adored by All (Adorado por Todos)",
    en: "Intimidate runners behind when positioned toward the front early-race. (Sprint)",
    es: "Intimida a los corredores que están detrás cuando estás al frente al inicio de la carrera. (Sprinter)",
    color: "red",
    icon: "cansado rojo dorado.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Opening Gambit (Apertura Ofensiva)",
    en: "Slightly dull movement for runners ahead when positioned toward the back early-race. (Mile)",
    es: "Entorpece ligeramente el movimiento de los corredores que están delante cuando estás atrás al inicio de la carrera. (Milla)",
    color: "red",
    icon: "corriendo cansado rojo.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Restart (Reinicio)",
    en: "Slightly startle runners ahead when failing to get a lead early-race. (Front Runner)",
    es: "Sobresalta ligeramente a los corredores que están delante si no logras tomar la delantera al inicio de la carrera. (Corredor Frontal)",
    color: "red",
    icon: "corriendo cansado rojo.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Battle Formation (Formación de Batalla)",
    en: "Dull movement for runners ahead when positioned toward the back early-race. (Mile)",
    es: "Entorpece el movimiento de los corredores que están delante cuando estás atrás al inicio de la carrera. (Milla)",
    color: "red",
    icon: "corriendo cansado rojo dorado.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Frenzied Front Runners (Corredores Frontales Frenéticos)",
    en: "Increase time needed for front runners to calm down when they become rushed.",
    es: "Aumenta el tiempo que necesitan los corredores frontales para calmarse cuando se alteran.",
    color: "red",
    icon: "enojado rojo.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Frenzied Pace Chasers (Perseguidores de Ritmo Frenéticos)",
    en: "Increase time needed for pace chasers to calm down when they become rushed.",
    es: "Aumenta el tiempo que necesitan los perseguidores de ritmo para calmarse cuando se alteran.",
    color: "red",
    icon: "enojado rojo.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Frenzied Late Surgers (Remontadores Frenéticos)",
    en: "Increase time needed for late surgers to calm down when they become rushed.",
    es: "Aumenta el tiempo que necesitan los remontadores para calmarse cuando se alteran.",
    color: "red",
    icon: "enojado rojo.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Frenzied End Closers (Rematadores Frenéticos)",
    en: "Increase time needed for end closers to calm down when they become rushed.",
    es: "Aumenta el tiempo que necesitan los rematadores para calmarse cuando se alteran.",
    color: "red",
    icon: "enojado rojo.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Trick (Front) (Truco Frontal)",
    en: "Slightly increase fatigue for rushed runners behind when positioned toward the front mid-race.",
    es: "Aumenta ligeramente la fatiga de los corredores apresurados detrás cuando estás al frente en la mitad de la carrera.",
    icon: "energia roja.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Trick (Rear) (Truco Trasero)",
    en: "Slightly increase fatigue for rushed runners ahead when positioned toward the back mid-race.",
    es: "Aumenta ligeramente la fatiga de los corredores apresurados delante cuando estás atrás en la mitad de la carrera.",
    icon: "energia roja.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Subdued Front Runners (Corredores Frontales Reprimidos)",
    en: "Slightly increase fatigue for front runners early-race.",
    es: "Aumenta ligeramente la fatiga de los corredores delanteros al inicio de la carrera.",
    icon: "energia roja.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Flustered Front Runners (Corredores Frontales Nerviosos)",
    en: "Slightly increase fatigue for front runners mid-race.",
    es: "Aumenta ligeramente la fatiga de los corredores delanteros a mitad de carrera.",
    icon: "energia roja.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Subdued Pace Chasers (Perseguidores de Ritmo Reprimidos)",
    en: "Slightly increase fatigue for pace chasers early-race.",
    es: "Aumenta ligeramente la fatiga de los perseguidores al inicio de la carrera.",
    icon: "energia roja.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Flustered Pace Chasers (Perseguidores de Ritmo Nerviosos)",
    en: "Slightly increase fatigue for pace chasers mid-race.",
    es: "Aumenta ligeramente la fatiga de los perseguidores a mitad de carrera.",
    icon: "energia roja.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Subdued Late Surgers (Remontadores Tardíos Reprimidos)",
    en: "Slightly increase fatigue for late surgers early-race.",
    es: "Aumenta ligeramente la fatiga de los rematadores tardíos al inicio.",
    icon: "energia roja.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Flustered Late Surgers (Remontadores Tardíos Nerviosos)",
    en: "Slightly increase fatigue for late surgers mid-race.",
    es: "Aumenta ligeramente la fatiga de los rematadores tardíos a mitad de carrera.",
    icon: "energia roja.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Subdued End Closers (Finalizadores Reprimidos)",
    en: "Slightly increase fatigue for end closers early-race.",
    es: "Aumenta ligeramente la fatiga de los finalizadores al inicio.",
    icon: "energia roja.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Flustered End Closers (Finalizadores Nerviosos)",
    en: "Slightly increase fatigue for end closers mid-race.",
    es: "Aumenta ligeramente la fatiga de los finalizadores a mitad de carrera.",
    icon: "energia roja.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Stop Right There! (¡Detente Ahora!)",
    en: "Slightly cause panic in runners ahead when positioned toward the back early-race. (Sprint)",
    es: "Causa un poco de pánico en corredores delante si estás atrás al inicio. (Velocista)",
    icon: "energia roja.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Murmur (Murmuro)",
    en: "Slightly disturb runners directly ahead mid-race. (Medium)",
    es: "Molesta ligeramente a los corredores justo delante a mitad de carrera. (Media)",
    icon: "energia roja.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Stamina Eater (Devorador de Resistencia)",
    en: "Very slightly steal endurance from runners ahead when positioned toward the back mid-race. (Long)",
    es: "Roba una pequeña cantidad de resistencia a los corredores delante cuando estás atrás a mitad de carrera. (Larga)",
    icon: "energia roja.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Sharp Gaze (Mirada Aguda)",
    en: "Slightly startle other runners late-race. (Late Surger)",
    es: "Asusta ligeramente a otros corredores al final de la carrera. (Rematador tardío)",
    icon: "energia roja.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "You've Got No Shot (¡No Tienes Oportunidad!)",
    en: "Cause panic in runners ahead when positioned toward the back early-race. (Sprint)",
    es: "Causa pánico en los corredores delante cuando estás atrás al inicio. (Velocista)",
    icon: "energia roja dorada.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Mystifying Murmur (Murmuro Misterioso)",
    en: "Disturb runners directly ahead mid-race. (Medium)",
    es: "Molesta a los corredores directamente delante a mitad de carrera. (Media)",
    icon: "energia roja dorada.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Stamina Siphon (Sifón de Resistencia)",
    en: "Moderately steal endurance from runners ahead when positioned toward the back mid-race. (Long)",
    es: "Roba moderadamente resistencia a los corredores delante cuando estás atrás a mitad de carrera. (Larga)",
    icon: "energia roja dorada.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "All-Seeing Eyes (Ojos que Todo lo Ven)",
    en: "Startle other runners late-race. (Late Surger)",
    es: "Asusta a los demás corredores al final de la carrera. (Rematador tardío)",
    icon: "energia roja dorada.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Smoke Screen (Cortina de Humo)",
    en: "Moderately narrow the field of view for runners ahead late-race. (Long)",
    es: "Reduce moderadamente el campo de visión de los corredores que van delante al final de la carrera. (Larga)",
    color: "red",
    icon: "corriendo rayo rojo.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Disorient (Desorientar)",
    en: "Slightly narrow the field of view for runners behind when positioned toward the front late-race. (Pace Chaser)",
    es: "Reduce ligeramente el campo de visión de los corredores que están detrás al estar al frente al final de la carrera. (Perseguidor de Ritmo)",
    color: "red",
    icon: "corriendo rayo rojo.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Illusionist (Ilusionista)",
    en: "Narrow the field of view for runners ahead late-race. (Long)",
    es: "Reduce el campo de visión de los corredores que van delante al final de la carrera. (Larga)",
    color: "red",
    icon: "corriendo rayo rojo dorado.png",
    category: "Debuff",
    votes: 0
  },
  {
    title: "Dazzling Disorientation (Desorientación Deslumbrante)",
    en: "Moderately narrow the field of view for runners behind when positioned toward the front late-race. (Pace Chaser)",
    es: "Reduce moderadamente el campo de visión de los corredores que están detrás al estar al frente al final de la carrera. (Perseguidor de Ritmo)",
    color: "red",
    icon: "corriendo rayo rojo dorado.png",
    category: "Debuff",
    votes: 0
  }


];

const iconFilters = [
  'botas verdes.png',
  'corazón verde.png',
  'fuerza verde.png',
  'fuego verde.png',
  'libro verde.png',
  'lucky verde.png',
  'energia azul.png',
  'amarillo corriendo.png',
  'amarillo corriendo visión.png',
  'amarillo corriendo dash.png',
  'carril amarillo.png',
  'pies amarillo.png',
  'corriendo rayo rojo.png',
  'energia roja.png',
  'corriendo cansado rojo.png',
  'enojado rojo.png',
  'cansado rojo.png'
];

function normalizeIcon(icon) {
  return icon
    .replace(/energia roja.*(dorad[ao])\.png/i, 'energia roja.png')
    .replace(/amarillo corriendo dash.*(morad[ao]|dorad[ao])\.png/i, 'amarillo corriendo dash.png')
    .replace(/botas.*(morad[ao]|doradas)\.png/i, 'botas verdes.png')
    .replace(/coraz[oó]n.*(morad[ao]|dorad[ao])\.png/i, 'corazón verde.png')
    .replace(/fuerza.*(morad[ao]|dorad[ao])\.png/i, 'fuerza verde.png')
    .replace(/fuego.*(morad[ao]|dorad[ao])\.png/i, 'fuego verde.png')
    .replace(/libro.*(morad[ao]|dorad[ao])\.png/i, 'libro verde.png')
    .replace(/lucky.*(morad[ao]|dorad[ao])\.png/i, 'lucky verde.png')
    .replace(/energia.*(morad[ao]|dorad[ao])\.png/i, 'energia azul.png')
    .replace(/pies.*(morad[ao]|dorad[ao])\.png/i, 'pies amarillo.png')
    .replace(/carril.*(morad[ao]|dorad[ao])\.png/i, 'carril amarillo.png')
    .replace(/amarillo corriendo.*(morad[ao]|corriendo dorado|colores)\.png/i, 'amarillo corriendo.png')
    .replace(/visi[oó]n.*(morad[ao]|visión dorado)\.png/i, 'amarillo corriendo visión.png')
    .replace(/dash.*(morad[ao]|dorad[ao])\.png/i, 'amarillo corriendo dash.png')
    .replace(/corner acceleration.*\.png/i, 'amarillo corriendo dash.png')
    .replace(/(.*) dorado\.png$/i, '$1.png')
    .replace(/(.*) colorado\.png$/i, '$1.png')
    .replace(/(.*) reloj\.png$/i, '$1.png')
    .replace('moradas', 'verdes')
    .replace('morado', 'verde')
    .replace('rojas', 'rojo')
    .replace('roja', 'rojo')
    .replace('amarillas', 'amarillo')
    .replace('amarilla', 'amarillo')
    .replace('corriendo rayo rojo', 'corriendo rayo rojo')
    .replace('corriendo cansado rojo', 'corriendo cansado rojo');
}

const App = () => {
  const [showStickySearch, setShowStickySearch] = useState(false);
  const topSearchRef = React.useRef(null);
  const [selectedIcons, setSelectedIcons] = useState([]);
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.style.backgroundColor = '#0f172a';
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.backgroundColor = '#f9fafb';
      root.style.colorScheme = 'light';
    }
  }, [darkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickySearch(!entry.isIntersecting),
      { threshold: 0 }
    );
    if (topSearchRef.current) observer.observe(topSearchRef.current);
    return () => {
      if (topSearchRef.current) observer.unobserve(topSearchRef.current);
    };
  }, []);

  const filteredSkills = skills.filter(skill => {
    const iconMatch = selectedIcons.length > 0
      ? selectedIcons.includes(normalizeIcon(normalizeIcon(skill.icon)))
      : true;
    const searchMatch =
      skill.title.toLowerCase().includes(search.toLowerCase()) ||
      skill.en.toLowerCase().includes(search.toLowerCase()) ||
      skill.es.toLowerCase().includes(search.toLowerCase());
    return iconMatch && searchMatch;
  });

  return (
    <div className="min-h-screen px-4 py-6 bg-white text-gray-800 dark:bg-zinc-900 dark:text-zinc-100">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold tracking-tight">Guía de habilidades</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full border shadow bg-white dark:bg-zinc-800 hover:rotate-180 transition-transform"
        >
          {darkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-blue-600" />}
        </button>
      </div>

      <div className="mb-2 sticky top-2 z-30 bg-white dark:bg-zinc-900 pb-2 px-4">
  <input
    ref={topSearchRef}
    type="text"
    placeholder="Buscar habilidades..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full sm:w-auto flex-1 p-2 border rounded bg-white text-gray-800 dark:bg-zinc-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
  />
</div>

      <div className="mb-6">
  <button
    onClick={() => setShowFilters(!showFilters)}
    className="mb-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium shadow hover:brightness-110 transition"
  >
    {showFilters ? 'Ocultar filtros' : 'Filtrar'}
  </button>

  <AnimatePresence initial={false}>
  {showFilters && (
    <motion.div
      key="filters"
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: 'auto',
        opacity: 1,
        transition: { duration: 0.4, ease: 'easeInOut' }
      }}
      exit={{
        height: 0,
        opacity: 0,
        transition: { duration: 0.3, ease: 'easeInOut' }
      }}
      className="overflow-hidden"
    >
      <div className="flex flex-wrap gap-2 justify-start bg-white dark:bg-zinc-900 py-4 px-2 border border-gray-300 dark:border-zinc-800 rounded">
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => setSelectedIcons([])}
          className="p-1.5 text-sm rounded-full border border-gray-400 text-gray-700 dark:text-white hover:bg-red-500/10 hover:text-red-600 transition"
          title="Quitar filtros"
        >
          ❌
        </motion.button>

        {iconFilters.map((icon) => {
          const iconBase = normalizeIcon(normalizeIcon(icon));
          const isSelected = selectedIcons.includes(iconBase);

          return (
            <motion.button
              key={icon}
              whileTap={{ scale: 0.9 }}
              className={`border rounded-full p-1 shadow transition hover:scale-105 border-yellow-400 ${
                isSelected
                  ? 'bg-green-500 text-white dark:bg-yellow-400 dark:text-black ring-2 ring-yellow-400 animate-pulse'
                  : 'bg-white dark:bg-zinc-700 text-inherit'
              }`}
              onClick={() =>
                setSelectedIcons(prev =>
                  prev.includes(iconBase)
                    ? prev.filter(i => i !== iconBase)
                    : [...prev, iconBase]
                )
              }
            >
              <img
                src={`/icons/${icon}`}
                alt={icon}
                className="w-5 h-5 object-contain"
              />
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  )}
</AnimatePresence>
</div>
<AnimatePresence>
        {filteredSkills.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.title}
                className={`p-4 border rounded-lg shadow bg-white dark:bg-zinc-800 ${
                  /dorad[ao]|dorado/i.test(skill.icon)
                    ? 'border-yellow-400 animate-glow'
                    : /colorad[ao]|colores/.test(skill.icon)
                    ? 'border-4 border-transparent animate-rainbow'
                    : 'border-gray-300 dark:border-zinc-700'
                }`}
                initial={{ opacity: 0, y: -10, scaleY: 0.9 }}
animate={{ opacity: 1, y: 0, scaleY: 1 }}
exit={{ opacity: 0, y: -10, scaleY: 0.9 }}
transition={{ duration: 0.3, ease: 'easeInOut' }}

              >
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={`/icons/${skill.icon}`}
                    alt={skill.icon}
                    className="w-6 h-6"
                  />
                  <h3 className="font-semibold text-sm">{skill.title}</h3>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300">🔹 EN: {skill.en}</p>
                <p className="text-xs text-gray-600 dark:text-gray-300">🔸 ES: {skill.es}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm dark:text-gray-300">
            No hay habilidades que coincidan con el filtro o la búsqueda.
          </p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;