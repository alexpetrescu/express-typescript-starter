export class AppVariable {
	static readonly NODE_PORT: string = "NODE_PORT";
	static readonly NODE_ENV: string = "NODE_ENV";
	static readonly KUBE_CLUSTER_NAME: string = "KUBE_CLUSTER_NAME";
	static readonly KUBE_CLUSTER_SERVER: string = "KUBE_CLUSTER_PASSWORD";
	static readonly KUBE_CLUSTER_USER: string = "KUBE_USER";
	static readonly KUBE_CLUSTER_PASSWORD: string = "KUBE_PASSWORD";
	static readonly KUBE_CLUSTER_CONTEXT_NAME: string = "KUBE_CONTEXT_NAME";
}

export class AppDefault {
	static readonly NODE_PORT: number = 3000;
	static readonly NODE_ENV: string = "DEV";
}
