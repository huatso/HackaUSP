import { Box } from '@gluestack-ui/themed';
import { Button } from '@react-navigation/elements';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';

interface RemedyProps {
    time: string;
    name: string;
    color: string;
    userName?: string;
}

const Remedy: React.FC<RemedyProps> = (RemedyProps) => {
    const handleJaTomei = () => {
        Alert.alert("Tomou")
    }
    const [isPressed, setIsPressed] = useState(false);

    // Estilos Tailwind convertidos do estilo React Native
    // Cor do fundo do item da lista (Laranja)
    const containerClasses = "bg-[#FF8C00] flex items-center justify-between p-4 my-2 rounded-xl shadow-lg";
    
    // Estilos base para o botão
    const baseButtonClasses = "px-4 py-2 rounded-lg border border-white font-bold transition-all duration-100 ease-out cursor-pointer focus:outline-none";
    // Estilos dos textos dentro do container

    const nameClasses = "text-xl font-semibold text-white w-1/2 truncate";

    // Estilos do botão "Tomei!" (usando classes Tailwind e estado condicional)
    const buttonVisualClasses = `bg-white text-gray-700 text-sm ${baseButtonClasses} ${isPressed ? 'opacity-60' : 'opacity-100'}`;
    
    // Adicionando handlers de mouse/touch para simular o 'pressed' state
    const handlePressIn = () => setIsPressed(true);
    const handlePressOut = () => {
        setIsPressed(false);
        handleJaTomei(); // Executa a ação ao soltar
    };

    return (
        <View className = "bg-[#FF8C00] flex items-center justify-between p-4 my-2 rounded-xl shadow-lg" style={styles.listItemContainer}>
            {/* Informações do Remédio */}
            <Text 
                className="bg-[#FF8C00] flex items-center justify-between p-4 my-2 rounded-xl shadow-lg"
                style={{
                
                }}>{RemedyProps.time}</Text>
            
            <Text 
                className="bg-[#FF8C00] flex items-center justify-between p-4 my-2 rounded-xl shadow-lg"
                style={styles.nameText}>{RemedyProps.name}</Text>
            
            {/* 💥 Botão "Tomei!" com Efeito de Fade (Esmaecimento) 💥 */}
            <Pressable
                // A ação é disparada ao soltar o dedo (onPress)
                onPress={handleJaTomei} 
                
                // Estilo com função que checa o estado 'pressed' para o efeito de Fade
                style={({ pressed }) => ([
                    styles.tomeiButtonBase,
                    // Estilo CONDICIONAL: Aplica o fade e o afundamento quando 'pressed' é true
                    pressed ? styles.tomeiButtonPressed : styles.tomeiButtonReleased,
                ])}
                accessibilityLabel="Tomar remédio"
            >
                <Text style={styles.tomeiButtonText}>Tomei!</Text>
            </Pressable>
        </View>
    );
};

// const styles = StyleSheet.create({
//     button: {
//         padding: 100,
//         borderRadius: 8,
//         margin: 200,
//         backgroundColor:"#EE640E",
//         width: "20%",
//         height:"25%",
//     },
//     buttonPressed: { 
//         opacity: 0.85,
//     },
// });

const styles = StyleSheet.create({
        button: {
        padding: 100,
        borderRadius: 8,
        margin: 200,
        backgroundColor:"#EE640E",
        width: "20%",
        height:"25%",
    },
    buttonPressed: { 
        opacity: 0.85,
    },
    appContainer: {
        flex: 1,
        backgroundColor: '#F7F7F7', // Fundo claro
        alignItems: 'center',
        paddingTop: 60, // Espaço para barra de status
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    listItemContainer: {
        backgroundColor: '#FF8C00', // Laranja que contrasta com o texto claro
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        marginVertical: 4,
        borderRadius: 12,
        width: '95%',
        alignSelf: 'center',
    },
    timeText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        flex: 2,
    },
    nameText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
        flex: 3,
    },
    // Estilo Base do Botão
    tomeiButtonBase: {
        backgroundColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'white', // Borda branca
    },
    // Estilo Aplicado ao Pressionar (Fade + Afundar)
    tomeiButtonPressed: {
        opacity: 0.6, // Efeito de fade
        transform: [{ scale: 0.95 }], // Afundamento visual
    },
    // Estilo Aplicado ao Soltar (Visibilidade normal)
    tomeiButtonReleased: {
        opacity: 1,
        transform: [{ scale: 1 }],
    },
    tomeiButtonText: {
        color: '#333333', // Texto escuro para alto contraste
        fontSize: 14,
        fontWeight: 'bold',
    },
    infoText: {
        fontSize: 12,
        color: '#999',
        marginTop: 20,
    }
});


export default Remedy;