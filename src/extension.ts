// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	vscode.debug.registerDebugConfigurationProvider('deno', {
		resolveDebugConfiguration(_, config) {
		  config.type = 'pwa-node';
		  config.request= 'launch';
		  return config;
		}
	});
}

// this method is called when your extension is deactivated
export function deactivate() {}
