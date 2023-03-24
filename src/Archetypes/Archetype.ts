import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _special = 0;
  private _cost = 0;

  constructor(private _name: string) {}

  public get name(): string {
    return this._name;
  }

  public get special(): number {
    return this._special;
  }

  public get cost(): number {
    return this._cost;
  }

  public static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  public abstract get energyType(): EnergyType;
}