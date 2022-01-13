import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inicio from "./Pages/Inicio";
import AcessoConvenio from "./Pages/Acesso.Convenio";
import RedefinirSenhaConvenio from "./Pages/RedefinirSenha.Convenio";
import RoutesApp from "./Routes.app";

const Stack = createNativeStackNavigator();

export default function (props) {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Inicio"
					component={Inicio}
					options={{ headerShown: false }}
				/>

				<Stack.Screen
					name="AcessoConvenio"
					component={AcessoConvenio}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="RedefinirSenhaConvenio"
					component={RedefinirSenhaConvenio}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Aplicacao"
					component={RoutesApp}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
