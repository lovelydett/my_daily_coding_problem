/**
 * @description Singleton virtual base class
 * @author Yuting Xie
 * @date Oct 16, 2024
 */

abstract class SingletonBase {
    private static _instance: SingletonBase | null = null;

    protected constructor() {}

    public static getInstance<T extends SingletonBase>(this: new () => T): T {
        if (!SingletonBase._instance) {
            SingletonBase._instance = new this();
        }
        return SingletonBase._instance as T;
    }
}

abstract class AsyncSingletonBase {
    private static _instance: AsyncSingletonBase | null = null;

    protected constructor() {}

    protected abstract asyncInit(): Promise<void>; // Allow derived classes to implement this method to perform async initialization

    public static async getInstance<T extends AsyncSingletonBase>(
        this: new () => T
    ): Promise<T> {
        if (!AsyncSingletonBase._instance) {
            AsyncSingletonBase._instance = new this();
            await AsyncSingletonBase._instance.asyncInit();
        }
        return AsyncSingletonBase._instance as T;
    }
}

export { SingletonBase, AsyncSingletonBase };
