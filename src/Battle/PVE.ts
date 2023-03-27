import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _enemies: SimpleFighter[];

  constructor(player: Fighter, enemies: SimpleFighter[]) {
    super(player);
    this._player = player;
    this._enemies = enemies;
  }

  private checkIfBattleOver(): boolean {
    return this._player.lifePoints <= 0 || this._enemies.every(
      (enemy) => enemy.lifePoints <= 0,
    );
  }

  public fight(): number {
    while (this.checkIfBattleOver() === false) {
      this._enemies.forEach((enemy) => {
        this._player.attack(enemy);
        enemy.attack(this._player);
      });
    }

    return super.fight();
  }
}